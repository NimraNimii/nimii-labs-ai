// server/ai/helpers/retryAI.js

/**
 * Generic retry helper for AI model calls.
 */

const DEFAULT_OPTIONS = {
    retries: 3,
    delay: 1200,
    exponential: true,
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function isNonRetryableError(error) {
    const status = error?.status;
    const message = String(error?.message || "").toLowerCase();

    // OpenRouter / provider credit problems
    if (status === 402) {
        return true;
    }

    // Provider rate limits that explicitly say not to retry
    if (
        status === 429 &&
        (
            message.includes("tokens per day") ||
            message.includes("tpd") ||
            message.includes("x-should-retry") ||
            message.includes("try again in")
        )
    ) {
        return true;
    }

    // Invalid AI output
    if (
        error instanceof SyntaxError &&
        (
            message.includes("json") ||
            message.includes("unterminated") ||
            message.includes("unexpected")
        )
    ) {
        return true;
    }

    // Explicit parsing errors
    if (
        message.includes("invalid json") ||
        message.includes("invalid response") ||
        message.includes("empty response")
    ) {
        return true;
    }

    return false;
}

export async function retryAI(
    aiFunction,
    options = {}
) {
    const {
        retries,
        delay,
        exponential,
    } = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    let lastError;

    for (let attempt = 0; attempt <= retries; attempt++) {

        try {

            const response = await aiFunction();

            if (response == null) {
                throw new Error(
                    "retryAI: provider returned null or undefined."
                );
            }

            // String response
            if (typeof response === "string") {

                if (!response.trim()) {
                    throw new Error(
                        "retryAI: provider returned an empty string."
                    );
                }

                return response;
            }

            // Object response
            if (typeof response === "object") {

                if (Object.keys(response).length === 0) {
                    throw new Error(
                        "retryAI: provider returned an empty object."
                    );
                }

                return response;
            }

            return response;

        } catch (error) {

            lastError = error;

            console.error("\n==============================");
            console.error(
                `AI Attempt: ${attempt + 1} / ${retries + 1}`
            );
            console.error("Error:", error?.message);
            console.error("==============================\n");

            // IMPORTANT:
            // Don't waste retries on errors that cannot be
            // fixed by repeating the exact same request.
            if (isNonRetryableError(error)) {

                console.error(
                    "❌ Non-retryable AI error. Stopping retries."
                );

                throw error;
            }

            if (attempt === retries) {
                break;
            }

            const waitTime = exponential
                ? delay * Math.pow(2, attempt)
                : delay;

            console.log(
                `⏳ Retrying AI request in ${waitTime}ms...`
            );

            await sleep(waitTime);
        }
    }

    throw lastError;
}
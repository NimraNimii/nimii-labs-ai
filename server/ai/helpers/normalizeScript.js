// server/ai/helpers/normalizeScript.js

/**
 * Normalizes every AI model response into
 * one consistent script structure.
 *
 * Supported Models:
 * - Gemini
 * - DeepSeek
 * - Qwen
 * - Llama
 */

export function normalizeScript(script = {}) {

    // ----------------------------------------
    // INVALID RESPONSE
    // ----------------------------------------

    if (
        !script ||
        typeof script !== "object" ||
        Array.isArray(script)
    ) {
        return {
            title: "",
            hook: "",
            script: "",
            cta: "",
            hashtags: [],
            reason: {
                summary: "",
                improvements: [],
            },
        };
    }


    // ----------------------------------------
    // HELPER
    // ----------------------------------------

    const pick = (...keys) => {

        for (const key of keys) {

            const value = script[key];

            if (
                value !== undefined &&
                value !== null &&
                String(value).trim() !== ""
            ) {
                return value;
            }

        }

        return "";
    };


    // ----------------------------------------
    // NORMALIZE HASHTAGS
    // ----------------------------------------

    let hashtags = pick(
        "hashtags",
        "tags",
        "hashTags"
    );


    if (typeof hashtags === "string") {

        hashtags = hashtags
            .split(/[\s,]+/)
            .filter(
                tag =>
                    typeof tag === "string" &&
                    tag.startsWith("#")
            );

    }


    if (!Array.isArray(hashtags)) {

        hashtags = [];

    }


    // Clean hashtag values
    hashtags = hashtags
        .filter(
            tag =>
                typeof tag === "string" &&
                tag.trim()
        )
        .map(
            tag => tag.trim()
        );


    // ----------------------------------------
    // NORMALIZE REASON
    // ----------------------------------------

    let reason = script.reason;


    if (
        !reason ||
        typeof reason !== "object" ||
        Array.isArray(reason)
    ) {

        reason = {
            summary: "",
            improvements: [],
        };

    } else {

        reason = {

            summary:
                typeof reason.summary === "string"
                    ? reason.summary
                    : "",

            improvements:
                Array.isArray(reason.improvements)
                    ? reason.improvements
                        .filter(
                            item =>
                                typeof item === "string"
                        )
                        .map(
                            item => item.trim()
                        )
                        .filter(Boolean)
                    : [],

        };

    }


    // ----------------------------------------
    // RETURN STANDARDIZED OBJECT
    // ----------------------------------------

    return {

        title: pick(
            "title",
            "headline",
            "videoTitle"
        ),

        hook: pick(
            "hook",
            "opening",
            "intro",
            "firstLine"
        ),

        script: pick(
            "script",
            "body",
            "content",
            "mainScript"
        ),

        cta: pick(
            "cta",
            "callToAction",
            "ending",
            "closing"
        ),

        hashtags,

        reason,

    };

}
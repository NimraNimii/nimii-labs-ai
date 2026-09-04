import dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

import { cleanResponse } from "../ai/helpers/cleanResponse.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

/**
 * Generate text using OpenRouter.
 *
 * @param {string} prompt
 * @param {string} model
 * @param {number} temperature
 * @param {number} maxTokens
 * @returns {Promise<string>}
 */


export async function generateOpenRouter(
    prompt,
    model = "openrouter/free",
    temperature = 0.7,
    maxTokens = 500
) {
    if (!prompt || typeof prompt !== "string") {
        throw new Error("OpenRouter requires a valid prompt.");
    }

    if (!process.env.OPENROUTER_API_KEY) {
        throw new Error(
            "OPENROUTER_API_KEY is missing from environment variables."
        );
    }

    console.log("========== OPENROUTER REQUEST ==========");
    console.log("Model:", model);
    console.log("Temperature:", temperature);
    console.log("Max tokens:", maxTokens);
    console.log("Prompt length:", prompt.length);
    console.log("=========================================");

    let response;

    try {
        response = await client.chat.completions.create({
            model,

            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],

            temperature,

            // Rewrite tasks do not need extended reasoning.
            reasoning: {
                effort: "none",
            },

            max_tokens: maxTokens,
        });
    } catch (error) {
        console.error("========== OPENROUTER ERROR ==========");
        console.error("Message:", error?.message);
        console.error("Status:", error?.status);
        console.error("Code:", error?.code);
        console.error(
            "Response:",
            error?.response?.data || error?.error
        );
        console.error("Request ID:", error?.request_id);
        console.error("======================================");

        if (
            error?.status === 402 ||
            error?.code === 402 ||
            error?.error?.code === 402
        ) {
            const creditError = new Error(
                "OpenRouter credits are insufficient for this request. " +
                "The rewrite prompt is too large for the remaining OpenRouter balance. " +
                "Use a shorter prompt, a different provider/model, or add OpenRouter credits."
            );

            creditError.status = 402;
            creditError.code = 402;
            creditError.isCreditError = true;

            throw creditError;
        }

        throw error;
    }

const message = response?.choices?.[0]?.message;

console.log("========== OPENROUTER MODEL USED ==========");
console.log("Requested model:", model);
console.log("Actual model:", response?.model);
console.log(
    "Finish reason:",
    response?.choices?.[0]?.finish_reason
);
console.log(
    "Message:",
    response?.choices?.[0]?.message
);
console.log("============================================");

const content = message?.content;

    if (!content || typeof content !== "string") {
        console.error(
            "OpenRouter returned no final content.",
            {
                model: response?.model,
                finishReason:
                    response?.choices?.[0]?.finish_reason,
                hasReasoning:
                    Boolean(message?.reasoning),
                reasoningLength:
                    message?.reasoning?.length || 0,
            }
        );

        throw new Error(
            "OpenRouter returned no final content. " +
            "The model may have exhausted its output budget during reasoning."
        );
    }

    console.log("========== OPENROUTER SUCCESS ==========");
    console.log("Response length:", content.length);
    console.log("=========================================");

    return cleanResponse(content);
}
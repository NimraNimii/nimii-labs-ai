import dotenv from "dotenv";
import Groq from "groq-sdk";

import { retryAI } from "../ai/helpers/retryAI.js";
import { cleanResponse } from "../ai/helpers/cleanResponse.js";

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

async function generateFromGroq(model, prompt) {
    return retryAI(async () => {

        const response = await groq.chat.completions.create({

            model,

            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],

            temperature: 0.8,

            max_completion_tokens: 4000,

        });

        const text = response.choices?.[0]?.message?.content;

        if (!text?.trim()) {
            throw new Error(`Groq (${model}) returned an empty response.`);
        }

        return cleanResponse(text);
    });
}


/*
==========================================
Qwen
==========================================
*/

export async function generateQwen(prompt) {
    return generateFromGroq(
        "openai/gpt-oss-20b",
        prompt
    );
}


/*
==========================================
Llama
==========================================
*/

export async function generateLlama(prompt) {
    return generateFromGroq(
        "openai/gpt-oss-20b",
        prompt
    );
}


/*
==========================================
DeepSeek (Compatibility Wrapper)

Temporarily routes through GPT-OSS until
DeepSeek is enabled again.
==========================================
*/

export async function generateDeepseek(prompt) {
    return generateQwen(prompt);
}
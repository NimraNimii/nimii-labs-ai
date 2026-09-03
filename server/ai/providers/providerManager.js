import { generateGemini } from "../../services/geminiService.js";

import {
    generateDeepseek,
    generateQwen,
    generateLlama,
} from "../../services/groqService.js"

export async function generateAI({
    provider,
    prompt,
    model,
}) {

    switch (provider) {

        case "gemini":
            return generateGemini(prompt);

        case "deepseek":
            return generateDeepseek(prompt);

        case "qwen":
            return generateQwen(prompt);

        case "llama":
            return generateLlama(prompt);

        case "openrouter":
            return generateOpenRouter(prompt, model);

        default:
            throw new Error(`Unknown provider: ${provider}`);

    }

}
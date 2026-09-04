/*
=========================================================

NIMII LABS

Planner Engine

Purpose:
Connects Planner Stage with the AI providers.

Responsibilities

✔ Choose AI provider
✔ Execute Planner Prompt
✔ Return Raw Response

No Parsing
No Validation
No Business Logic

=========================================================
*/

import { generateDeepseek } from "../../services/groqService.js";
import { generateQwen } from "../../services/groqService.js";
import { generateLlama } from "../../services/groqService.js";
import { generateGemini } from "../../services/geminiService.js";


/*
=========================================================
Planner Provider

Later this will come from .env

plannerProvider

gemini
groq
openrouter

=========================================================
*/

const plannerProvider =
    process.env.PLANNER_PROVIDER ||
    "qwen";

/*
=========================================================
Planner Engine
=========================================================
*/

export async function plannerEngine(prompt) {

    switch (plannerProvider) {

        case "gemini":
            return await generateGemini(prompt);

        case "deepseek":
            return await generateDeepseek(prompt);

        case "qwen":
            return await generateQwen(prompt);

        case "llama":
            return await generateLlama(prompt);

        default:
            throw new Error(
                `Unknown Planner Provider: ${plannerProvider}`
            );
    }
}
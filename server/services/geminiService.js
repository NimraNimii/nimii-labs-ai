import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

import { retryAI } from "../ai/helpers/retryAI.js";
import { cleanResponse } from "../ai/helpers/cleanResponse.js";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export async function generateGemini(prompt) {
    return retryAI(async () => {

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt,
        });

        return cleanResponse(response.text);

    });
}
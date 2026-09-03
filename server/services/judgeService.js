import { buildJudgePrompt } from "../ai/prompts/judgePrompt.js";
import { retryAI } from "../ai/helpers/retryAI.js";
import { parseJson } from "../ai/helpers/parseJson.js";
import { generateGemini } from "./geminiService.js";

export async function judgeResults(scripts) {

    console.log("1. judgeResults started");

    return retryAI(
        async () => {

            console.log("2. Building compact judge prompt");

            // =========================================
            // COMPACT INPUT
            // =========================================

            const compactScripts = scripts.map((item, index) => ({
                id: index + 1,

                writer:
                    item.writer ||
                    item.provider ||
                    `Writer ${index + 1}`,

                title: String(
                    item.script?.title || ""
                ).slice(0, 120),

                hook: String(
                    item.script?.hook || ""
                ).slice(0, 220),

                script: String(
                    item.script?.script || ""
                ).slice(0, 700),

                cta: String(
                    item.script?.cta || ""
                ).slice(0, 150),
            }));

            console.log(
                "===== COMPACT JUDGE INPUT ====="
            );

            console.log(
                JSON.stringify(
                    compactScripts,
                    null,
                    2
                )
            );

            // =========================================
            // BUILD PROMPT
            // =========================================

            const prompt = buildJudgePrompt(
                compactScripts
            );

            console.log(
                "===== JUDGE PROMPT LENGTH ====="
            );



console.log(
    "Characters:",
    prompt.length
);

// =========================================
// GEMINI JUDGE
// =========================================

console.log(
    "========== GEMINI JUDGE =========="
);

const response =
    await generateGemini(prompt);

console.log(
    "===== JUDGE RESPONSE ====="
);

console.log(response);


            

            // =========================================
            // EMPTY RESPONSE CHECK
            // =========================================

            if (
                !response ||
                !String(response).trim()
            ) {
                throw new Error(
                    "Judge model returned an empty response."
                );
            }

            // =========================================
            // PARSE JSON
            // =========================================

            const parsed =
                parseJson(response);

            console.log(
                "===== JUDGE PARSED ====="
            );

            console.dir(
                parsed,
                { depth: null }
            );

            // =========================================
            // NORMALIZE
            // =========================================

         const winnerIndex = Number(parsed.winner) - 1;

if (
    !Number.isInteger(winnerIndex) ||
    winnerIndex < 0 ||
    winnerIndex >= scripts.length
) {
    throw new Error(
        `Invalid judge winner: ${parsed.winner}`
    );
}

const winnerScript = scripts[winnerIndex];

const finalWinner = {
    title: winnerScript.script?.title || "",
    hook: winnerScript.script?.hook || "",
    script: winnerScript.script?.script || "",
    cta: winnerScript.script?.cta || "",
    hashtags: winnerScript.script?.hashtags || [],

    reason: parsed.reason || "",
    judgeScore: Number(parsed.score) || 0,

    winner: parsed.winner,
    writer:
        winnerScript.writer ||
        winnerScript.provider ||
        `Writer ${parsed.winner}`,
};

console.log(
    "===== SELECTED WINNER ====="
);

console.dir(
    finalWinner,
    { depth: null }
);

return finalWinner;

        },
        {
            retries: 1,
            delay: 1000,
            exponential: false,
        }
    );
}
// server/ai/rewrite/rewriteService.js

import { buildRewritePrompt } from "./rewritePrompt.js";

import { generateQwen } from "../../services/groqService.js";

import { parseJson } from "../helpers/parseJson.js";

import { retryAI } from "../helpers/retryAI.js";

import { overallScore } from "../scoring/overallScore.js";

import generateAnalysis from "../analysis/generateAnalysis.js";

import stringSimilarity from "string-similarity";

import mergeRewrite from "./mergeRewrite.js";


// ==========================================================
// REWRITE TARGET MAP
// ==========================================================

const TARGET_FIELDS = {

    improve_hook: "hook",

    improve_retention: "script",

    improve_curiosity: "script",

    improve_emotion: "script",

    improve_platform: "script",

    improve_cta: "cta",

};


// ==========================================================
// MAIN REWRITE FUNCTION
// ==========================================================

export async function rewriteScript({

    script,

    analysis,

    rewriteType,

    target,

    creativePlan,

    blueprint,

    platform = "TikTok",

    dnaMode = "Teach Hard",

}) {

    // ======================================================
    // VALIDATE REWRITE TYPE
    // ======================================================

    const targetField =
        TARGET_FIELDS[rewriteType];

    if (!targetField) {

        throw new Error(
            `Unknown rewrite type: ${rewriteType}`
        );

    }


    // ======================================================
    // VALIDATE ORIGINAL SCRIPT
    // ======================================================

    if (
        !script ||
        typeof script !== "object"
    ) {

        throw new Error(
            "Invalid script supplied for rewrite."
        );

    }


    if (
        typeof script[targetField] !== "string" ||
        !script[targetField].trim()
    ) {

        throw new Error(
            `Original ${targetField} is empty.`
        );

    }


    // ======================================================
    // RESOLVE TARGET
    // ======================================================

  const resolvedTarget = String(
    target ||
    rewriteType.replace(/^improve_/, "")
)
    .trim()
    .toLowerCase()
    .replace(/^improve_/, "");


    // ======================================================
    // RETRY WRAPPER
    // ======================================================

    return retryAI(

        async () => {

            // ==============================================
            // BUILD COMPACT TARGETED PROMPT
            // ==============================================

            const prompt =
                buildRewritePrompt({

                    title:
                        script.title || "",

                    hook:
                        script.hook || "",

                    script:
                        script.script || "",

                    cta:
                        script.cta || "",

                    hashtags:
                        script.hashtags || [],

                    target:
                        resolvedTarget,

                    creativePlan,

                    blueprint,

                    platform,

                    dnaMode,

                    analysis,

                });


            console.log(
                "========== REWRITE REQUEST =========="
            );

            console.log(
                "Rewrite Type:",
                rewriteType
            );

            console.log(
                "Target:",
                resolvedTarget
            );

            console.log(
                "Target Field:",
                targetField
            );

            console.log(
                "Platform:",
                platform
            );

            console.log(
                "Prompt Length:",
                prompt.length
            );

            console.log(
                "====================================="
            );


            // ==============================================
            // CALL AI
            // ==============================================

const raw = await generateQwen(prompt);


            console.log(
                "========== RAW REWRITE =========="
            );

            console.log(raw);







            


            // ==============================================
            // EMPTY RESPONSE
            // ==============================================

            if (
                !raw ||
                !String(raw).trim()
            ) {

                throw new Error(
                    "Rewrite model returned an empty response."
                );

            }


 let rewritten;
let rewriteReason = "";

if (rewriteType === "improve_hook") {

 let rewrittenHook = "";
let parsedHook = null;

const rawText = String(raw).trim();

// Qwen should return structured JSON:
// {
//   "target": "hook",
//   "rewritten": "...",
//   "reason": "..."
// }
//
// First try the normal JSON parser.
try {
    const candidate = parseJson(rawText);

    if (
        candidate &&
        typeof candidate === "object" &&
        !Array.isArray(candidate) &&
        typeof candidate.rewritten === "string" &&
        candidate.rewritten.trim()
    ) {
        parsedHook = candidate;
        rewrittenHook = candidate.rewritten.trim();
    }

} catch (error) {

    console.error(
        "Hook JSON parsing failed. Attempting safe extraction."
    );

    console.error(
        "Parse error:",
        error?.message
    );
}

// --------------------------------------------------
// SAFE FALLBACK FOR MALFORMED JSON
// --------------------------------------------------
//
// Never use the complete raw JSON response as the hook.
// If Qwen returned a JSON-like response that could not
// be parsed normally, extract only the "rewritten" value.

if (!rewrittenHook) {

    const rewrittenMatch = rawText.match(
        /"rewritten"\s*:\s*"((?:\\.|[^"\\])*)"/s
    );

    if (rewrittenMatch?.[1]) {

        try {

            rewrittenHook = JSON.parse(
                `"${rewrittenMatch[1]}"`
            ).trim();

        } catch {

            rewrittenHook = rewrittenMatch[1]
                .replace(/\\"/g, '"')
                .replace(/\\n/g, " ")
                .replace(/\\r/g, "")
                .replace(/\\t/g, " ")
                .trim();
        }
    }
}

// --------------------------------------------------
// PLAIN TEXT FALLBACK
// --------------------------------------------------
//
// Only treat the response as plain text if it does
// NOT look like a JSON object.

if (!rewrittenHook) {

    const looksLikeJson =
        rawText.startsWith("{") &&
        rawText.endsWith("}");

    if (!looksLikeJson) {
        rewrittenHook = rawText
            .replace(/^["']|["']$/g, "")
            .trim();
    }
}

if (!rewrittenHook) {

    throw new Error(
        "Hook rewrite model returned an invalid response."
    );
}

    rewritten = {
        title: script.title || "",
        hook: rewrittenHook,
        script: script.script || "",
        cta: script.cta || "",
        hashtags: Array.isArray(script.hashtags)
            ? script.hashtags
            : [],
    };

    rewriteReason =
        parsedHook?.reason || {
            summary:
                "Improved the hook for stronger curiosity and immediate attention.",
            improvements: [
                "Stronger opening",
                "Higher curiosity",
                "More natural creator-style wording",
            ],
        };
}
    
else {
    let parsed;

    try {
        parsed = parseJson(raw);
    } catch (error) {
        console.error(
            "Failed to parse rewrite JSON:",
            error
        );

        throw new Error(
            "Rewrite model returned invalid JSON."
        );
    }

    if (
        !parsed ||
        typeof parsed !== "object" ||
        Array.isArray(parsed)
    ) {
        throw new Error(
            "Rewrite model returned invalid JSON."
        );
    }


    const returnedTarget = String(parsed.target || "")
    .trim()
    .toLowerCase()
    .replace(/^improve_/, "");

const expectedTarget = String(target || "")
    .trim()
    .toLowerCase()
    .replace(/^improve_/, "");

console.log("===== TARGET VALIDATION =====");
console.log("Expected Target:", expectedTarget);
console.log("AI Returned Target:", returnedTarget);

if (returnedTarget !== expectedTarget) {
    throw new Error(
        `Rewrite target mismatch. Expected "${expectedTarget}" but received "${returnedTarget}".`
    );
}

    const rewrittenValue = parsed.rewritten;

    if (
        typeof rewrittenValue !== "string" ||
        !rewrittenValue.trim()
    ) {
        throw new Error(
            `Rewrite model returned an empty "${targetField}" rewrite.`
        );
    }

    rewritten = {
        title: script.title || "",
        hook: script.hook || "",
        script: script.script || "",
        cta: script.cta || "",
        hashtags: Array.isArray(script.hashtags)
            ? script.hashtags
            : [],
    };

    rewritten[targetField] =
        rewrittenValue.trim();

    rewriteReason = parsed.reason || "";
}

// =============================================================
// PROTECT NON-TARGET FIELDS

            const protectedFields = [

                "title",

                "hook",

                "script",

                "cta",

                "hashtags",

            ].filter(
                field =>
                    field !== targetField
            );


            for (
                const field of protectedFields
            ) {

                const originalValue =
                    JSON.stringify(
                        script[field]
                    );

                const rewrittenOriginal =
                    JSON.stringify(
                        rewritten[field]
                    );


                if (
                    originalValue !==
                    rewrittenOriginal
                ) {

                    throw new Error(
                        `Invalid rewrite: protected field "${field}" was changed.`
                    );

                }

            }


            // ==============================================
            // TARGET MUST ACTUALLY CHANGE
            // ==============================================

            const originalTarget =
                String(
                    script[targetField] || ""
                )
                    .trim()
                    .toLowerCase();


            const newTarget =
                String(
                    rewritten[targetField] || ""
                )
                    .trim()
                    .toLowerCase();


            if (
                originalTarget ===
                newTarget
            ) {

                throw new Error(
                    `${targetField} rewrite is identical to the original.`
                );

            }

// =============================================================
// HOOK SIMILARITY
// =============================================================

if (targetField === "hook") {
    const similarity =
        stringSimilarity.compareTwoStrings(
            rewritten.hook.toLowerCase(),
            script.hook.toLowerCase()
        );

    console.log(
        "Hook similarity:",
        similarity
    );

    if (similarity > 0.75) {
        throw new Error(
            `Hook too similar (${Math.round(
                similarity * 100
            )}%).`
        );
    }
}

            // ==============================================
            // MERGE
            // ==============================================

            const merged =
                mergeRewrite({

                    original:
                        script,

                    rewritten,

                    rewriteType,

                });


            console.log(
                "========== MERGED REWRITE =========="
            );

            console.dir(
                merged,
                { depth: null }
            );


            // ==============================================
            // RECALCULATE SCORE
            // ==============================================

            const scores =
                overallScore(

                    merged,

                    platform

                );


            // ==============================================
            // REBUILD ANALYSIS
            // ==============================================

            const updatedAnalysis =
                generateAnalysis(
                    scores
                );


            // ==============================================
            // FINAL RESULT
            // ==============================================

            const result = {

                title:
                    merged.title || "",

                hook:
                    merged.hook || "",

                script:
                    merged.script || "",

                cta:
                    merged.cta || "",

                hashtags:
                    Array.isArray(
                        merged.hashtags
                    )
                        ? merged.hashtags
                        : [],
reason:
    rewriteReason,
                scores,

                analysis:
                    updatedAnalysis,

            };


            console.log(
                "========== FINAL REWRITE RESULT =========="
            );

            console.dir(
                result,
                { depth: null }
            );


            return result;

        },

        {

            retries: 1,

            delay: 1000,

            exponential: false,

        }

    );

}
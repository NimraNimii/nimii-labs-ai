import { buildSelfCriticPrompt } from "../prompts/selfCritic.js";
import { parseJson } from "../helpers/parseJson.js";
import { normalizeScript } from "../helpers/normalizeScript.js";
import { generateQwen } from "../../services/groqService.js";

export async function runReviewStage({
    script,
    creativePlan,
    blueprint,
    platform,
    dnaMode,
}) {
    try {
        // -----------------------------------------
        // BUILD REVIEW PROMPT
        // -----------------------------------------

       const prompt = buildSelfCriticPrompt({
    creativePlan,
    blueprint,

    title: script.title,
    hook: script.hook,
    script: script.script,
    cta: script.cta,
    hashtags: script.hashtags,

    platform,
    dnaMode,
});

        console.log("===== REVIEW PROMPT =====");
        console.log(prompt);

        // -----------------------------------------
        // CALL REVIEW MODEL
        // -----------------------------------------

        const response = await generateQwen(
            prompt,
            "qwen/qwen3-32b"
        );

        console.log("===== REVIEW RESPONSE =====");
        console.log(response);

        // -----------------------------------------
        // VALIDATE RESPONSE
        // -----------------------------------------

        if (!response || !response.trim()) {
            throw new Error(
                "Review model returned an empty response."
            );
        }

        // -----------------------------------------
        // PARSE JSON
        // -----------------------------------------

        const parsed = parseJson(response);

        console.log("===== REVIEW PARSED =====");
        console.log(parsed);

        // -----------------------------------------
        // NORMALIZE FINAL SCRIPT
        // -----------------------------------------

        const normalized = normalizeScript(parsed);

return {
    title: normalized.title || script.title || "",
    hook: normalized.hook || script.hook || "",
    script: normalized.script || script.script || "",
    cta: normalized.cta || script.cta || "",
    hashtags:
        normalized.hashtags?.length
            ? normalized.hashtags
            : (script.hashtags || []),
};

    } catch (error) {
        console.error("========== REVIEW ERROR ==========");
        console.error("Message:", error.message);
        console.error("Stack:", error.stack);
        console.error("==================================");

        throw error;
    }
}
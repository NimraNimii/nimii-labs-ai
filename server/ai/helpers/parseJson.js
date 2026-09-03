// server/ai/helpers/parseJson.js

import { cleanResponse } from "./cleanResponse.js";

/**
 * Safely parses AI JSON responses.
 *
 * - Cleans markdown/code fences
 * - Extracts JSON object
 * - Removes trailing commas
 * - Rejects non-JSON responses
 * - Throws readable errors
 */

export function parseJson(response) {

    if (!response || typeof response !== "string") {
        throw new Error("AI returned an empty response.");
    }

    let cleaned = cleanResponse(response);

    console.log("========== CLEANED ==========");
    console.log(cleaned);
    console.log("=============================");

    if (!cleaned) {
        throw new Error("AI returned an empty response.");
    }

    // --------------------------------------------------
    // Reject known non-JSON responses
    // --------------------------------------------------

    if (/^User Safety\s*:/i.test(cleaned)) {
        console.error(
            "AI returned a safety/moderation message instead of JSON:",
            cleaned
        );

        throw new Error(
            "Rewrite model returned a non-JSON safety response."
        );
    }

    // --------------------------------------------------
    // Extract JSON object
    // --------------------------------------------------

    const first = cleaned.indexOf("{");
    const last = cleaned.lastIndexOf("}");

    if (first === -1 || last === -1 || last <= first) {
        console.error(
            "AI response does not contain a JSON object:",
            cleaned
        );

        throw new Error(
            "Rewrite model returned invalid JSON."
        );
    }

    cleaned = cleaned.slice(first, last + 1);

    // --------------------------------------------------
    // Remove trailing commas
    // --------------------------------------------------

    cleaned = cleaned.replace(
        /,\s*([}\]])/g,
        "$1"
    );

    // --------------------------------------------------
    // Parse JSON
    // --------------------------------------------------

    try {

        const parsed = JSON.parse(cleaned);

        console.log("========== JSON PARSED SUCCESSFULLY ==========");
        console.log(parsed);
        console.log("===============================================");

        return parsed;

    } catch (err) {

        console.error(
            "========== JSON PARSE ERROR =========="
        );

        console.error(
            "Cleaned response:",
            cleaned
        );

        console.error(
            "Original response:",
            response
        );

        console.error(
            "Error:",
            err.message
        );

        console.error(
            "======================================="
        );

        throw new Error(
            "Rewrite model returned invalid JSON."
        );
    }
}
/*
=========================================================

NIMII LABS

Planner Parser

Purpose:
Safely converts Planner AI output into
a JavaScript object.

Removes:

- Markdown
- Code fences
- Extra whitespace

=========================================================
*/



export function parsePlannerResponse(response) {

    if (!response) {
        throw new Error("Planner returned an empty response.");
    }

    let cleaned = response.trim();

    // Remove markdown fences
    cleaned = cleaned
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

    // Extract JSON object only
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start !== -1 && end !== -1 && end > start) {
        cleaned = cleaned.slice(start, end + 1);
    }

    try {
        return JSON.parse(cleaned);
    } catch (error) {

        console.error("\n========== PLANNER RAW ==========\n");
        console.error(cleaned);

        console.error("\n========== JSON ERROR ==========\n");
        console.error(error.message);

        // Helpful error if generation was cut off
        if (!cleaned.trim().endsWith("}")) {
            throw new Error(
                "Planner response appears to be truncated before the JSON was completed."
            );
        }

        throw error;
    }
}
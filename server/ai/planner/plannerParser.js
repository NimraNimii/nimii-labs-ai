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
        throw new Error(
            "Planner returned an empty response."
        );
    }

    let cleaned = response.trim();


    /*
    =====================================================
    Remove Markdown Fences
    =====================================================
    */

    cleaned = cleaned
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();


    /*
    =====================================================
    Extract JSON Object
    =====================================================
    */

    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (
        start !== -1 &&
        end !== -1 &&
        end > start
    ) {

        cleaned = cleaned.slice(
            start,
            end + 1
        );

    }


    /*
    =====================================================
    Parse JSON
    =====================================================
    */

    try {

        return JSON.parse(cleaned);

    } catch (error) {

        /*
        Never log the complete AI response.
        It may contain user-generated content.
        */

        console.error(
            "Planner JSON parsing failed:",
            {
                name: error?.name,
                message: error?.message,
            }
        );


        /*
        =================================================
        Truncated Response
        =================================================
        */

        if (!cleaned.trim().endsWith("}")) {

            throw new Error(
                "Planner response appears to be truncated before the JSON was completed."
            );

        }


        throw new Error(
            "Planner returned invalid JSON."
        );

    }

}
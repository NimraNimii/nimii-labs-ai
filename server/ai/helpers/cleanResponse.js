// server/ai/helpers/cleanResponse.js

/**
 * Cleans raw AI responses before parsing.
 *
 * Removes:
 * - ```json
 * - ```
 * - Markdown formatting
 * - Leading AI explanations
 * - Extra whitespace
 */

export function cleanResponse(response) {
    if (!response) {
        return "";
    }

    let text = String(response);

    // ------------------------------------
    // Remove Markdown code fences
    // ------------------------------------

    text = text.replace(/```json/gi, "");
    text = text.replace(/```javascript/gi, "");
    text = text.replace(/```js/gi, "");
    text = text.replace(/```/g, "");

    // ------------------------------------
    // Remove common AI introductions
    // ------------------------------------

    const prefixes = [
        "Here is your JSON:",
        "Here's your JSON:",
        "Here is the JSON:",
        "Sure!",
        "Certainly!",
        "Absolutely!",
        "Of course!",
        "Below is the JSON:",
        "Below is your JSON:",
        "Response:",
        "Output:",
        "Answer:",
    ];

    prefixes.forEach(prefix => {

        const regex = new RegExp(
            "^" +
            prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            "i"
        );

        text = text.replace(regex, "");

    });

    // ------------------------------------
    // Remove leading/trailing whitespace
    // ------------------------------------

    text = text.trim();

    // ------------------------------------
    // Remove empty lines
    // ------------------------------------

    text = text
        .split("\n")
        .filter(line => line.trim() !== "")
        .join("\n");

    // ------------------------------------
    // Remove accidental BOM character
    // ------------------------------------

    text = text.replace(/^\uFEFF/, "");

    return text.trim();
}
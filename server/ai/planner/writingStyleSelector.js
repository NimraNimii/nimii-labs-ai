/*
=========================================================

NIMII LABS

Writing Style Selector

=========================================================
*/

export function selectWritingStyle({

    creatorGoal,

    platform,

    dnaMode

}) {

    let style = {

        tone: "Conversational",

        pacing: "Fast",

        sentenceLength: "Short",

        energy: "High",

        readingLevel: "Grade 6",

        emojiUsage: "Minimal"

    };

    if (creatorGoal.id === "authority") {

        style.tone = "Confident";
        style.readingLevel = "Grade 9";

    }

    if (creatorGoal.id === "sales") {

        style.tone = "Persuasive";
        style.energy = "High";

    }

    if (platform === "LinkedIn") {

        style.tone = "Professional";
        style.sentenceLength = "Medium";

    }

    if (dnaMode === "STORY_TRAP") {

        style.pacing = "Cinematic";

    }

    return style;

}
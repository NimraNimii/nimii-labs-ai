/*
=========================================================

NIMII LABS

Framework Selector

Purpose:
Choose the best storytelling framework
before AI starts writing.

This is NOT AI.

It is a deterministic decision engine.

=========================================================
*/

const FRAMEWORKS = {

    EDUCATION: "Mistake_to_Fix",

    STORY: "Story",

    PRODUCTIVITY: "Before_After",

    FINANCE: "Mistake_to_Fix",

    BUSINESS: "Case_Study",

    HEALTH: "Problem_Solution",

    TECH: "Myth_to_Truth",

    MOTIVATION: "Challenge",

    ENTERTAINMENT: "Secret_Revealed",

    NEWS: "X_vs_Y",

    GENERAL: "Problem_Solution"

};

/*
=========================================================
Framework Selector
=========================================================
*/

export function selectFramework({

    topic,

    creatorGoal,

    audience,

    platform,

    duration,

    dnaMode

}) {

    let framework =
        FRAMEWORKS[topic.category] ||
        FRAMEWORKS.GENERAL;

    let confidence = 75;

    /*
    =====================================================
    DNA Overrides
    =====================================================
    */

    switch (dnaMode) {

        case "STORY_TRAP":

            framework = "Story";
            confidence += 10;
            break;

        case "TEACH_HARD":

            framework = "Mistake_to_Fix";
            confidence += 8;
            break;

        case "PATTERN_BREAK":

            framework = "Myth_to_Truth";
            confidence += 8;
            break;

        case "GHOST_MODE":

            framework = "Secret_Revealed";
            confidence += 12;
            break;

    }

    /*
    =====================================================
    Creator Goal Overrides
    =====================================================
    */

    switch (creatorGoal.type) {

        case "followers":

            if (framework === "Problem_Solution") {

                framework = "Story";

                confidence += 4;

            }

            break;

        case "engagement":

            framework = "Challenge";

            confidence += 6;

            break;

        case "sales":

            framework = "Case_Study";

            confidence += 6;

            break;

        case "authority":

            framework = "Myth_to_Truth";

            confidence += 5;

            break;

    }

    /*
    =====================================================
    Audience Overrides
    =====================================================
    */

    switch (audience.state) {

        case "skeptical":

            framework = "Case_Study";
            confidence += 4;
            break;

        case "confused":

            framework = "Problem_Solution";
            confidence += 4;
            break;

        case "aware":

            confidence += 2;
            break;

        case "curious":

            confidence += 2;
            break;

    }

    /*
    =====================================================
    Platform Overrides
    =====================================================
    */

    if (platform === "YouTube") {

        confidence += 2;

    }

    if (platform === "TikTok") {

        confidence += 3;

    }

    /*
    =====================================================
    Long Videos
    =====================================================
    */

    if (

        duration.includes("60") ||

        duration.includes("90")

    ) {

        if (framework === "Story") {

            confidence += 4;

        }

    }

    /*
    =====================================================
    Return Decision
    =====================================================
    */

    return {

        framework,

        confidence: Math.min(confidence, 100),

        reason:

            `Selected ${framework} based on topic category (${topic.category}), creator goal (${creatorGoal.type}), audience (${audience.state}) and DNA mode (${dnaMode}).`

    };

}
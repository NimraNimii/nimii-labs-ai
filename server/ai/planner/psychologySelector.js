/*
=========================================================

NIMII LABS

Psychology Selector

Purpose:
Select the primary psychological trigger
for the script before writing begins.

This is NOT AI.

It is a deterministic decision engine.

=========================================================
*/

const PSYCHOLOGY = {

    CURIOSITY: {
        type: "Curiosity",
        objective: "Create an information gap that makes people continue watching."
    },

    LOSS_AVERSION: {
        type: "Loss_Aversion",
        objective: "Highlight what the viewer is losing by ignoring the advice."
    },

    SOCIAL_PROOF: {
        type: "Social_Proof",
        objective: "Show that many successful people already follow this."
    },

    AUTHORITY: {
        type: "Authority",
        objective: "Increase trust using expertise or proven evidence."
    },

    FOMO: {
        type: "FOMO",
        objective: "Create urgency without sounding fake."
    },

    SURPRISE: {
        type: "Surprise",
        objective: "Break expectations and create a pattern interrupt."
    },

    RELATABILITY: {
        type: "Relatability",
        objective: "Make the audience feel personally understood."
    },

    ASPIRATION: {
        type: "Aspiration",
        objective: "Help viewers imagine a better version of themselves."
    }

};

/*
=========================================================
Psychology Selector
=========================================================
*/

export function selectPsychology({

    topic,

    creatorGoal,

    audience,

    platform,

    duration,

    dnaMode

}) {

    let psychology = PSYCHOLOGY.CURIOSITY;

    let confidence = 75;

    /*
    =====================================================
    Topic Based
    =====================================================
    */

    switch (topic.category) {

        case "FINANCE":
            psychology = PSYCHOLOGY.LOSS_AVERSION;
            break;

        case "BUSINESS":
            psychology = PSYCHOLOGY.AUTHORITY;
            break;

        case "HEALTH":
            psychology = PSYCHOLOGY.LOSS_AVERSION;
            break;

        case "PRODUCTIVITY":
            psychology = PSYCHOLOGY.ASPIRATION;
            break;

        case "TECH":
            psychology = PSYCHOLOGY.SURPRISE;
            break;

        case "ENTERTAINMENT":
            psychology = PSYCHOLOGY.CURIOSITY;
            break;

        case "MOTIVATION":
            psychology = PSYCHOLOGY.ASPIRATION;
            break;

        default:
            psychology = PSYCHOLOGY.CURIOSITY;

    }

    /*
    =====================================================
    Creator Goal
    =====================================================
    */

    switch (creatorGoal.type) {

        case "followers":
            psychology = PSYCHOLOGY.RELATABILITY;
            confidence += 4;
            break;

        case "engagement":
            psychology = PSYCHOLOGY.CURIOSITY;
            confidence += 5;
            break;

        case "sales":
            psychology = PSYCHOLOGY.AUTHORITY;
            confidence += 5;
            break;

        case "authority":
            psychology = PSYCHOLOGY.AUTHORITY;
            confidence += 6;
            break;

    }

    /*
    =====================================================
    Audience State
    =====================================================
    */

    switch (audience.state) {

        case "skeptical":
            psychology = PSYCHOLOGY.AUTHORITY;
            confidence += 6;
            break;

        case "confused":
            psychology = PSYCHOLOGY.RELATABILITY;
            confidence += 4;
            break;

        case "curious":
            psychology = PSYCHOLOGY.CURIOSITY;
            confidence += 4;
            break;

        case "aware":
            confidence += 2;
            break;

    }

    /*
    =====================================================
    DNA Mode
    =====================================================
    */

    switch (dnaMode) {

        case "STORY_TRAP":
            psychology = PSYCHOLOGY.RELATABILITY;
            confidence += 5;
            break;

        case "PATTERN_BREAK":
            psychology = PSYCHOLOGY.SURPRISE;
            confidence += 6;
            break;

        case "GHOST_MODE":
            psychology = PSYCHOLOGY.CURIOSITY;
            confidence += 7;
            break;

        case "TEACH_HARD":
            psychology = PSYCHOLOGY.AUTHORITY;
            confidence += 5;
            break;

    }

    /*
    =====================================================
    Platform
    =====================================================
    */

    if (platform === "TikTok") {

        confidence += 3;

    }

    if (platform === "YouTube") {

        confidence += 2;

    }

    /*
    =====================================================
    Return
    =====================================================
    */

    return {

        psychology: psychology.type,

        objective: psychology.objective,

        confidence: Math.min(confidence, 100),

        reason:
            `Selected ${psychology.type} based on topic (${topic.category}), creator goal (${creatorGoal.type}), audience (${audience.state}) and DNA mode (${dnaMode}).`

    };

}
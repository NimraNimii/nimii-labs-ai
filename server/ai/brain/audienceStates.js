/*
=========================================================
NIMII LABS
Creative Brain v1
Audience States Library
=========================================================

Purpose:
Defines the psychological state of the viewer
before they watch the video.

No prompts.
No AI.

=========================================================
*/

export const AUDIENCE_STATES = {

    UNAWARE: {

        id: "unaware",

        name: "Unaware",

        description:
            "The audience does not know the problem exists.",

        primaryGoal:
            "Create awareness",

        emotionalNeeds: [
            "Curiosity",
            "Surprise"
        ],

        preferredHooks: [
            "Contrarian",
            "Unexpected",
            "Hidden Truth"
        ]

    },

    PROBLEM_AWARE: {

        id: "problem_aware",

        name: "Problem Aware",

        description:
            "The audience knows the pain but not the solution.",

        primaryGoal:
            "Offer hope",

        emotionalNeeds: [
            "Relief",
            "Hope"
        ],

        preferredHooks: [
            "Pain Point",
            "Mistake",
            "Story"
        ]

    },

    SOLUTION_AWARE: {

        id: "solution_aware",

        name: "Solution Aware",

        description:
            "The audience knows solutions exist but hasn't chosen one.",

        primaryGoal:
            "Differentiate",

        emotionalNeeds: [
            "Confidence",
            "Trust"
        ],

        preferredHooks: [
            "Comparison",
            "Myth",
            "Truth"
        ]

    },

    SKEPTICAL: {

        id: "skeptical",

        name: "Skeptical",

        description:
            "The audience doubts common advice.",

        primaryGoal:
            "Build credibility",

        emotionalNeeds: [
            "Trust",
            "Evidence"
        ],

        preferredHooks: [
            "Proof",
            "Case Study",
            "Fact"
        ]

    },

    OVERWHELMED: {

        id: "overwhelmed",

        name: "Overwhelmed",

        description:
            "The audience feels overloaded with information.",

        primaryGoal:
            "Simplify",

        emotionalNeeds: [
            "Clarity",
            "Relief"
        ],

        preferredHooks: [
            "Simple Fix",
            "One Thing",
            "Shortcut"
        ]

    },

    CURIOUS: {

        id: "curious",

        name: "Curious",

        description:
            "The audience actively wants to learn.",

        primaryGoal:
            "Educate",

        emotionalNeeds: [
            "Discovery"
        ],

        preferredHooks: [
            "Question",
            "Unknown Fact",
            "Did You Know"
        ]

    },

    MOTIVATED: {

        id: "motivated",

        name: "Motivated",

        description:
            "The audience is ready to take action.",

        primaryGoal:
            "Trigger action",

        emotionalNeeds: [
            "Confidence",
            "Momentum"
        ],

        preferredHooks: [
            "Challenge",
            "Transformation",
            "Result"
        ]

    },

    ENTERTAINMENT: {

        id: "entertainment",

        name: "Entertainment",

        description:
            "The audience mainly wants enjoyment.",

        primaryGoal:
            "Hold attention",

        emotionalNeeds: [
            "Fun",
            "Surprise"
        ],

        preferredHooks: [
            "Shock",
            "Funny",
            "Unexpected"
        ]

    }

};

/*
=========================================================
Helpers
=========================================================
*/

export function getAudienceState(state) {

    if (!state) {

        return AUDIENCE_STATES.CURIOUS;

    }

    return (
        Object.values(AUDIENCE_STATES).find(
            item =>
                item.id.toLowerCase() ===
                state.toLowerCase()
        ) || AUDIENCE_STATES.CURIOUS
    );

}

export function getAllAudienceStates() {

    return Object.values(AUDIENCE_STATES);

}

export function audienceStateExists(state) {

    return Object.values(AUDIENCE_STATES).some(
        item =>
            item.id.toLowerCase() ===
            state.toLowerCase()
    );

}
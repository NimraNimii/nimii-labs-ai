/*
=========================================================
NIMII LABS

Creative Brain v1

Content Structure Library

Purpose:
Identifies points where content flow may weaken
and selects an appropriate pattern interrupt.

No AI.
No prompts.

=========================================================
*/

const RETENTION_PATTERNS = [

    {

        id: "Question",

        name: "Question Interrupt",

        description:
            "Ask a direct question that forces the viewer to think.",

       

        preferredGoals: [
    "comments",
    "authority"
],

        preferredFrameworks: [

            "Story",
            "Myth_to_Truth"

        ],

        preferredPlatforms: [

            "TikTok",
            "Instagram"

        ]

    },

    {

        id: "Contradiction",

        name: "Contradiction",

        description:
            "Introduce an unexpected contradiction.",

      preferredGoals: [
    "comments",
    "authority"
],

        preferredFrameworks: [

            "Mistake_to_Fix",
            "Myth_to_Truth"

        ],

        preferredPlatforms: [

            "TikTok",
            "YouTube Shorts"

        ]

    },

    {

        id: "Mini_Reveal",

        name: "Mini Reveal",

        description:
            "Reveal part of the answer while holding back the conclusion.",
preferredGoals: [
    "followers",
    "authority"
],

        preferredFrameworks: [

            "Story",
            "Before_After"

        ],

        preferredPlatforms: [

            "TikTok",
            "Instagram"

        ]

    },

    {

        id: "Fast_Fact",

        name: "Fast Fact",

        description:
            "Insert a surprising fact to reset attention.",

      preferredGoals: [
    "authority",
    "entertainment"
],

        preferredFrameworks: [

            "Problem_Solution"

        ],

        preferredPlatforms: [

            "YouTube Shorts",
            "TikTok"

        ]

    },

    {

        id: "Pattern_Shift",

        name: "Pattern Shift",

        description:
            "Abruptly change pacing or direction to refresh attention.",

      preferredGoals: [
    "entertainment",
    "authority"
],

        preferredFrameworks: [

            "Story"

        ],

        preferredPlatforms: [

            "TikTok",
            "Instagram"

        ]

    }

];

/*
=========================================================
Rank Retention Patterns
=========================================================
*/

export function rankRetentionPatterns({

    goal,

    framework,

    platform

}) {

    return RETENTION_PATTERNS

        .map(pattern => {

            let score = 0;

            if (
                pattern.preferredGoals.includes(goal.id)
            )
                score += 35;

            if (
                pattern.preferredFrameworks.includes(
                    framework.id
                )
            )
                score += 35;

            if (
                pattern.preferredPlatforms.includes(
                    platform
                )
            )
                score += 30;

            return {

                ...pattern,

                score

            };

        })

        .sort(

            (a, b) => b.score - a.score

        );

}

/*
=========================================================
Pattern Placement
=========================================================
*/

export function getPatternBreaks(duration = "45-60 seconds") {

    switch (duration) {

        case "15-30 seconds":

            return [2];

        case "30-45 seconds":

            return [2, 5];

        case "45-60 seconds":

            return [3, 7];

        case "60-90 seconds":

            return [3, 6, 10];

        default:

            return [3, 7];

    }

}

/*
=========================================================
Best Retention Pattern
=========================================================
*/

export function getBestRetentionPattern(context) {

    return rankRetentionPatterns(context)[0];

}
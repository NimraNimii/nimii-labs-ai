/*
=========================================================
NIMII LABS

Creative Brain v2

Hook Decision Library

Purpose:
Ranks and selects the strongest hook strategy
using multiple creative signals.

No AI.
No prompts.

=========================================================
*/

const HOOKS = [

    {
        id: "Contrarian",

        name: "Contrarian Statement",

        description:
            "Challenge a commonly accepted belief.",

        preferredGoals: [
            "comments",
            "shares"
        ],

        preferredFrameworks: [
            "Myth_to_Truth",
            "Mistake_to_Fix"
        ],

        preferredPsychology: [
            "Curiosity_Gap",
            "Loss_Aversion"
        ],


        preferredCategories: [
    "business",
    "finance",
    "technology",
    "marketing"
],

        preferredContentTypes: [
            "opinion",
            "educational"
        ],

        preferredNarrativeTypes: [
            "debate",
            "myth_busting",
            "mistake"
        ],

        preferredEmotions: [
            "controversial",
            "urgent"
        ]
    },

    {
        id: "Question",

        name: "Question Hook",

        description:
            "Start with a thought-provoking question.",

        preferredGoals: [
            "comments",
            "followers"
        ],

        preferredFrameworks: [
            "Story",
            "Before_After"
        ],

        preferredPsychology: [
            "Curiosity_Gap"
        ],

        preferredCategories: [
    "lifestyle",
    "relationships",
    "psychology"
],

        preferredContentTypes: [
            "story"
        ],

        preferredNarrativeTypes: [
            "personal_story",
            "reflection"
        ],

        preferredEmotions: [
            "relatable",
            "curious"
        ]
    },

    {
        id: "Pain_Point",

        name: "Pain Point",

        description:
            "Highlight the viewer's biggest frustration.",

        preferredGoals: [
            "sales",
            "authority"
        ],

        preferredFrameworks: [
            "Problem_Solution",
            "Mistake_to_Fix"
        ],

        preferredPsychology: [
            "Loss_Aversion"
        ],


  preferredCategories: [
        "finance",
        "business",
        "technology"
    ],

        preferredContentTypes: [
            "educational"
        ],

        preferredNarrativeTypes: [
            "tutorial",
            "teaching"
        ],

        preferredEmotions: [
            "urgent",
            "serious"
        ]
    
    },

    {
        id: "Statistic",

        name: "Statistic Hook",

        description:
            "Open with a surprising statistic or fact.",

        preferredGoals: [
            "authority",
            "shares"
        ],

        preferredFrameworks: [
            "Problem_Solution"
        ],

        preferredPsychology: [
            "Social_Proof"
        ],

        preferredCategories: [
    "finance",
    "technology",
    "science",
    "health"
],

        preferredContentTypes: [
            "educational"
        ],

        preferredNarrativeTypes: [
            "case_study",
            "tutorial"
        ],

        preferredEmotions: [
            "informative"
        ]
    },

    {
        id: "Mini_Story",

        name: "Mini Story",

        description:
            "Open with a short personal moment.",

        preferredGoals: [
            "followers",
            "entertainment"
        ],

        preferredFrameworks: [
            "Story",
            "Before_After"
        ],

        preferredPsychology: [
            "Identity"
        ],

preferredCategories: [
    "lifestyle",
    "relationships",
    "fitness"
],


        preferredContentTypes: [
            "story"
        ],

        preferredNarrativeTypes: [
            "personal_story",
            "transformation",
            "confession"
        ],

        preferredEmotions: [
            "relatable",
            "emotional",
            "inspirational"
        ]
    },

    {
        id: "Shock",

        name: "Shock Statement",

        description:
            "Say something unexpected that forces attention.",

        preferredGoals: [
            "shares",
            "entertainment"
        ],

        preferredFrameworks: [
            "Story",
            "Myth_to_Truth"
        ],

        preferredPsychology: [
            "Novelty"
        ],


preferredCategories: [
    "technology",
    "news",
    "science"
],


        preferredContentTypes: [
            "story",
            "opinion"
        ],

        preferredNarrativeTypes: [
            "twist",
            "debate"
        ],

        preferredEmotions: [
            "surprising",
            "funny"
        ]
    }

];

/*
=========================================================
Rank Hooks
=========================================================
*/

export function rankHooks({

    goal,

    framework,

    psychology,

    topic

}) {

    return HOOKS

        .map(hook => {

            let score = 0;

            // Goal
            if (
                hook.preferredGoals.includes(goal.id)
            ) {
                score += 20;
            }

            // Framework
            if (
                hook.preferredFrameworks.includes(framework.id)
            ) {
                score += 25;
            }

            // Psychology
            if (
                hook.preferredPsychology.includes(psychology.id)
            ) {
                score += 25;
            }

// Topic Category
if (
    hook.preferredCategories?.includes(topic?.category)
) {
    score += 20;
}



            // Content Type
            if (
                hook.preferredContentTypes?.includes(topic?.contentType)
            ) {
                score += 15;
            }

            // Narrative Type
            if (
                hook.preferredNarrativeTypes?.includes(topic?.narrativeType)
            ) {
                score += 10;
            }

            // Emotional Tone
            if (
                hook.preferredEmotions?.includes(topic?.emotionalTone)
            ) {
                score += 5;
            }

            return {

                ...hook,

                score

            };

        })

        .sort((a, b) => b.score - a.score);

}

/*
=========================================================
Best Hook
=========================================================
*/

export function getBestHook(context) {

    const ranked = rankHooks(context);

    const topScore = ranked[0].score;

    const topCandidates = ranked.filter(
        hook => hook.score >= topScore - 5
    );

    return topCandidates[
        Math.floor(Math.random() * topCandidates.length)
    ];

}

/*
=========================================================
Optional Debug Helper
=========================================================
*/

export function getHookRanking(context) {

    return rankHooks(context);

}
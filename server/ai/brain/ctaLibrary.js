/*
=========================================================
NIMII LABS

Creative Brain v1

CTA Decision Library

Purpose:
Chooses the strongest CTA strategy based on
Goal + Framework + Psychology + Platform.

No AI.
No prompts.

=========================================================
*/

const CTA_LIBRARY = [

    {

        id: "Opinion_Question",

        name: "Opinion Question",

        description:
            "Ask for the viewer's opinion to encourage comments.",

        preferredGoals: [

            "comments"

        ],

        preferredFrameworks: [

            "Myth_to_Truth",
            "Mistake_to_Fix"

        ],

        preferredPsychology: [

            "Curiosity_Gap",
            "Identity"

        ],

        preferredCategories: [
    "business",
    "technology",
    "politics"
],

 

        preferredPlatforms: [

            "TikTok",
            "Instagram"

        ]

    },

    {

        id: "Agree_Disagree",

        name: "Agree or Disagree",

        description:
            "Invite viewers to take a side.",

        preferredGoals: [

            "comments",
            "shares"

        ],

        preferredFrameworks: [

            "Myth_to_Truth"

        ],

        preferredPsychology: [

            "Curiosity_Gap"

        ],

        preferredCategories: [
    "lifestyle",
    "relationships",
    "psychology"
],

        preferredPlatforms: [

            "TikTok"

        ]

    },

    {

        id: "Save_For_Later",

        name: "Save This",

        description:
            "Encourage users to save valuable content.",

        preferredGoals: [

            "authority"

        ],

        preferredFrameworks: [

            "Problem_Solution",
            "Before_After"

        ],

        preferredPsychology: [

            "Social_Proof"

        ],

        preferredCategories: [
    "finance",
    "technology",
    "education",
    "health"
],



    preferredCategories: [
        "finance",
        "technology",
        "education"
    ],



        preferredPlatforms: [

            "Instagram",
            "TikTok"

        ]

    },

    {

        id: "Follow_For_Part2",

        name: "Save this before your next payment.",

        description:
            "Create anticipation for future content.",

        preferredGoals: [

            "followers"

        ],

        preferredFrameworks: [

            "Story"

        ],

        preferredPsychology: [

            "Curiosity_Gap"

        ],

        preferredCategories: [
    "story",
    "entertainment"
],


        preferredPlatforms: [

            "TikTok",
            "Instagram"

        ]

    },

    {

        id: "Try_This",

        name: "Try This Today",

        description:
            "Encourage immediate action.",

        preferredGoals: [

            "sales"

        ],

        preferredFrameworks: [

            "Problem_Solution",
            "Mistake_to_Fix"

        ],

        preferredPsychology: [

            "Loss_Aversion"

        ],

preferredCategories: [
    "fitness",
    "health",
    "productivity"
],


        preferredPlatforms: [

            "TikTok",
            "YouTube Shorts"

        ]

    },

    {

        id: "Share_With_Friend",

        name: "Share With A Friend",

        description:
            "Encourage sharing with someone who needs it.",

        preferredGoals: [

            "shares"

        ],

        preferredFrameworks: [

            "Story",
            "Before_After"

        ],

        preferredPsychology: [

            "Identity",
            "Novelty"

        ],

        preferredCategories: [
    "relationships",
    "lifestyle",
    "motivation"
],

        preferredPlatforms: [

            "TikTok",
            "Instagram",
            "YouTube Shorts"

        ]

    }

];

/*
=========================================================
Rank CTAs
=========================================================
*/

export function rankCTAs({

    goal,

    framework,

    psychology,

    platform,

    topic

})

{

    return CTA_LIBRARY

        .map(cta => {

            let score = 0;

            if (
                cta.preferredGoals.includes(goal.id)
            )
                score += 30;

            if (
                cta.preferredFrameworks.includes(
                    framework.id
                )
            )
                score += 25;

            if (
                cta.preferredPsychology.includes(
                    psychology.id
                )
            )
                score += 25;

// Topic Category
if (
    cta.preferredCategories?.includes(topic?.category)
) {
    score += 20;
}



            if (
                cta.preferredPlatforms.includes(
                    platform
                )
            )
                score += 20;

            return {

                ...cta,

                score

            };

        })

        .sort(

            (a, b) => b.score - a.score

        );

}

/*
=========================================================
Best CTA
=========================================================
*/

export function getBestCTA(context) {

const ranked = rankCTAs(context);

const topScore = ranked[0].score;

const candidates = ranked.filter(
    cta => cta.score >= topScore - 5
);

return candidates[
    Math.floor(Math.random() * candidates.length)
];

}
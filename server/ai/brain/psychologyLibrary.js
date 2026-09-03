/*
=========================================================
NIMII LABS

Creative Brain v2

Psychology Decision Library

Purpose:
Chooses the strongest psychological strategy
using multiple creative signals.

No AI.
No prompts.

=========================================================
*/

const PSYCHOLOGY = [

    {
        id: "Curiosity_Gap",

        name: "Curiosity Gap",

        description:
            "Reveal just enough information to create curiosity while delaying the answer.",

        preferredGoals: [
            "followers",
            "comments"
        ],

        preferredAudience: [
            "curious",
            "unaware"
        ],

        preferredFrameworks: [
            "Myth_to_Truth",
            "Story"
        ],

        preferredContentTypes: [
            "story",
            "opinion"
        ],

        preferredNarrativeTypes: [
            "personal_story",
            "debate",
            "transformation"
        ],

        preferredEmotions: [
            "curious",
            "relatable"
        ]
    },

    {
        id: "Loss_Aversion",

        name: "Loss Aversion",

        description:
            "Focus on what the viewer loses by ignoring the advice.",

        preferredGoals: [
            "shares",
            "sales"
        ],

        preferredAudience: [
            "problem_aware",
            "skeptical"
        ],

        preferredFrameworks: [
            "Mistake_to_Fix",
            "Problem_Solution"
        ],

        preferredContentTypes: [
            "educational"
        ],

        preferredNarrativeTypes: [
            "teaching",
            "tutorial",
            "mistake"
        ],

        preferredEmotions: [
            "urgent",
            "serious"
        ]
    },

    {
        id: "Social_Proof",

        name: "Social Proof",

        description:
            "Increase trust using evidence, popularity or credibility.",

        preferredGoals: [
            "authority",
            "sales"
        ],

        preferredAudience: [
            "solution_aware",
            "skeptical"
        ],

        preferredFrameworks: [
            "Problem_Solution"
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
        id: "Identity",

        name: "Identity",

        description:
            "Speak to the person's identity rather than their actions.",

        preferredGoals: [
            "followers",
            "authority"
        ],

        preferredAudience: [
            "motivated",
            "curious"
        ],

        preferredFrameworks: [
            "Story",
            "Before_After"
        ],

        preferredContentTypes: [
            "story"
        ],

        preferredNarrativeTypes: [
            "personal_story",
            "transformation",
            "reflection"
        ],

        preferredEmotions: [
            "relatable",
            "inspirational"
        ]
    },

    {
        id: "Novelty",

        name: "Novelty",

        description:
            "Present something unexpected or surprising.",

        preferredGoals: [
            "entertainment",
            "shares"
        ],

        preferredAudience: [
            "curious",
            "entertainment"
        ],

        preferredFrameworks: [
            "Story",
            "Myth_to_Truth"
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
Rank Psychology
=========================================================
*/

export function rankPsychology({

    goal,

    audience,

    framework,

    topic

}) {

    return PSYCHOLOGY

        .map(item => {

            let score = 0;

            // Goal
            if (
                item.preferredGoals.includes(goal.id)
            ) {
                score += 25;
            }

            // Audience
            if (
                item.preferredAudience.includes(audience.id)
            ) {
                score += 20;
            }

            // Framework
            if (
                item.preferredFrameworks.includes(framework.id)
            ) {
                score += 20;
            }

            // Content Type
            if (
                item.preferredContentTypes?.includes(topic?.contentType)
            ) {
                score += 15;
            }

            // Narrative Type
            if (
                item.preferredNarrativeTypes?.includes(topic?.narrativeType)
            ) {
                score += 10;
            }

            // Emotional Tone
            if (
                item.preferredEmotions?.includes(topic?.emotionalTone)
            ) {
                score += 10;
            }

            return {

                ...item,

                score

            };

        })

        .sort((a, b) => b.score - a.score);

}

/*
=========================================================
Best Psychology
=========================================================
*/

export function getBestPsychology(context) {

    const ranked = rankPsychology(context);

    return ranked[0];

}

/*
=========================================================
Optional Debug Helper
=========================================================
*/

export function getPsychologyRanking(context) {

    return rankPsychology(context);

}
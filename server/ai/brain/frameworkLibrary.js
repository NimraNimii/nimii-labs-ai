/*
=========================================================
NIMII LABS

Creative Brain v2

Framework Decision Library

Purpose:
Ranks storytelling frameworks using multiple
creative signals instead of only category.

No AI.
No prompts.

=========================================================
*/

const FRAMEWORKS = [

    
{
    id: "Problem_Solution",

    name: "Problem → Solution",

    preferredGoals: [
        "sales",
        "authority"
    ],

    preferredAudience: [
        "problem_aware"
    ],

    preferredCategories: [
        "business",
        "finance"
    ],

    preferredContentTypes: [
        "educational"
    ],

    preferredNarrativeTypes: [
        "teaching",
        "tutorial"
    ],

    preferredEndingStyles: [
        "action",
        "lesson"
    ],

    authenticityPreference: [
        "knowledge",
        "reasoning"
    ],

    retentionStrength: 95,

    pacing: "fast",

    credibilityStyle: "educational",

    emotionFlow: [
        "curiosity",
        "problem",
        "relief"
    ],

    structure: [
        "Hook",
        "Problem",
        "Cause",
        "Solution",
        "CTA"
    ]
},



{
    id: "Mistake_to_Fix",

    name: "Mistake → Fix",

    preferredGoals: [
        "comments",
        "authority",
        "shares"
    ],

    preferredAudience: [
        "problem_aware",
        "skeptical"
    ],

    preferredCategories: [
        "finance",
        "fitness",
        "business"
    ],

    preferredContentTypes: [
        "educational"
    ],

    preferredNarrativeTypes: [
        "teaching",
        "mistake"
    ],

    preferredEndingStyles: [
        "lesson",
        "action"
    ],

    authenticityPreference: [
        "knowledge",
        "reasoning"
    ],

    retentionStrength: 91,

    pacing: "fast",

    credibilityStyle: "coach",

    emotionFlow: [
        "mistake",
        "realization",
        "improvement"
    ],

    structure: [
        "Mistake",
        "Reason",
        "Fix",
        "CTA"
    ]
},


{
    id: "Story",

    name: "Story",

    preferredGoals: [
        "followers",
        "entertainment"
    ],

    preferredAudience: [
        "curious",
        "motivated"
    ],

    preferredCategories: [
        "lifestyle",
        "fitness",
        "general"
    ],

    preferredContentTypes: [
        "story"
    ],

    preferredNarrativeTypes: [
        "personal_story",
        "transformation",
        "confession",
        "reflection"
    ],

    preferredEndingStyles: [
        "reflection",
        "twist"
    ],

    authenticityPreference: [
        "user_input"
    ],

    retentionStrength: 90,

    pacing: "medium",

    credibilityStyle: "personal",

    emotionFlow: [
        "curiosity",
        "emotion",
        "reflection"
    ],

    structure: [
        "Hook",
        "Story",
        "Lesson",
        "CTA"
    ]
},


{
    id: "Before_After",

    name: "Before → After",

    preferredGoals: [
        "sales",
        "followers"
    ],

    preferredAudience: [
        "motivated",
        "solution_aware"
    ],

    preferredCategories: [
        "fitness",
        "business",
        "lifestyle"
    ],

    preferredContentTypes: [
        "story",
        "educational"
    ],

    preferredNarrativeTypes: [
        "transformation"
    ],

    preferredEndingStyles: [
        "lesson",
        "reflection"
    ],

    authenticityPreference: [
        "user_input",
        "knowledge"
    ],

    retentionStrength: 93,

    pacing: "medium",

    credibilityStyle: "transformation",

    emotionFlow: [
        "pain",
        "hope",
        "achievement"
    ],

    structure: [
        "Before",
        "Transformation",
        "After",
        "CTA"
    ]
}

];

/*
=========================================================
Rank Frameworks
=========================================================
*/

export function rankFrameworks({

    goal,

    audience,

    topic

}) {

    return FRAMEWORKS

        .map(framework => {

            let score = 0;

            // Goal
            if (
                framework.preferredGoals.includes(goal.id)
            ) {
                score += 25;
            }

            // Audience
            if (
                framework.preferredAudience.includes(audience.id)
            ) {
                score += 20;
            }

            // Category
            if (
                framework.preferredCategories.includes(topic.category)
            ) {
                score += 15;
            }

            // Content Type
            if (
                framework.preferredContentTypes?.includes(topic.contentType)
            ) {
                score += 20;
            }

            // Narrative Type
            if (
                framework.preferredNarrativeTypes?.includes(topic.narrativeType)
            ) {
                score += 15;
            }

// Story Source (Authenticity)
if (
    framework.authenticityPreference?.includes(topic.storySource)
) {
    score += 10;
}



            // Ending Style
            if (
                framework.preferredEndingStyles?.includes(topic.endingStyle)
            ) {
                score += 5;
            }

            return {

                ...framework,

                score

            };

        })

        .sort((a, b) => b.score - a.score);

}

/*
=========================================================
Return Best Framework
=========================================================
*/

export function getBestFramework(context) {

    const ranked = rankFrameworks(context);

    const topScore = ranked[0].score;

    const candidates = ranked.filter(
        framework => framework.score >= topScore - 5
    );

    return candidates[
        Math.floor(Math.random() * candidates.length)
    ];

}

/*
=========================================================
Optional Debug Helper

(Not used in production yet)

=========================================================
*/

export function getFrameworkRanking(context) {

    return rankFrameworks(context);

}
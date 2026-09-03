/*
=========================================================
NIMII LABS
Creative Brain v1

Topic Classifier

Purpose:
Converts raw user topic into structured metadata.

No AI.
No prompts.

=========================================================
*/


const CONTENT_PATTERNS = [

{
    type: "story",

    keywords: [
        "i ",
        "my ",
        "me ",
        "when i",
        "learned",
        "tried",
        "happened",
        "brother",
        "sister",
        "mom",
        "dad",
        "friend"
    ],

    narrativeType: "personal_story",

    storySource: "user_input",

    authenticityMode: "strict",

    allowInventedDetails: false,

    allowHypotheticalExamples: false,

  

    requiresEvidence: false,

    pov: "first_person",

    emotionalTone: "relatable",

    endingStyle: "reflection"

},

{

    type: "educational",

    keywords: [
        "how to",
        "why",
        "tips",
        "mistakes",
        "guide",
        "learn",
        "best",
        "ways"
    ],

    narrativeType: "teaching",

    storySource: "knowledge",

    authenticityMode: "factual",

    allowInventedDetails: false,

    allowHypotheticalExamples: true,

   

    requiresEvidence: false,

    pov: "second_person",

    emotionalTone: "informative",

    endingStyle: "lesson"

},

{

    type: "opinion",

    keywords: [
        "unpopular",
        "opinion",
        "hot take",
        "should",
        "everyone"
    ],

    narrativeType: "debate",

    storySource: "reasoning",

    authenticityMode: "opinion",

    allowInventedDetails: false,

    allowHypotheticalExamples: true,

   

    requiresEvidence: false,

    pov: "first_person",

    emotionalTone: "controversial",

    endingStyle: "discussion"

}

];


const CATEGORY_RULES = [

    {
        category: "finance",

        subCategory: "personal_finance",

        keywords: [
            "money",
            "finance",
            "saving",
            "budget",
            "salary",
            "income",
            "wealth",
            "investment",
            "stocks",
            "crypto",
            "debt"
        ],

        evergreen: true,

        audienceState: "problem_aware"
    },

    {
        category: "fitness",

        subCategory: "health",

        keywords: [
            "gym",
            "fitness",
            "weight",
            "fat",
            "exercise",
            "muscle",
            "diet",
            "protein",
            "running"
        ],

        evergreen: true,

        audienceState: "motivated"
    },

    {
        category: "business",

        subCategory: "entrepreneurship",

        keywords: [
            "startup",
            "business",
            "entrepreneur",
            "marketing",
            "sales",
            "branding",
            "agency"
        ],

        evergreen: true,

        audienceState: "solution_aware"
    },

    {
        category: "technology",

        subCategory: "ai",

        keywords: [
            "ai",
            "chatgpt",
            "gemini",
            "claude",
            "openai",
            "coding",
            "programming",
            "software"
        ],

        evergreen: false,

        audienceState: "curious"
    },

    {
        category: "lifestyle",

        subCategory: "self_improvement",

        keywords: [
            "habit",
            "discipline",
            "productivity",
            "focus",
            "mindset",
            "motivation"
        ],

        evergreen: true,

        audienceState: "curious"
    }

];



function classifyContentType(input) {

    for (const pattern of CONTENT_PATTERNS) {

        if (
            pattern.keywords.some(keyword =>
                input.includes(keyword)
            )
        ) {
            return pattern;
        }

    }


return {

    type: "educational",

    narrativeType: "teaching",

    storySource: "knowledge",

    authenticityMode: "factual",

    allowInventedDetails: false,

    allowHypotheticalExamples: true,

  

    requiresEvidence: false,

    pov: "second_person",

    emotionalTone: "neutral",

    endingStyle: "lesson"

};




}




/*
=========================================================
Find Best Category
=========================================================
*/

export function classifyTopic(topic = "") {

    const input = topic.toLowerCase();

    const content = classifyContentType(input);

    for (const rule of CATEGORY_RULES) {

        const matched = rule.keywords.some(

            keyword => input.includes(keyword)

        );

        if (matched) {

        return {

    category: rule.category,

    subCategory: rule.subCategory,

    contentType: content.type,

    narrativeType: content.narrativeType,

    storySource: content.storySource,

    authenticityMode: content.authenticityMode,

    allowInventedDetails: content.allowInventedDetails,

    allowHypotheticalExamples: content.allowHypotheticalExamples,

  

    requiresEvidence: content.requiresEvidence,

    narrativePOV: content.pov,

    emotionalTone: content.emotionalTone,

    endingStyle: content.endingStyle,

    evergreen: rule.evergreen,

    recommendedAudience: rule.audienceState

};   




        }

    }

return {

    category: "general",

    subCategory: "general",

    contentType: "educational",

    narrativeType: "teaching",

    storySource: "knowledge",

    authenticityMode: "factual",

    allowInventedDetails: false,

    allowHypotheticalExamples: true,

    requiresEvidence: false,

    narrativePOV: "second_person",

    emotionalTone: "neutral",

    endingStyle: "lesson",

    evergreen: true,

    recommendedAudience: "curious"

};



}

/*
=========================================================
Helpers
=========================================================
*/

export function isEvergreen(topic) {

    return classifyTopic(topic).evergreen;

}

export function getCategory(topic) {

    return classifyTopic(topic).category;

}
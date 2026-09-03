// server/ai/scoring/emotionalScore.js

/**
 * Measures the emotional impact of a script.
 *
 * Score: 0–100
 */

export function emotionalScore(script) {

    if (!script) return 0;

    const text = [

        script.hook || "",

        script.script || "",

        script.cta || "",

    ]
        .join(" ")
        .toLowerCase();

    let score = 40;

    /*
    =====================================
    Positive Emotion
    =====================================
    */

    const positiveWords = [

        "success",
        "freedom",
        "confidence",
        "happy",
        "wealth",
        "growth",
        "win",
        "power",
        "love",
        "dream",
        "future",
        "best",
        "opportunity",
        "reward",
        "achievement"

    ];

    positiveWords.forEach(word => {

        if (text.includes(word)) {

            score += 2;

        }

    });

    /*
    =====================================
    Negative Emotion
    =====================================
    */

    const negativeWords = [

        "fear",
        "mistake",
        "failure",
        "danger",
        "risk",
        "regret",
        "problem",
        "stress",
        "anxiety",
        "waste",
        "lose",
        "loss",
        "worst",
        "avoid",
        "scam"

    ];

    negativeWords.forEach(word => {

        if (text.includes(word)) {

            score += 2;

        }

    });

    /*
    =====================================
    High Impact Words
    =====================================
    */

    const impactWords = [

        "secret",
        "shocking",
        "crazy",
        "unbelievable",
        "insane",
        "hidden",
        "truth",
        "actually",
        "impossible",
        "life-changing",
        "never",
        "nobody"

    ];

    impactWords.forEach(word => {

        if (text.includes(word)) {

            score += 3;

        }

    });

   

    /*
=====================================
Storytelling Language
=====================================
*/

const storyWords = [

    "remember",

    "felt",

    "realized",

    "learned",

    "struggled",

    "finally",

    "changed",

    "experience",

    "journey",

    "happened"

];

storyWords.forEach(word => {

    if (text.includes(word)) {

        score += 3;

    }

});

/*
=====================================
Relationship Words
=====================================
*/

const relationshipWords = [

    "family",

    "friend",

    "mother",

    "father",

    "brother",

    "sister",

    "child",

    "people",

    "someone"

];

relationshipWords.forEach(word => {

    if (text.includes(word)) {

        score += 2;

    }

});

 /*
=====================================
Personal Language
=====================================
*/

const personalWords = [

    "i",

    "my",

    "me",

    "you",

    "your",

    "we",

    "our"

];

personalWords.forEach(word => {

    const regex = new RegExp(`\\b${word}\\b`, "g");

    const matches = text.match(regex);

    if (matches) {

        score += Math.min(matches.length, 2);

    }

});



/*
=====================================
Questions
=====================================
*/

const questions =
        (text.match(/\?/g) || []).length;

score += Math.min(
        questions * 2,
        8
);


 
    /*
    =====================================
    Clamp
    =====================================
    */

    score = Math.max(
        0,
        Math.min(score, 100)
    );

    return Math.round(score);

}
// server/ai/scoring/ctaScore.js

/**
 * Measures the strength of the Call-To-Action.
 *
 * Score: 0–100
 */

export function ctaScore(script) {

    if (!script) return 0;

    const cta = (script.cta || "").trim().toLowerCase();

    if (!cta.length) return 0;

    let score = 45;

    /*
    =====================================
    Length
    =====================================
    */

    const words = cta
        .split(/\s+/)
        .filter(Boolean);

    if (words.length >= 4 && words.length <= 15)
        score += 10;
    else if (words.length <= 20)
        score += 5;
    else
        score -= 10;

    /*
    =====================================
    Strong Action Verbs
    =====================================
    */

    const actionWords = [

        "comment",

        "share",

        "follow",

        "save",

        "try",

        "watch",

        "learn",

        "discover",

        "download",

        "join",

        "subscribe",

        "reply",

        "tag",

        "click",

        "tell"

    ];

    actionWords.forEach(word => {

        if (cta.includes(word))
            score += 4;

    });

/*
=====================================
Value Proposition
=====================================
*/

const valueWords = [

    "free",

    "guide",

    "template",

    "checklist",

    "tips",

    "more",

    "part 2",

    "next video",

    "full tutorial"

];

valueWords.forEach(word => {

    if (cta.includes(word)) {

        score += 3;

    }

});


/*
=====================================
Too Many Actions
=====================================
*/

const actionCount = actionWords.filter(
    word => cta.includes(word)
).length;

if (actionCount > 3) {

    score -= 8;

}

/*
=====================================
Conversation CTA
=====================================
*/

const conversationWords = [

    "tell me",

    "what's your",

    "have you",

    "would you",

    "which one",

    "your experience",

    "your biggest"

];

conversationWords.forEach(word => {

    if (cta.includes(word)) {

        score += 4;

    }

});



/*
=====================================
Specific CTA
=====================================
*/

const specificPhrases = [

    "comment below",

    "save this",

    "share with",

    "tag a friend",

    "follow for",

    "try this",

    "download the",

    "click the link"

];

specificPhrases.forEach(phrase => {

    if (cta.includes(phrase)) {

        score += 4;

    }

});


    /*
    =====================================
    Engagement Boosters
    =====================================
    */

    const engagementWords = [

        "agree",

        "disagree",

        "what do you think",

        "your opinion",

        "challenge",

        "which one",

        "would you",

        "yes or no",

        "prove",

        "debate"

    ];

    engagementWords.forEach(word => {

        if (cta.includes(word))
            score += 5;

    });

    /*
    =====================================
    Urgency
    =====================================
    */

 const urgencyWords = [

    "don't miss",

    "limited",

    "before it's gone",

    "right now",

    "today",

    "don't wait"

];
    urgencyWords.forEach(word => {

        if (cta.includes(word))
            score += 3;

    });

    /*
    =====================================
    Question CTA
    =====================================
    */

  if (cta.includes("?"))
    score += 4;

    /*
    =====================================
    Weak CTAs
    =====================================
    */

    const weakWords = [

        "thanks",

        "thank you",

        "goodbye",

        "bye",

        "see you",

        "have a nice day"

    ];

    weakWords.forEach(word => {

        if (cta.includes(word))
            score -= 8;

    });

    /*
    =====================================
    Generic AI CTA Penalty
    =====================================
    */

    const generic = [

        "follow for more",

        "thanks for watching",

        "hope this helps",

        "let me know",

        "stay tuned"

    ];

    generic.forEach(word => {

        if (cta.includes(word))
            score -= 5;

    });

 

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
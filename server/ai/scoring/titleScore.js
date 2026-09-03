// server/ai/scoring/titleScore.js

/**
 * Evaluates the effectiveness of a video title.
 *
 * Score: 0–100
 */

export function titleScore(script) {

    if (!script) return 0;

    const title = (script.title || "").trim();

    if (!title.length) return 0;

    let score = 55;

    /*
    =====================================
    Length
    =====================================
    */

    const words = title
        .split(/\s+/)
        .filter(Boolean);

    if (words.length >= 4 && words.length <= 10)
        score += 15;
    else if (words.length <= 14)
        score += 8;
    else
        score -= 10;

    /*
    =====================================
    Character Count
    =====================================
    */

    if (title.length >= 25 && title.length <= 60)
        score += 8;

    /*
    =====================================
    Numbers
    =====================================
    */

    if (/\d/.test(title))
        score += 8;

    /*
    =====================================
    Curiosity Words
    =====================================
    */

    const curiosityWords = [

        "secret",

        "truth",

        "mistake",

        "hidden",

        "never",

        "actually",

        "stop",

        "before",

        "why",

        "how",

        "biggest",

        "myth",

        "real",

        "shocking",

        "unexpected"

    ];

    curiosityWords.forEach(word => {

        if (
            title
                .toLowerCase()
                .includes(word)
        ) {

            score += 3;

        }

    });

    /*
    =====================================
    Emotional Words
    =====================================
    */

    const emotionalWords = [

        "success",

        "failure",

        "fear",

        "love",

        "money",

        "power",

        "future",

        "danger",

        "risk",

        "crazy",

        "insane",

        "best",

        "worst"

    ];

    emotionalWords.forEach(word => {

        if (
            title
                .toLowerCase()
                .includes(word)
        ) {

            score += 2;

        }

    });

    /*
    =====================================
    Questions
    =====================================
    */

    if (title.includes("?"))
        score += 8;

    /*
    =====================================
    Clickbait Penalty
    =====================================
    */

    const clickbait = [

        "100%",

        "guaranteed",

        "must watch",

        "unbelievable",

        "click here",

        "you won't believe"

    ];

    clickbait.forEach(word => {

        if (
            title
                .toLowerCase()
                .includes(word)
        ) {

            score -= 5;

        }

    });

    /*
    =====================================
    ALL CAPS Penalty
    =====================================
    */

    if (
        title === title.toUpperCase() &&
        title.length > 8
    ) {

        score -= 10;

    }

    /*
    =====================================
    Generic Title Penalty
    =====================================
    */

    const genericTitles = [

        "introduction",

        "overview",

        "tutorial",

        "guide",

        "tips"

    ];

    genericTitles.forEach(word => {

        if (
            title
                .toLowerCase()
                .startsWith(word)
        ) {

            score -= 4;

        }

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
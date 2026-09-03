// server/ai/scoring/curiosityScore.js

/**
 * Measures how effectively the script creates
 * curiosity and information gaps.
 *
 * Score: 0–100
 */

export function curiosityScore(script) {

    if (!script) return 0;

    const text = [

        script.hook || "",

        script.script || "",

        script.cta || "",

    ]
        .join(" ")
        .toLowerCase();

    let score = 45;

    /*
    =====================================
    Curiosity Words
    =====================================
    */

    const curiosityWords = [

        "secret",
        "truth",
        "actually",
        "instead",
        "hidden",
        "mistake",
        "myth",
        "nobody",
        "never",
        "stop",
        "before",
        "warning",
        "imagine",
        "unexpected",
        "real",
        "biggest",
        "shocking",
        "crazy",
        "wait",
        "finally"

    ];

    curiosityWords.forEach(word => {

        if (text.includes(word)) {

            score += 3;

        }

    });

    /*
    =====================================
    Open Loops
    =====================================
    */

    const openLoopPhrases = [

        "but",

        "however",

        "here's why",

        "the reason",

        "what happened next",

        "until",

        "because",

        "the problem is",

        "most people",

        "almost nobody"

    ];

    openLoopPhrases.forEach(word => {

        if (text.includes(word)) {

            score += 4;

        }

    });


    /*
=====================================
Delayed Reveal
=====================================
*/

const delayedReveal = [

    "keep watching",

    "you'll see",

    "later",

    "at the end",

    "before i explain",

    "before i show",

    "don't skip",

    "wait until"

];

delayedReveal.forEach(loop => {

    if (text.includes(loop)) {

        score += 4;

    }

});


/*
=====================================
Contrast
=====================================
*/

const contrasts = [

    "but",

    "instead",

    "however",

    "yet",

    "although",

    "except"

];

contrasts.forEach(word => {

    if (text.includes(word)) {

        score += 2;

    }

});


/*
=====================================
Cliffhanger
=====================================
*/

if (

    text.includes("...")

) {

    score += 3;

}

    /*
    =====================================
    Questions
    =====================================
    */

    const questionCount =
        (text.match(/\?/g) || []).length;

  score += Math.min(
    questionCount * 3,
    9
);

    /*
    =====================================
    Numbers increase curiosity
    =====================================
    */

    const numbers =
        text.match(/\d+/g);

    if (numbers)
        score += Math.min(
            numbers.length * 3,
            9
        );

    /*
    =====================================
    Hook starts with curiosity
    =====================================
    */

    const hook =
        (script.hook || "").toLowerCase();

      const hookStarters = [

    "what if",

    "imagine",

    "did you know",

    "why",

    "how",

    "stop",

    "the biggest",

    "nobody",

    "here's",

    "before",

    "never",

    "warning",

    "this is why"

];

    

    hookStarters.forEach(start => {

        if (hook.startsWith(start)) {

            score += 6;

        }

    });

    /*
    =====================================
    Penalties
    =====================================
    */

    if (text.includes("in conclusion"))
        score -= 8;

    if (text.includes("overall"))
        score -= 8;

    if (text.includes("to summarize"))
        score -= 8;

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
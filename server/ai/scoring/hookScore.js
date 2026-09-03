// server/ai/scoring/hookScore.js

/**
 * Calculates Hook Strength (0–100)
 */

export function hookScore(script) {

    if (!script) return 0;

    const hook = (
        script.hook ||
        ""
    ).trim();

    if (!hook.length) return 0;

    let score = 50;

    /*
    =====================================
    Length
    =====================================
    */

    const words = hook
        .split(/\s+/)
        .filter(Boolean);

    if (words.length >= 8 && words.length <= 18)
        score += 12;
    else if (words.length <= 25)
        score += 6;
    else
        score -= 8;

    /*
    =====================================
    Curiosity
    =====================================
    */

    const curiosityWords = [

        "secret",
        "truth",
        "mistake",
        "nobody",
        "never",
        "stop",
        "don't",
        "why",
        "how",
        "imagine",
        "warning",
        "before",
        "hidden",
        "myth",
        "actually",
        "instead",

    ];

    curiosityWords.forEach(word => {

        if (
            hook
                .toLowerCase()
                .includes(word)
        ) {
            score += 3;
        }

    });

/*
=====================================
Strong Opening
=====================================
*/

const opening = hook
    .toLowerCase()
    .split(/\s+/)
    .slice(0, 4)
    .join(" ");

const strongOpenings = [

    "stop",
    "what if",
    "imagine",
    "why",
    "how",
    "never",
    "before",
    "the truth",
    "nobody",
    "warning"

];

if (
    strongOpenings.some(
        phrase => opening.includes(phrase)
    )
) {
    score += 8;
}


/*
=====================================
Weak Opening
=====================================
*/

const weakStarts = [

    "today i",

    "in this video",

    "welcome",

    "hello",

    "hi guys",

    "let me tell",

    "i want to"

];

if (
    weakStarts.some(
        phrase =>
            hook
                .toLowerCase()
                .startsWith(phrase)
    )
) {
    score -= 10;
}



    /*
    =====================================
    Numbers
    =====================================
    */

    if (/\d/.test(hook))
        score += 8;

    /*
    =====================================
    Question
    =====================================
    */

    if (hook.includes("?"))
        score += 5;

    /*
    =====================================
    Emotional words
    =====================================
    */

    const emotionWords = [

        "crazy",
        "shocking",
        "insane",
        "powerful",
        "dangerous",
        "amazing",
        "best",
        "worst",
        "fear",
        "love",
        "hate",

    ];

    emotionWords.forEach(word => {

        if (
            hook
                .toLowerCase()
                .includes(word)
        ) {
            score += 2;
        }

    });


/*
=====================================
Pattern Interrupt
=====================================
*/

const interrupts = [

    "but",

    "instead",

    "except",

    "until",

    "however"

];

interrupts.forEach(word => {

    if (
        hook
            .toLowerCase()
            .includes(word)
    ) {
        score += 2;
    }

});



    /*
    =====================================
    CTA inside hook (bad)
    =====================================
    */

    if (
        hook
            .toLowerCase()
            .includes("follow")
    )
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
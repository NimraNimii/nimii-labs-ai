// server/ai/scoring/retentionScore.js

/**
 * Estimates viewer retention (0-100)
 */

export function retentionScore(script) {

    if (!script) return 0;

    const content = [

        script.hook || "",

        script.script || "",

        script.cta || "",

    ].join(" ");

    let score = 50;

    /*
    =====================================
    Length
    =====================================
    */

    const words = content
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    if (words.length >= 90 && words.length <= 170)
        score += 12;
    else if (words.length >= 60)
        score += 6;
    else
        score -= 8;

    /*
    =====================================
    Short Paragraphs
    =====================================
    */

    const paragraphs = content
        .split("\n")
        .filter(p => p.trim());

    if (paragraphs.length >= 3)
        score += 8;


/*
=====================================
Sentence Length
=====================================
*/

const sentences =
    content
        .split(/[.!?]+/)
        .filter(Boolean);

const avgWords =
    words.length /
    Math.max(sentences.length, 1);

if (
    avgWords >= 8 &&
    avgWords <= 18
) {
    score += 8;
}


const longestParagraph =
    Math.max(

        ...paragraphs.map(p =>
            p.split(/\s+/).length
        )

    );

if (longestParagraph > 70) {

    score -= 8;

}


    /*
    =====================================
    Pattern Interrupts
    =====================================
    */
const interrupts = [

    "but",

    "however",

    "instead",

    "actually",

    "wait",

    "because",

    "then",

    "here's",

    "imagine",

    "now",

    "meanwhile",

    "next",

    "finally",

    "so",

    "yet"

];

    interrupts.forEach(word => {

        if (
            content
                .toLowerCase()
                .includes(word)
        ) {

            score += 2;

        }

    });

/*
=====================================
Curiosity Loops
=====================================
*/

const curiosityLoops = [

    "keep watching",

    "later",

    "at the end",

    "before i explain",

    "you'll see",

    "here's why",

    "the reason",

    "first",

    "second",

    "finally"

];

curiosityLoops.forEach(loop => {

    if (
        content
            .toLowerCase()
            .includes(loop)
    ) {
        score += 3;
    }

});


    /*
    =====================================
    Questions
    =====================================
    */

const questions =
    (content.match(/\?/g) || []).length;

score += Math.min(
    questions * 2,
    6
);

    /*
    =====================================
    Repetition Penalty
    =====================================
    */

    const unique = new Set(

        words.map(w =>
            w.toLowerCase()
        )

    );

    const diversity =
        unique.size / words.length;

    if (diversity > 0.75)
        score += 8;
    else if (diversity < 0.45)
        score -= 10;

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
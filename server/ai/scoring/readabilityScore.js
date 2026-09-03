// server/ai/scoring/readabilityScore.js

/**
 * Measures how easy the script is to read
 * and speak naturally.
 *
 * Score: 0–100
 */

export function readabilityScore(script) {

    if (!script) return 0;

    const text = [

        script.hook || "",

        script.script || "",

        script.cta || "",

    ].join(" ").trim();

    if (!text.length) return 0;

    let score = 100;

    /*
    =====================================
    Word Count
    =====================================
    */

    const words = text
        .split(/\s+/)
        .filter(Boolean);

    if (words.length < 60)
        score -= 15;

    if (words.length > 220)
        score -= 10;

    /*
    =====================================
    Average Sentence Length
    =====================================
    */

    const sentences = text
        .split(/[.!?]+/)
        .filter(s => s.trim());

    const avgSentenceLength =
        words.length /
        Math.max(sentences.length, 1);

    if (avgSentenceLength > 22)
        score -= 20;

    else if (avgSentenceLength > 18)
        score -= 10;

    else if (avgSentenceLength >= 8)
        score += 5;

    /*
    =====================================
    Long Words
    =====================================
    */

    const longWords = words.filter(

        word => word.length >= 13

    );

    score -= Math.min(
        longWords.length * 2,
        12
    );

    /*
    =====================================
    Paragraph Structure
    =====================================
    */

    const paragraphs = text
        .split("\n")
        .filter(p => p.trim());

    if (paragraphs.length >= 3)
        score += 6;

    /*
    =====================================
    Repeated Words
    =====================================
    */

    const frequency = {};

    words.forEach(word => {

        const w = word
            .toLowerCase()
            .replace(/[^\w]/g, "");

        if (!w) return;

        frequency[w] =
            (frequency[w] || 0) + 1;

    });

    let repeated = 0;

    Object.values(frequency).forEach(count => {

        if (count >= 6)
            repeated++;

    });

    score -= repeated * 3;

    /*
    =====================================
    Filler Words
    =====================================
    */

    const fillerWords = [

        "very",

        "really",

        "actually",

        "basically",

        "literally",

        "simply",

        "just",

        "quite",

        "perhaps",

        "maybe"

    ];

    fillerWords.forEach(word => {

        const regex = new RegExp(
            "\\b" + word + "\\b",
            "gi"
        );

        const matches =
            text.match(regex);

        if (matches)
            score -= matches.length;

    });

    /*
    =====================================
    Conversational Bonus
    =====================================
    */

    const conversationalWords = [

        "you",

        "your",

        "imagine",

        "think",

        "look",

        "watch",

        "listen",

        "because",

        "but",

        "so"

    ];

    conversationalWords.forEach(word => {

        if (
            text
                .toLowerCase()
                .includes(word)
        ) {

            score += 1;

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
// server/ai/scoring/scriptScore.js

export function scoreScript(script) {

    let score = 0;

    const text = `
${script.title || ""}
${script.hook || ""}
${script.script || ""}
${script.cta || ""}
`.toLowerCase();

    //-------------------------
    // Hook
    //-------------------------

    if ((script.hook || "").length > 30)
        score += 10;

    //-------------------------
    // CTA
    //-------------------------

    if ((script.cta || "").length > 10)
        score += 10;

    //-------------------------
    // Curiosity Words
    //-------------------------

    const curiosityWords = [

        "secret",
        "truth",
        "mistake",
        "nobody",
        "why",
        "how",
        "hidden",
        "stop",
        "never",
        "biggest",
        "actually",
        "imagine"

    ];

    curiosityWords.forEach(word => {

        if (text.includes(word))
            score += 3;

    });

    //-------------------------
    // Emotional Words
    //-------------------------

    const emotionWords = [

        "fear",
        "love",
        "money",
        "success",
        "failure",
        "regret",
        "power",
        "danger",
        "win",
        "lose"

    ];

    emotionWords.forEach(word => {

        if (text.includes(word))
            score += 2;

    });

    //-------------------------
    // Script Length
    //-------------------------

    const words =
        text.split(/\s+/).length;

    if (words >= 120 && words <= 220)
        score += 20;

    //-------------------------
    // Penalties
    //-------------------------

    if (text.includes("in conclusion"))
        score -= 10;

    if (text.includes("overall"))
        score -= 10;

    if (text.includes("to summarize"))
        score -= 10;

    //-------------------------
    // Normalize
    //-------------------------

    score = Math.max(0, score);

    score = Math.min(100, score);

    return score;

}
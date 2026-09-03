// server/ai/scoring/qualityScore.js

export function qualityScore(script) {

    let score = 100;

    if (!script.hook)
        score -= 20;

    if (!script.script)
        score -= 30;

    if (!script.cta)
        score -= 15;

    if (
        script.script &&
        script.script.length < 250
    )
        score -= 15;

    if (
        script.script &&
        script.script.length > 2500
    )
        score -= 10;

    return Math.max(0, score);

}
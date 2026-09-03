// server/ai/scoring/confidenceScore.js

/**
 * Calculates AI confidence based on the consistency
 * and quality of the evaluation metrics.
 *
 * Score: 0–100
 */

export function confidenceScore(scores = {}) {

    const {
        hook = 0,
        retention = 0,
        curiosity = 0,
        emotion = 0,
        readability = 0,
        cta = 0,
        platform = 0,
        title = 0,
        hashtags = 0,
    } = scores;

    /*
    =====================================
    Base Weighted Quality
    =====================================
    */

    const weights = {
        hook: 0.20,
        retention: 0.20,
        curiosity: 0.15,
        emotion: 0.10,
        readability: 0.08,
        cta: 0.10,
        platform: 0.05,
        title: 0.07,
        hashtags: 0.05,
    };

    const weightedScore =
        hook * weights.hook +
        retention * weights.retention +
        curiosity * weights.curiosity +
        emotion * weights.emotion +
        readability * weights.readability +
        cta * weights.cta +
        platform * weights.platform +
        title * weights.title +
        hashtags * weights.hashtags;

    /*
    =====================================
    Consistency
    =====================================
    */

    const values = [
        hook,
        retention,
        curiosity,
        emotion,
        readability,
        cta,
        platform,
        title,
        hashtags,
    ];

    const average =
        values.reduce((sum, value) => sum + value, 0) /
        values.length;

    const variance =
        values.reduce(
            (sum, value) =>
                sum + Math.pow(value - average, 2),
            0
        ) / values.length;

    let confidence = weightedScore;

    /*
    =====================================
    Consistency Bonus
    =====================================
    */

    if (variance < 40) {
        confidence += 6;
    } else if (variance < 80) {
        confidence += 3;
    }

    /*
    =====================================
    High Quality Bonus
    =====================================
    */

    if (
        hook >= 90 &&
        retention >= 90 &&
        curiosity >= 90
    ) {
        confidence += 5;
    }

    /*
    =====================================
    Weakness Penalty
    =====================================
    */

    values.forEach((score) => {

        if (score < 50) {
            confidence -= 3;
        }

    });

    /*
    =====================================
    Clamp 0–100
    =====================================
    */

    confidence = Math.max(
        0,
        Math.min(
            Math.round(confidence),
            100
        )
    );

    return confidence;
}
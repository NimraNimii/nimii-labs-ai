// server/ai/scoring/overallScore.js

import { hookScore } from "./hookScore.js";
import { retentionScore } from "./retentionScore.js";
import { curiosityScore } from "./curiosityScore.js";
import { emotionalScore } from "./emotionalScore.js";
import { readabilityScore } from "./readabilityScore.js";
import { ctaScore } from "./ctaScore.js";
import { platformScore } from "./platformScore.js";
import { titleScore } from "./titleScore.js";
import { hashtagScore } from "./hashtagScore.js";
import { confidenceScore } from "./confidenceScore.js";

/**
 * Master scoring engine.
 *
 * Overall Score = weighted content metrics.
 * AI Confidence = separate evaluation-confidence score.
 */

export function overallScore(
    script,
    platform = "TikTok"
) {

    const scores = {

        hook: hookScore(script),

        retention: retentionScore(script),

        curiosity: curiosityScore(script),

        emotion: emotionalScore(script),

        readability: readabilityScore(script),

        cta: ctaScore(script),

        platform: platformScore(
            script,
            platform
        ),

        title: titleScore(script),

        hashtags: hashtagScore(script),

    };

    /*
    =====================================
    Overall Score
    =====================================
    */

    const viralScore = Math.round(

        scores.hook * 0.20 +

        scores.retention * 0.20 +

        scores.curiosity * 0.15 +

        scores.emotion * 0.10 +

        scores.readability * 0.08 +

        scores.cta * 0.10 +

        scores.platform * 0.05 +

        scores.title * 0.07 +

        scores.hashtags * 0.05

    );

    /*
    =====================================
    AI Confidence
    =====================================
    */

    scores.confidence =
        confidenceScore(scores);

    /*
    =====================================
    Grade
    =====================================
    */

    let grade = "F";

    if (viralScore >= 95)
        grade = "S";

    else if (viralScore >= 90)
        grade = "A+";

    else if (viralScore >= 80)
        grade = "A";

    else if (viralScore >= 70)
        grade = "B";

    else if (viralScore >= 60)
        grade = "C";

    else if (viralScore >= 50)
        grade = "D";

    /*
    =====================================
    Rating
    =====================================
    */

    let rating = "";

    if (viralScore >= 95)
        rating = "Exceptional";

    else if (viralScore >= 90)
        rating = "Outstanding";

    else if (viralScore >= 80)
        rating = "Very Strong";

    else if (viralScore >= 70)
        rating = "Good Potential";

    else if (viralScore >= 60)
        rating = "Needs Improvement";

    else
        rating = "Weak";

    /*
    =====================================
    Confidence Label
    =====================================
    */

    let confidenceLabel = "Low";

    if (scores.confidence >= 85)
        confidenceLabel = "High";

    else if (scores.confidence >= 70)
        confidenceLabel = "Medium";

    /*
    =====================================
    Return
    =====================================
    */

    return {

        ...scores,

        overall: viralScore,

        viralScore,

        grade,

        rating,

        confidenceLabel,

    };
}
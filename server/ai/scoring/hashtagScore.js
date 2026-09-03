// server/ai/scoring/hashtagScore.js

/**
 * Evaluates hashtag quality.
 *
 * Score: 0–100
 */

export function hashtagScore(script) {

    if (!script) return 0;

    let hashtags = script.hashtags || [];

    /*
    =====================================
    Support String Input
    =====================================
    */

    if (typeof hashtags === "string") {

        hashtags = hashtags
            .split(/[,\s]+/)
            .filter(Boolean);

    }

    if (!Array.isArray(hashtags))
        return 0;

    hashtags = hashtags
        .map(tag => tag.trim())
        .filter(Boolean);

    if (hashtags.length === 0)
        return 0;

    let score = 50;

    /*
    =====================================
    Number of Hashtags
    =====================================
    */

    if (hashtags.length >= 3 && hashtags.length <= 6)
        score += 20;
    else if (hashtags.length <= 8)
        score += 10;
    else
        score -= 10;

    /*
    =====================================
    Every tag starts with #
    =====================================
    */

    hashtags.forEach(tag => {

        if (tag.startsWith("#"))
            score += 2;
        else
            score -= 3;

    });

    /*
    =====================================
    Length
    =====================================
    */

    hashtags.forEach(tag => {

        const clean = tag.replace("#", "");

        if (
            clean.length >= 3 &&
            clean.length <= 20
        ) {

            score += 2;

        } else {

            score -= 2;

        }

    });

    /*
    =====================================
    Duplicate Penalty
    =====================================
    */

    const unique = new Set(

        hashtags.map(tag =>
            tag.toLowerCase()
        )

    );

    if (unique.size !== hashtags.length) {

        score -= 10;

    }

    /*
    =====================================
    Generic Hashtags
    =====================================
    */

    const generic = [

        "#viral",

        "#fyp",

        "#trending",

        "#explore",

        "#reels",

        "#shorts",

        "#video"

    ];

    hashtags.forEach(tag => {

        if (
            generic.includes(
                tag.toLowerCase()
            )
        ) {

            score -= 2;

        }

    });

    /*
    =====================================
    Niche Hashtags
    =====================================
    */

    const nicheWords = [

        "ai",

        "business",

        "fitness",

        "money",

        "startup",

        "marketing",

        "python",

        "coding",

        "technology",

        "productivity",

        "mindset",

        "finance"

    ];

    hashtags.forEach(tag => {

        const lower = tag.toLowerCase();

        nicheWords.forEach(word => {

            if (lower.includes(word)) {

                score += 3;

            }

        });

    });

    /*
    =====================================
    Long Hashtag Penalty
    =====================================
    */

    hashtags.forEach(tag => {

        if (tag.length > 28)
            score -= 3;

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
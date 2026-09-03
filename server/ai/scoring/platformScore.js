// server/ai/scoring/platformScore.js

/**
 * Scores how well the script fits the
 * selected platform.
 *
 * Supported:
 * - TikTok
 * - Instagram Reels
 * - YouTube Shorts
 *
 * Score: 0–100
 */

export function platformScore(script, platform = "TikTok") {

    if (!script) return 0;

    platform = platform.toLowerCase();

    const hook = (script.hook || "").trim();

    const body = (script.script || "").trim();

    const cta = (script.cta || "").trim();

    const text = `${hook} ${body} ${cta}`.toLowerCase();

    let score = 70;

    /*
    =====================================
    Word Count
    =====================================
    */

    const words = text
        .split(/\s+/)
        .filter(Boolean);

    /*
    =====================================
    TikTok
    =====================================
    */

    if (platform.includes("tiktok")) {

        if (words.length >= 90 && words.length <= 160)
            score += 10;
        else
            score -= 6;

        if (hook.length <= 90)
            score += 5;

        if (text.includes("?"))
            score += 4;

        if (
            cta.toLowerCase().includes("comment") ||
            cta.toLowerCase().includes("follow") ||
            cta.toLowerCase().includes("share")
        )
            score += 8;

    }

    /*
    =====================================
    Instagram Reels
    =====================================
    */

    else if (

        platform.includes("instagram") ||

        platform.includes("reels")

    ) {

        if (words.length >= 80 && words.length <= 150)
            score += 10;
        else
            score -= 6;

        if (hook.length <= 85)
            score += 5;

        if (
            cta.toLowerCase().includes("save") ||
            cta.toLowerCase().includes("share") ||
            cta.toLowerCase().includes("follow")
        )
            score += 8;

    }

    /*
    =====================================
    YouTube Shorts
    =====================================
    */

    else if (

        platform.includes("youtube") ||

        platform.includes("shorts")

    ) {

        if (words.length >= 120 && words.length <= 220)
            score += 10;
        else
            score -= 5;

        if (hook.length <= 100)
            score += 5;

        if (

            cta.toLowerCase().includes("subscribe") ||

            cta.toLowerCase().includes("comment") ||

            cta.toLowerCase().includes("watch")

        )

            score += 8;

    }

    /*
    =====================================
    Curiosity
    =====================================
    */

    const curiosityWords = [

        "secret",
        "truth",
        "mistake",
        "actually",
        "nobody",
        "never",
        "stop",
        "why",
        "how",
        "hidden"

    ];

    curiosityWords.forEach(word => {

        if (text.includes(word))

            score += 2;

    });

    /*
    =====================================
    Conversational Style
    =====================================
    */

    const conversational = [

        "you",

        "your",

        "imagine",

        "look",

        "listen",

        "watch",

        "because",

        "but"

    ];

    conversational.forEach(word => {

        if (text.includes(word))

            score += 1;

    });

    /*
    =====================================
    Penalties
    =====================================
    */

    const penalties = [

        "in conclusion",

        "overall",

        "to summarize",

        "thank you for watching"

    ];

    penalties.forEach(word => {

        if (text.includes(word))

            score -= 8;

    });

    /*
    =====================================
    Clamp
    =====================================
    */

    score = Math.max(0, Math.min(score, 100));

    return Math.round(score);

}
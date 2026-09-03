import buildAnalysis from "./buildAnalysis.js";

export default function generateAnalysis(scores = {}) {

    const strengths = [];
    const weaknesses = [];
    const improvements = [];

    // ---------- Hook ----------

if ((scores.hook || 0) >= 95) {

    strengths.push({
        type: "hook",
        title: "Excellent Hook",
        description: "Your opening immediately grabs attention and creates strong curiosity."
    });

} else if ((scores.hook || 0) >= 85) {

    improvements.push({
        type: "hook",
        priority: 1,
        title: "Improve Hook",
        description: "Open with a stronger curiosity gap, bold claim, or surprising statement before introducing the topic."
    });

} else if ((scores.hook || 0) >= 70) {

    improvements.push({
        type: "hook",
        priority: 1,
        title: "Rewrite Opening",
        description: "Delay the main reveal and build curiosity in the first sentence to encourage viewers to keep watching."
    });


    } else {

    weaknesses.push({
        type: "hook",
        severity: "high",
        title: "Weak Hook",
        description: "The opening fails to create curiosity. Start with a surprising fact, bold statement, or unanswered question."
    });

    improvements.push({
        type: "hook",
        priority: 1,
        title: "Improve Hook",
        description: "Rewrite the opening with a stronger curiosity gap, bold claim, or surprising statement."
    });



}

// ---------- Retention ----------

if ((scores.retention || 0) >= 95) {

    strengths.push({
        type: "retention",
        title: "Excellent Retention",
        description: "The pacing keeps viewers engaged from beginning to end."
    });

} else if ((scores.retention || 0) >= 85) {

    improvements.push({
        type: "retention",
        priority: 2,
        title: "Improve Flow",
        description: "Remove unnecessary details and tighten transitions between sections."
    });

} else if ((scores.retention || 0) >= 70) {

    improvements.push({
        type: "retention",
        priority: 2,
        title: "Increase Retention",
        description: "Introduce curiosity earlier and add a stronger payoff near the end."
    });

} else {

    weaknesses.push({
        type: "retention",
        severity: "high",
        title: "Weak Retention",
        description: "The script loses momentum. Shorten repetitive sections and add curiosity loops throughout."

    });

}

    

    // ---------- CTA ----------

if ((scores.cta || 0) >= 95) {

    strengths.push({
        type: "cta",
        title: "Excellent CTA",
        description: "The ending motivates viewers to take immediate action."
    });

} else if ((scores.cta || 0) >= 85) {

    improvements.push({
        type: "cta",
        priority: 4,
        title: "Improve CTA",
        description: "Make the action more specific and clearly explain why viewers should respond."
    });

} else if ((scores.cta || 0) >= 70) {

    improvements.push({
        type: "cta",
        priority: 4,
        title: "Strengthen Ending",
        description: "End with a stronger call-to-action that encourages comments, saves, shares, or follows."
    });

 } else {

    weaknesses.push({
        type: "cta",
        severity: "high",
        title: "Weak CTA",
        description: "The ending lacks a compelling reason for viewers to take action immediately."
    });

    improvements.push({
        type: "cta",
        priority: 4,
        title: "Improve CTA",
        description: "Give viewers one clear action and explain why they should do it now."
    });

}


// ---------- Curiosity ----------

if ((scores.curiosity || 0) >= 95) {

    strengths.push({
        type: "curiosity",
        title: "Excellent Curiosity",
        description: "The script consistently builds anticipation."
    });

} else if ((scores.curiosity || 0) >= 85) {

    improvements.push({
        type: "curiosity",
        priority: 3,
        title: "Increase Curiosity",
        description: "Delay revealing the answer and build stronger anticipation throughout the script."
    });

} else if ((scores.curiosity || 0) >= 70) {

    } else {

    weaknesses.push({
        type: "curiosity",
        severity: "medium",
        title: "Low Curiosity",
        description: "The script reveals information too early and gives viewers little reason to continue watching."
    });

    improvements.push({
        type: "curiosity",
        priority: 3,
        title: "Increase Curiosity",
        description: "Delay revealing key information and create stronger curiosity loops throughout the script."
    });

}
   
    // ---------- Emotion ----------

    if ((scores.emotion || 0) >= 90) {

        strengths.push({
            type: "emotion",
            title: "Strong Emotional Impact",
            description: "The script creates an emotional connection with the audience."
        });

    } else if ((scores.emotion || 0) >= 75) {

       } else {

    weaknesses.push({
        type: "emotion",
        severity: "medium",
        title: "Low Emotional Impact",
        description: "The script feels informative but lacks emotional engagement."
    });

    improvements.push({
        type: "emotion",
        priority: 5,
        title: "Increase Emotion",
        description: "Add relatable moments, emotional consequences, or personal storytelling."
    });

}

    // ---------- Readability ----------

    if ((scores.readability || 0) >= 90) {

        strengths.push({
            type: "readability",
            title: "Excellent Readability",
            description: "The script is concise, clear, and easy to follow."
        });

    } else if ((scores.readability || 0) >= 75) {

        improvements.push({
            type: "readability",
            priority: 6,
            title: "Improve Readability",
            description: "Use shorter sentences and remove unnecessary words to improve pacing."
        });

    } else {

        weaknesses.push({
            type: "readability",
            severity: "medium",
            title: "Poor Readability",
            description: "Some sections are difficult to read or overly complex."
        });

    }

    // ---------- Platform ----------

    if ((scores.platform || 0) >= 90) {

        strengths.push({
            type: "platform",
            title: "Platform Optimized",
            description: "The script is well optimized for the selected platform."
        });

    } else if ((scores.platform || 0) >= 75) {

        improvements.push({
            type: "platform",
            priority: 7,
            title: "Improve Platform Fit",
            description: "Match the pacing, formatting, and delivery style expected on the selected platform."
        });

    } else {

        weaknesses.push({
            type: "platform",
            severity: "medium",
            title: "Weak Platform Optimization",
            description: "The script doesn't fully match the style of the selected platform."
        });

    }

    // ---------- Title ----------

    if ((scores.title || 0) >= 90) {

        strengths.push({
            type: "title",
            title: "Strong Title",
            description: "The title is attention-grabbing and encourages clicks."
        });

    } else if ((scores.title || 0) >= 75) {

        improvements.push({
            type: "title",
            priority: 8,
            title: "Improve Title",
            description:"Rewrite the title around one clear benefit or unanswered question."
        });

    } else {

        weaknesses.push({
            type: "title",
            severity: "medium",
            title: "Weak Title",
            description: "The title lacks curiosity or a compelling reason to click."
        });

    }

    // ---------- Hashtags ----------

    if ((scores.hashtags || 0) >= 90) {

        strengths.push({
            type: "hashtags",
            title: "Strong Hashtags",
            description: "The hashtags are relevant and improve discoverability."
        });

    } else if ((scores.hashtags || 0) >= 75) {

        improvements.push({
            type: "hashtags",
            priority: 9,
            title: "Improve Hashtags", description: "Replace generic hashtags with niche-specific keywords that improve discoverability."
        });

    } else {

        weaknesses.push({
            type: "hashtags",
            severity: "low",
            title: "Weak Hashtags",
            description: "The hashtags are too generic or missing important keywords."
        });

    }


    improvements.sort((a, b) => a.priority - b.priority);


strengths.sort((a, b) => {
    const scoreA = scores[a.type] || 0;
    const scoreB = scores[b.type] || 0;
    return scoreB - scoreA;
});

weaknesses.sort((a, b) => {
    const scoreA = scores[a.type] || 100;
    const scoreB = scores[b.type] || 100;
    return scoreA - scoreB;
});

    return buildAnalysis({
    scores,
    strengths: strengths.slice(0, 3),
    weaknesses: weaknesses.slice(0, 3),
    improvements,
});




}


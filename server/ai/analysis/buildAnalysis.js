export default function buildAnalysis({
    scores = {},
    strengths = [],
    weaknesses = [],
    improvements = [],
}) {

    let headline = "Needs Improvement";
    let summary = "Your script has several areas that should be improved.";

   const overall = scores.overall ?? scores.viralScore ?? 0;



    if (overall >= 95) {
        headline = "Exceptional";
        summary =
            "Your script is highly optimized with only minor refinements remaining.";
    }

    else if (overall >= 85) {
        headline = "Very Strong";
        summary =
            "Your script performs well across most areas with only a few opportunities for improvement.";
    }

    else if (overall >= 70) {
        headline = "Good Potential";
        summary =
            "Your script has a solid foundation but improving the weakest areas could significantly increase performance.";
    }

    else if (overall >= 60) {
        headline = "Needs Improvement";
        summary =
            "Improving the highest-priority issues should noticeably strengthen this script.";
    }

function getStrengthDescription(type) {
    switch (type) {
        case "hook":
            return "Your opening immediately captures attention and gives viewers a reason to keep watching.";

        case "retention":
            return "Your pacing keeps viewers engaged throughout the script.";

        case "curiosity":
            return "Your script creates enough curiosity to encourage viewers to watch until the end.";

        case "emotion":
            return "Your wording creates emotional engagement that makes the content memorable.";

        case "cta":
            return "Your call-to-action feels natural and encourages viewers to respond.";

        case "platform":
            return "The script matches the style and pacing expected for the selected platform.";

        default:
            return "This area is one of the strongest parts of your content.";
    }
}

function getWeaknessDescription(type) {
    switch (type) {
        case "hook":
            return "The opening isn't strong enough to stop users from scrolling.";

        case "retention":
            return "The pacing slows down in the middle and may reduce watch time.";

        case "curiosity":
            return "The script reveals information too early instead of creating anticipation.";

        case "emotion":
            return "The content is informative but lacks emotional impact.";

        case "cta":
            return "The ending doesn't give viewers a compelling reason to take action.";

        case "platform":
            return "The script could better match the content style of the selected platform.";

        default:
            return "Improving this area will significantly improve overall performance.";
    }
}

function getQuickWin(type) {
    switch (type) {
        case "Improve Hook":
            return "A stronger first sentence can dramatically improve retention.";

        case "Increase Retention":
            return "Adding curiosity loops will keep viewers watching longer.";

        case "Increase Curiosity":
            return "Delaying key information creates stronger anticipation.";

        case "Increase Emotion":
            return "Adding emotional storytelling makes the message more memorable.";

        case "Improve CTA":
            return "A more direct CTA will increase comments, follows, and shares.";

        default:
            return "This improvement offers the highest impact with minimal changes.";
    }
}

return {

    overall,

    scores,

    headline,

    summary,

    strengths,

    weaknesses,

    improvements,

    insights: {

        biggestStrength: {
            title: strengths[0]?.title || "Strong Area",
            description: getStrengthDescription(
                strengths[0]?.type
            )
        },

        biggestWeakness: {
            title: weaknesses[0]?.title || "Needs Improvement",
            description: getWeaknessDescription(
                weaknesses[0]?.type
            )
        },

        quickestWin: {
            title: improvements[0]?.title || "Improve Hook",
            description: getQuickWin(
                improvements[0]?.title
            )
        }

    }

};
}
import "../../styles/ValidationReport.css";

export default function ValidationReport({
    scores = {},
    overallScore = 0,
}) {

    console.log(scores);

  const items = [
    {
        key: "hook",
        label: "Hook",
        score: scores.hook || 0,
    },
    {
        key: "retention",
        label: "Retention",
        score: scores.retention || 0,
    },
    {
        key: "curiosity",
        label: "Curiosity",
        score: scores.curiosity || 0,
    },
    {
        key: "emotion",
        label: "Emotion",
        score: scores.emotion || 0,
    },
    {
        key: "readability",
        label: "Readability",
        score: scores.readability || 0,
    },
    {
        key: "cta",
        label: "CTA",
        score: scores.cta || 0,
    },
    {
        key: "platform",
        label: "Platform Fit",
        score: scores.platform || 0,
    },
    {
        key: "title",
        label: "Title",
        score: scores.title || 0,
    },
    {
        key: "hashtags",
        label: "Hashtags",
        score: scores.hashtags || 0,
    },
    {
        key: "confidence",
        label: "AI Confidence",
        score: scores.confidence || 0,
    },
];

    const getStatus = (score) => {
        if (score >= 85) {
            return {
                color: "green",
                text: "Excellent",
            };
        }

        if (score >= 70) {
            return {
                color: "yellow",
                text: "Needs Work",
            };
        }

        return {
            color: "red",
            text: "Weak",
        };
    };

    return (
        <section className="validation-report">

            <div className="validation-header">

                <div>

                 <h2>AI Validation Report</h2>

<p className="validation-subtitle">
    Overall Score Breakdown
</p>

                    <p>
                        Your idea has been analyzed before generating the
                        optimized version.
                    </p>

                </div>

                <div className="validation-overall">

  <span>Overall Score</span>

<p className="validation-score-note">
   Weighted across 9 content performance metrics.
</p>

    <h1>{overallScore}</h1>

    <small>/100</small>

<div className="validation-meta">

    <div className="validation-grade">
        Grade <strong>{scores.grade}</strong>
    </div>

    <div className="validation-rating">
        {scores.rating}
    </div>

    <div className="validation-confidence">
        Confidence {scores.confidence}%
    </div>

</div>



</div>

            </div>

       <div className="validation-grid validation-grid--full">

                {items.map((item) => {

                    const status = getStatus(item.score);

                    return (

                        <div
                            key={item.key}
                            className="validation-card"
                        >

                            <div className="validation-top">

                                <span>{item.label}</span>

                                <strong>{item.score}</strong>

                            </div>

                            <div
                                className={`validation-status ${status.color}`}
                            >

                                <span className="dot" />

                                {status.text}

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>
    );
}
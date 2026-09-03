import "../../styles/AnalysisLoader.css";

const STEPS = [
    "Understanding your topic",
    "Finding viral patterns",
    "Building hook strategy",
    "Generating script",
    "Comparing AI writers",
    "Calculating viral score",
    "Preparing rewrite suggestions",
];

const PREVIEW = {
    "Understanding your topic": {
        hook: "Analyzing your niche...",
        script: "Waiting for generation...",
        cta: "Waiting..."
    },

    "Finding viral patterns": {
        hook: "Studying successful videos...",
        script: "Waiting for generation...",
        cta: "Waiting..."
    },

    "Building hook strategy": {
        hook: "Crafting an attention-grabbing opening...",
        script: "Waiting for generation...",
        cta: "Waiting..."
    },

    "Generating script": {
        hook: "✓ Hook Ready",
        script: "Writing the main script...",
        cta: "Waiting..."
    },

    "Comparing AI writers": {
        hook: "✓ Hook Ready",
        script: "Comparing multiple AI versions...",
        cta: "Waiting..."
    },

    "Calculating viral score": {
        hook: "✓ Complete",
        script: "✓ Script Complete",
        cta: "Generating CTA..."
    },

    "Preparing rewrite suggestions": {
        hook: "✓ Complete",
        script: "✓ Complete",
        cta: "✓ Complete"
    }
};

export default function AnalysisLoader({ analysisStep }) {

    const currentIndex = Math.max(
        0,
        STEPS.findIndex(
            step =>
                step.toLowerCase() ===
                analysisStep?.toLowerCase()
        )
    );

    const preview =
        PREVIEW[analysisStep] ||
        PREVIEW["Understanding your topic"];

    return (

        <section className="analysis-loader">

            <div className="loader-card">

                <div className="loader-header">

                    <div className="loader-icon">
                        ✨
                    </div>

                    <div>

                        <h2>
                            AI is Building Your Viral Script
                        </h2>

                        <p>
                            Follow the generation process in real time.
                        </p>

                    </div>

                </div>

                <div className="loader-body">

                    {/* LEFT */}

                    <div className="loader-left">

                        {STEPS.map((step, index) => {

                            const complete =
                                index < currentIndex;

                            const active =
                                index === currentIndex;

                            return (

                                <div
                                    key={step}
                                    className={`loader-step ${
                                        complete
                                            ? "done"
                                            : active
                                            ? "active"
                                            : ""
                                    }`}
                                >

                                    <div className="loader-dot">

                                        {complete
                                            ? "✓"
                                            : active
                                            ? "●"
                                            : "○"}

                                    </div>

                                    <span>{step}</span>

                                </div>

                            );

                        })}

                    </div>

                    {/* RIGHT */}

                    <div className="loader-preview">

                        <div className="preview-box">

                            <h4>HOOK</h4>

                            <p>{preview.hook}</p>

                        </div>

                        <div className="preview-box">

                            <h4>SCRIPT</h4>

                            <p>{preview.script}</p>

                        </div>

                        <div className="preview-box">

                            <h4>CTA</h4>

                            <p>{preview.cta}</p>

                        </div>

                    </div>

                </div>

                <div className="loader-progress">

                    <div
                        className="loader-progress-fill"
                        style={{
                            width: `${((currentIndex + 1) / STEPS.length) * 100}%`
                        }}
                    />

                </div>

                <div className="loader-status">

                    Currently:
                    <strong> {analysisStep}</strong>

                </div>

            </div>

        </section>

    );
}
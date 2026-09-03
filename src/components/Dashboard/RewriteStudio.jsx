import { useState } from "react";
import "../../styles/RewriteStudio.css";
import {
  Wand2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function RewriteStudio({
  analysis,
  hook,
  script,
  cta,
  rewritePreview,
  onImprove,
  onApply,
  onReject,
  onClearPreview,
  viralScore = 0,
})

{
 const [selected, setSelected] = useState("improve_hook");
console.log("Selected:", selected);

  const [loading, setLoading] = useState(false);

  if (!analysis) return null;

  const options = [
    {
      id: "improve_hook",
      label: "Hook",
    },
    {
      id: "improve_retention",
      label: "Retention",
    },
    {
      id: "improve_curiosity",
      label: "Curiosity",
    },
    {
      id: "improve_emotion",
      label: "Emotion",
    },
    {
      id: "improve_cta",
      label: "CTA",
    },
    {
      id: "improve_platform",
      label: "Platform Fit",
    },
  ];

const select = (id) => {
  setSelected(id);
  onClearPreview?.();
};

const handleImprove = async () => {
  if (!selected || !onImprove) return;

  try {
    setLoading(true);
    await onImprove(selected);
  } finally {
    setLoading(false);
  }
};



const previewContent = {

    improve_hook: {
        original: hook,
        improved: rewritePreview?.improved?.hook,
    },

    improve_retention: {
        original: script,
        improved: rewritePreview?.improved?.script,
    },

    improve_curiosity: {
        original: script,
        improved: rewritePreview?.improved?.script,
    },

    improve_emotion: {
        original: script,
        improved: rewritePreview?.improved?.script,
    },

    improve_cta: {
        original: cta,
        improved: rewritePreview?.improved?.cta,
    },

    improve_platform: {
        original: script,
        improved: rewritePreview?.improved?.script,
    },

};

const currentPreview =
  previewContent[selected];




  return (
    <section className="rewrite-studio">

      <div className="rewrite-header">

        <div>

          <h2>
            <Wand2 size={26} />
            AI Rewrite Studio
          </h2>

          <p>
            Choose which parts of your script should be rewritten.
          </p>

        </div>

        <div className="rewrite-score">

          <span>Current Score</span>

         <strong>{viralScore}</strong>

{rewritePreview?.score && (

    <span className="score-improvement">

        +{rewritePreview.score.delta}

    </span>

)}

        </div>

      </div>

      <div className="rewrite-options">

        {options.map((item) => (
          <button
            key={item.id}

        className={
  selected === item.id
    ? "rewrite-chip active"
    : "rewrite-chip"
}
onClick={() => select(item.id)}
          >
            {item.label}
          </button>
        ))}

      </div>

<div className="rewrite-preview">
    <div className="preview-card">

        <h4>Original</h4>

     <p>{currentPreview.original}</p>

    </div>

{currentPreview?.improved && (
    <div className="preview-card improved">


            <h4>✨ AI Suggestion</h4>

            <p>
               {currentPreview.improved}
            </p>
        </div>
    )}


{rewritePreview?.reason && (
  <div className="rewrite-reason">

    <h4>✨ Why this is better</h4>

    {typeof rewritePreview.reason === "string" ? (
      <p>{rewritePreview.reason}</p>
    ) : (
      <>
        {rewritePreview.reason.summary && (
          <p>{rewritePreview.reason.summary}</p>
        )}

        {Array.isArray(rewritePreview.reason.improvements) && (
          <ul>
            {rewritePreview.reason.improvements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </>
    )}

  </div>
)}
</div>

{rewritePreview ? (
 
 <div className="rewrite-actions">

   <button
    className="apply-button"
    onClick={() => onApply?.(selected)}
>
    ✨ Apply Rewrite
</button>

   <button
    className="reject-button"
    onClick={() => onReject?.(selected)}
>
    Keep Original
</button>

</div>


) : (
  <button
    className="rewrite-button"
    disabled={!selected || loading}
    onClick={handleImprove}
  >
    {loading ? (
      <>
        <Sparkles size={18} />
        Rewriting...
      </>
    ) : (
      <>
        <ArrowRight size={18} />
        Improve Selected Section
      </>
    )}
  </button>
)}

     

      <div className="rewrite-footer">

        <div>

          <TrendingUp size={18} />

          <span>
            AI will improve only the selected sections.
          </span>

        </div>

        <div>

          <CheckCircle2 size={18} />

          <span>
            Original structure will remain unchanged.
          </span>

        </div>

      </div>

    </section>
  );
}
import React from "react";

import {
  FileText,
  Flame,
  Clapperboard,
  Megaphone,
} from "lucide-react";

export default function GeneratedScript({
    hook,
    script,
    cta,
    analysis,
    scores,
    platform,
    dnaMode,
    onCopy,
    onExport,
    onShare,
    onRewrite,
    isGenerating,
})

 {


  const hasContent = Boolean(hook || script || cta);

  return (
    <div
      className={`dashboard-script-editor ${
        hasContent ? "has-script" : "empty-script"
      }`}
    >
      {!hasContent ? (
        <div className="dashboard-script-empty">

          <div
            className="dashboard-script-empty-icon"
            aria-hidden="true"
          >
            <FileText size={30} strokeWidth={1.8} />
          </div>

          <h3>Your viral script will appear here</h3>

          <p>
            Describe your idea, choose a platform and content
            style, then generate your script.
          </p>

        </div>
      ) : (
        <div className="generated-script-content">


          <div className="generated-script-meta">

  <span className="meta-pill">
    📱 {platform || "TikTok"}
  </span>

  
  <span className="meta-pill">
    🧠 {dnaMode?.primary
        ? dnaMode.primary
            .replace("_", " ")
            .replace(/\b\w/g, char => char.toUpperCase())
        : "Teach"}
</span>


  <span className="meta-pill">
    ✍️ {(script || "").split(/\s+/).filter(Boolean).length} words
  </span>

  <span className="meta-pill">
    ⏱️ {Math.max(
      1,
      Math.ceil(
        (script || "").split(/\s+/).filter(Boolean).length / 150
      )
    )} min read
  </span>

  <span className="meta-pill success">
    ✨ AI Optimized
  </span>

</div>

          {hook && (
            <div className="script-part">

              <h3>
                <Flame
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>HOOK</span>
              </h3>

            <div className="script-text">
    {hook}
</div>

            </div>
          )}

          {script && (
            <div className="script-part">

              <h3>
                <Clapperboard
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>SCRIPT</span>
              </h3>

              <div className="script-text">
    {script}
</div>

            </div>
          )}

          {cta && (
            <div className="script-part">

              <h3>
                <Megaphone
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>CTA</span>
              </h3>

            <div className="script-text">
    {cta}
</div>

            </div>
          )}

        </div>
      )}
    </div>
  );
}
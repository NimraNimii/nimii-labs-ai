import React from "react";
import { FileText, Smartphone, BrainCircuit, Clock3 } from "lucide-react";

import ScriptToolbar from "./ScriptToolbar";

export default function GeneratedHeader({
  onCopy,
  onExport,
  onShare,
  platform,
  dnaMode,
  script,
}) {
  const words = script
    ? script.trim().split(/\s+/).length
    : 0;

  const readTime = Math.max(
    1,
    Math.round(words / 150)
  );

  return (
    <div className="dashboard-script-header">

      <div className="dashboard-script-header-left">

        <div className="dashboard-script-title">
          <span className="dashboard-script-icon">
            <FileText size={28} />
          </span>

          <div>
            <h2>Generated Script</h2>

            <div className="script-meta">

              <span className="script-chip">
                <Smartphone size={14} />
                {platform || "TikTok"}
              </span>

             <span className="script-chip">
    <BrainCircuit size={14} />
    {dnaMode?.primary
        ? dnaMode.primary
            .replace("_", " ")
            .replace(/\b\w/g, char => char.toUpperCase())
        : "Teach"}
</span>

              <span className="script-chip">
                <Clock3 size={14} />
                {words} words · {readTime} min
              </span>

            </div>

          </div>
        </div>

      </div>

      <ScriptToolbar
        onCopy={onCopy}
        onExport={onExport}
        onShare={onShare}
      />

    </div>
  );
}
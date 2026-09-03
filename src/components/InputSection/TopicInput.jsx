import React from "react";

export default function TopicInput({
  niche,
  setNiche,
  score,
  generateScript,
  loading,
}) {
  return (
    <div className="topic-input-wrapper">
      <input
        className="topic-input"
        type="text"
        placeholder="Enter your topic..."
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
      />

      <div className="pre-score-card">
        <span className="score-label">
          🔥 PRE-GENERATION SCORE
        </span>

        <span className="score-value">
          {score}/100
        </span>
      </div>

      <button
        className="generate-btn"
        onClick={generateScript}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Script"}
      </button>
    </div>
  );
}
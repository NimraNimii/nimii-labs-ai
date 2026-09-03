import React from "react";
import "../../styles/Header.css";
import QuickTopics from "../Hero/QuickTopics";


export default function HeaderActions({
  score = 82,
  reach = "50K - 250K",
}) {
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;

  return (
    <div className="viral-score-card">

      <div className="viral-score-header">
        <span className="live-dot"></span>
        <span>Viral Score (Live)</span>
      </div>

      <div className="viral-gauge">

        <svg width="210" height="120" viewBox="0 0 210 120">

          <path
            d="M30 105 A75 75 0 0 1 180 105"
            fill="none"
            stroke="#2d2147"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <path
            d="M30 105 A75 75 0 0 1 180 105"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="14"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#c38cff"/>
              <stop offset="100%" stopColor="#8a3ffc"/>
            </linearGradient>
          </defs>

        </svg>

        <div className="score-center">
          <h1>{score}</h1>
          <span>/100</span>
        </div>

      </div>

      <div className="viral-status">
        📈 High Viral Potential
      </div>

      <div className="reach-card">

        <small>Est. Reach</small>

        <h3>{reach}</h3>

        <span>views</span>

      </div>

<div className="header-actions">

    <div className="viral-score-card">
        ...
    </div>


</div>

    </div>

  );
}
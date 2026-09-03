import React from "react";
import {
  Sparkles,
  WandSparkles,
} from "lucide-react";

import "../../styles/Header.css";

export default function Header({
  title = "Validate Your Next Viral Idea",
  subtitle = "Predict performance, discover weak spots, and generate a stronger version before you hit record..",
}) {
  return (
    <header className="dashboard-header">

      {/* WELCOME SECTION */}

      <div className="welcome-card">

        <div
          className="welcome-icon"
          aria-hidden="true"
        >
          <Sparkles
            size={20}
            strokeWidth={2}
          />
        </div>

        <div className="welcome-content">

          <span className="welcome-label">
            Welcome back
          </span>

          <h3>
            Ready to create something viral?
          </h3>

        </div>

      </div>

      {/* MAIN HEADER */}

      <div className="header-text">

        <div className="header-title-row">

          <WandSparkles
            className="header-title-icon"
            size={34}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <h1>{title}</h1>

        </div>

        <p>{subtitle}</p>

      </div>

    </header>
  );
}
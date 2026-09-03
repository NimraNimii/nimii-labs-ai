import React from "react";

import {
  Sparkles,
  Target,
  Zap,
  Lightbulb,
  ArrowRight
} from "lucide-react";

import "../../styles/ImprovePanel.css";

const improvements = [
  {
    id: "numbers",
    icon: Target,
    title: "Add numbers",
    description: "Numbers increase curiosity and improve CTR."
  },
  {
    id: "shorten",
    icon: Zap,
    title: "Shorten intro",
    description: "Hook viewers in the first 3 seconds."
  },
  {
    id: "cta",
    icon: Lightbulb,
    title: "Stronger CTA",
    description: "End with a direct action for viewers."
  }
];

export default function ImprovePanel({
  onImprove,
  isGenerating
}) {
  return (
    <aside className="improve-panel">

      <h3 className="improve-title">
        <Sparkles
          size={21}
          strokeWidth={2}
          aria-hidden="true"
        />

        <span>Improve this Script</span>
      </h3>

      <div className="improve-list">

        {improvements.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              className="improve-item"
              onClick={() => onImprove?.(item.id)}
              disabled={isGenerating}
            >

              <div className="improve-left">

                <div className="improve-icon">
                  <Icon
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <div className="improve-text">

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                </div>

              </div>

              <span
                className="improve-arrow"
                aria-hidden="true"
              >
                <ArrowRight
                  size={19}
                  strokeWidth={2}
                />
              </span>

            </button>
          );
        })}

      </div>

      <button
        type="button"
        className="improve-button"
        onClick={() => onImprove?.("all")}
        disabled={isGenerating}
      >

        <Sparkles
          size={19}
          strokeWidth={2}
          aria-hidden="true"
        />

        <span>
          {isGenerating
            ? "Improving..."
            : "Improve Script"}
        </span>

      </button>

    </aside>
  );
}
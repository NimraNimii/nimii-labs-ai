import React, { useState } from "react";


import {
  Flame,
  Bot,
  BriefcaseBusiness,
Video,
  BrainCircuit,
  CircleDollarSign,
  Dumbbell,
  TrendingUp,
  Smartphone,
  GraduationCap,
  Camera,
  Gamepad2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import "../../styles/QuickTopics.css";


import "../../styles/QuickTopics.css";

const TOPICS = [
  {
    label: "AI Agents",
    icon: Bot,
  },
  {
    label: "Side Hustles",
    icon: BriefcaseBusiness,
  },

{
  label: "Faceless YouTube",
  icon: Video,
},

  {
    label: "Productivity",
    icon: BrainCircuit,
  },
  {
    label: "Money Hacks",
    icon: CircleDollarSign,
  },
  {
    label: "Fitness",
    icon: Dumbbell,
  },

  // Additional topics shown after View All
  {
    label: "Social Media Growth",
    icon: TrendingUp,
  },
  {
    label: "Tech Tips",
    icon: Smartphone,
  },
  {
    label: "Study Hacks",
    icon: GraduationCap,
  },
  {
    label: "Content Creation",
    icon: Camera,
  },
  {
    label: "Gaming",
    icon: Gamepad2,
  },
  {
    label: "Lifestyle",
    icon: Sparkles,
  },
];

export default function QuickTopics({
  setNiche = () => {},
}) {
  const [showAllTopics, setShowAllTopics] = useState(false);

  const visibleTopics = showAllTopics
    ? TOPICS
    : TOPICS.slice(0, 6);

  const handleTopicClick = (topic) => {
    setNiche(topic);

    // Helps users immediately see the selected topic
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="quick-topics-card">

      <div className="quick-topics-header">

        <div className="quick-topics-heading">

          <div className="quick-topics-title-icon">
            <Flame size={18} />
          </div>

          <div>
            <h3 className="quick-topics-title">
              Quick Topics
            </h3>

            <p className="quick-topics-subtitle">
              Start with a trending idea
            </p>
          </div>

        </div>

      </div>

      <div className="quick-topics-grid">

        {visibleTopics.map(
          ({ label, icon: TopicIcon }) => (

            <button
              key={label}
              type="button"
              className="quick-topic-button"
              onClick={() =>
                handleTopicClick(label)
              }
              aria-label={`Use ${label} as your video idea`}
            >

              <TopicIcon
                className="quick-topic-icon"
                size={17}
                strokeWidth={2}
              />

              <span>{label}</span>

            </button>

          )
        )}

      </div>

      <button
        type="button"
        className="quick-topics-toggle"
        onClick={() =>
          setShowAllTopics(
            (previousValue) => !previousValue
          )
        }
        aria-expanded={showAllTopics}
      >

        <span>
          {showAllTopics
            ? "Show less"
            : "View all topics"}
        </span>

        {showAllTopics ? (
          <ChevronUp
            size={17}
            strokeWidth={2.2}
          />
        ) : (
          <ChevronDown
            size={17}
            strokeWidth={2.2}
          />
        )}

      </button>

    </section>
  );
}
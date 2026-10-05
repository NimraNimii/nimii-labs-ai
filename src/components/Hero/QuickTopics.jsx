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

const TOPICS = [
  {
    label: "AI Agents",
    prompt: "3 AI agents that can help freelancers save hours every week",
    icon: Bot,
  },
  {
    label: "Side Hustles",
    prompt: "How to start a side hustle with $100",
    icon: BriefcaseBusiness,
  },
  {
    label: "Faceless YT",
    prompt: "How to start a faceless YouTube channel from scratch",
    icon: Video,
  },
  {
    label: "Productivity",
    prompt: "Why your to-do list keeps getting longer",
    icon: BrainCircuit,
  },
  {
    label: "Money Hacks",
    prompt: "5 things you can stop buying to save more money",
    icon: CircleDollarSign,
  },
  {
    label: "Fitness",
    prompt: "3 common mistakes beginners make at the gym",
    icon: Dumbbell,
  },

  // Additional topics shown after View All
  {
    label: "Creator Strategy",
    prompt: "How to build a consistent content workflow without burning out",
    icon: TrendingUp,
  },
  {
    label: "Tech Tips",
    prompt: "5 useful tech tools that most people don't know about",
    icon: Smartphone,
  },
  {
    label: "Study Hacks",
    prompt: "How to study smarter when you have very little time",
    icon: GraduationCap,
  },
  {
    label: "Content Creation",
    prompt: "Why creators run out of content ideas and how to fix it",
    icon: Camera,
  },
  {
    label: "Gaming",
    prompt: "The biggest mistake new gamers make when starting out",
    icon: Gamepad2,
  },
  {
    label: "Lifestyle",
    prompt: "Small daily habits that can make your life easier",
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
    setNiche(topic.prompt);

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
              Pick a topic or start with a full content idea
            </p>
          </div>

        </div>

      </div>

      <div className="quick-topics-grid">

        {visibleTopics.map(
          ({ label, prompt, icon: TopicIcon }) => (

            <button
              key={label}
              type="button"
              className="quick-topic-button"
              onClick={() =>
                handleTopicClick({
                  label,
                  prompt,
                })
              }
              title={prompt}
              aria-label={`Use example idea: ${prompt}`}
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
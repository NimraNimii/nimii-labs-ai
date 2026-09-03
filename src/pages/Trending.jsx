import React from "react";
import { useNavigate } from "react-router-dom";

export default function Trending() {
  const navigate = useNavigate();

  const trendingTopics = [
    { topic: "AI Agents", growth: "+320%", score: 97 },
    { topic: "Faceless YouTube", growth: "+280%", score: 95 },
    { topic: "Side Hustles", growth: "+240%", score: 92 },
    { topic: "Automation", growth: "+220%", score: 90 },
    { topic: "Productivity", growth: "+210%", score: 89 },
    { topic: "AI Business", growth: "+205%", score: 88 },
  ];

  const hooks = [
    "Nobody is talking about this...",
    "This changed everything...",
    "I wish I knew this sooner...",
    "The biggest mistake creators make...",
    "Stop scrolling if you...",
    "You are wasting hours doing this...",
  ];

  const opportunities = [
    {
      niche: "AI",
      opportunity: "AI Agents For Students",
      competition: "Low",
      demand: "High",
    },
    {
      niche: "Business",
      opportunity: "One-Person Startups",
      competition: "Low",
      demand: "High",
    },
    {
      niche: "YouTube",
      opportunity: "Faceless Automation Channels",
      competition: "Medium",
      demand: "High",
    },
  ];

  const youtubeNiches = [
    { niche: "Faceless YouTube", growth: "+280%" },
    { niche: "AI Tools", growth: "+240%" },
    { niche: "Productivity", growth: "+210%" },
    { niche: "Online Business", growth: "+190%" },
  ];

  const generateFromTrend = (topic) => {
    localStorage.setItem("selectedTopic", topic);
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#050014 0%,#090018 100%)",
        color: "white",
        padding: "50px 6%",
      }}
    >
      {/* HERO */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            marginBottom: "12px",
          }}
        >
          🔥 Trending Now
        </h1>

        <p
          style={{
            color: "#9b8bbf",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
          }}
        >
          Discover viral opportunities before everyone
          else. Find trending topics, viral hooks and
          content ideas ready to become your next
          winning script.
        </p>
      </div>

      {/* TRENDING TOPICS */}

      <h2 style={{ marginBottom: "20px" }}>
        📈 Trending Topics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {trendingTopics.map((item) => (
          <div
            key={item.topic}
            style={{
              background:
                "rgba(255,255,255,0.03)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "22px",
              padding: "24px",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3>{item.topic}</h3>

            <p style={{ color: "#c084fc" }}>
              🔥 {item.growth}
            </p>

            <p>
              Viral Score:{" "}
              <strong>{item.score}</strong>
            </p>

            <button
              onClick={() =>
                generateFromTrend(item.topic)
              }
              style={{
                width: "100%",
                marginTop: "14px",
                border: "none",
                cursor: "pointer",
                padding: "12px",
                borderRadius: "12px",
                background:
                  "linear-gradient(90deg,#8b5cf6,#c084fc)",
                color: "white",
                fontWeight: "700",
              }}
            >
              Generate Script →
            </button>
          </div>
        ))}
      </div>

      {/* VIRAL HOOKS */}

      <h2 style={{ marginBottom: "20px" }}>
        🪝 Viral Hooks
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {hooks.map((hook) => (
          <div
            key={hook}
            style={{
              background:
                "rgba(255,255,255,0.03)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                marginBottom: "16px",
              }}
            >
              {hook}
            </div>

            <button
              onClick={() =>
                navigator.clipboard.writeText(hook)
              }
              style={{
                border: "none",
                cursor: "pointer",
                padding: "10px 14px",
                borderRadius: "10px",
                background: "#8b5cf6",
                color: "white",
              }}
            >
              Copy Hook
            </button>
          </div>
        ))}
      </div>

      {/* CONTENT OPPORTUNITIES */}

      <h2 style={{ marginBottom: "20px" }}>
        🎯 Content Opportunities
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {opportunities.map((item) => (
          <div
            key={item.opportunity}
            style={{
              background:
                "rgba(255,255,255,0.03)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <h3>{item.opportunity}</h3>

            <p>Niche: {item.niche}</p>
            <p>
              Competition: {item.competition}
            </p>
            <p>Demand: {item.demand}</p>

            <button
              onClick={() =>
                generateFromTrend(
                  item.opportunity
                )
              }
              style={{
                width: "100%",
                marginTop: "14px",
                border: "none",
                cursor: "pointer",
                padding: "12px",
                borderRadius: "12px",
                background:
                  "linear-gradient(90deg,#8b5cf6,#c084fc)",
                color: "white",
                fontWeight: "700",
              }}
            >
              Generate Script →
            </button>
          </div>
        ))}
      </div>

      {/* YOUTUBE NICHES */}

      <h2 style={{ marginBottom: "20px" }}>
        📺 YouTube Niches
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {youtubeNiches.map((item) => (
          <div
            key={item.niche}
            style={{
              background:
                "rgba(255,255,255,0.03)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <h3>{item.niche}</h3>

            <p style={{ color: "#c084fc" }}>
              {item.growth}
            </p>

            <button
              onClick={() =>
                generateFromTrend(item.niche)
              }
              style={{
                width: "100%",
                marginTop: "14px",
                border: "none",
                cursor: "pointer",
                padding: "12px",
                borderRadius: "12px",
                background:
                  "linear-gradient(90deg,#8b5cf6,#c084fc)",
                color: "white",
                fontWeight: "700",
              }}
            >
              Generate Script →
            </button>
          </div>
        ))}
      </div>

      {/* TRENDING KEYWORDS */}

      <h2 style={{ marginBottom: "20px" }}>
        ⚡ Trending Keywords
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {[
          "AI Agents",
          "ChatGPT",
          "Automation",
          "Faceless YouTube",
          "Side Hustle",
          "Passive Income",
          "Productivity",
          "Creator Economy",
          "Online Business",
          "TikTok Growth",
        ].map((keyword) => (
          <button
            key={keyword}
            onClick={() =>
              generateFromTrend(keyword)
            }
            style={{
              cursor: "pointer",
              borderRadius: "999px",
              padding: "12px 18px",
              background:
                "rgba(168,85,247,.15)",
              color: "white",
              border:
                "1px solid rgba(168,85,247,.3)",
            }}
          >
            🔥 {keyword}
          </button>
        ))}
      </div>

      {/* CTA */}

      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "40px",
          borderRadius: "24px",
          background:
            "rgba(168,85,247,.08)",
          border:
            "1px solid rgba(168,85,247,.15)",
        }}
      >
        <h2>
          Ready to create your next viral video?
        </h2>

        <p
          style={{
            color: "#9b8bbf",
            marginBottom: "20px",
          }}
        >
          Turn trending ideas into high-performing
          scripts in seconds.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            border: "none",
            cursor: "pointer",
            padding: "16px 28px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#8b5cf6,#c084fc)",
            color: "white",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          🚀 Generate Viral Script
        </button>
      </div>
    </div>
  );
}
import React from "react";

const platforms = [
  "TikTok 15s",
  "TikTok 60s",
  "Shorts 60s",
];

export default function PlatformSelector({
  platform,
  setPlatform,
}) {
  return (
    <div className="platform-selector">
      {platforms.map((item) => (
        <button
          key={item}
          className={`platform-btn ${
            platform === item ? "active" : ""
          }`}
          onClick={() => setPlatform(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
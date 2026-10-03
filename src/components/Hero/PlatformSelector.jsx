import React from "react";
import { Music2, ChevronDown } from "lucide-react";

import "../../styles/PlatformSelector.css";

const platforms = [
  {
    label: "TikTok (60s)",
    value: "TikTok",
  },
  {
    label: "Instagram Reels",
    value: "Instagram Reels",
  },
  {
    label: "YouTube Shorts",
    value: "YouTube Shorts",
  },
  {
    label: "Facebook Reels",
    value: "Facebook Reels",
  },
];

export default function PlatformSelector({
  platform = "TikTok",
  setPlatform,
}) {
  const selectedPlatform =
    platforms.find((item) => item.value === platform) || platforms[0];

  return (
    <div className="platform-selector">

      <Music2
        size={18}
        className="platform-icon"
      />

      <select
        className="platform-select"
        value={selectedPlatform.value}
        onChange={(e) => {
          setPlatform(e.target.value);
        }}
      >
        {platforms.map((item) => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="platform-arrow"
      />

    </div>
  );
}
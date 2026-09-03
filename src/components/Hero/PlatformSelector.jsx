import React, { useState } from "react";
import { Music2, ChevronDown } from "lucide-react";

import "../../styles/PlatformSelector.css";

const platforms = [
  "TikTok (60s)",
  "Instagram Reels",
  "YouTube Shorts",
  "Facebook Reels",
];

export default function PlatformSelector() {
  const [platform, setPlatform] = useState(platforms[0]);

  return (
    <div className="platform-selector">

      <Music2
        size={18}
        className="platform-icon"
      />

      <select
        className="platform-select"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        {platforms.map((item) => (
          <option key={item}>
            {item}
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
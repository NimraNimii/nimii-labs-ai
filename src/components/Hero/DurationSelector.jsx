import React from "react";
import { Clock3, ChevronDown } from "lucide-react";

import "../../styles/DurationSelector.css";

const durations = [
  "15-30 seconds",
  "30-45 seconds",
  "45-60 seconds",
  "60-90 seconds",
];

export default function DurationSelector({
  duration = "45-60 seconds",
  setDuration,
}) {
  return (
    <div className="duration-selector">

      <Clock3
        size={18}
        className="duration-icon"
      />

      <select
        className="duration-select"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        {durations.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="duration-arrow"
      />

    </div>
  );
}
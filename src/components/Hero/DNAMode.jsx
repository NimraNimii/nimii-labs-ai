import React, { useState } from "react";
import { Brain, ChevronDown } from "lucide-react";

import "../../styles/DNAMode.css";

const dnaModes = [
  "Teach Hard",
  "Story Trap",
  "Entertainment",
  "Ghost Mode",
  "Authority",
  "Curiosity Loop",
];

export default function DNAMode() {
  const [mode, setMode] = useState(dnaModes[0]);

  return (
    <div className="dna-selector">

      <Brain
        size={18}
        className="dna-icon"
      />

      <select
        className="dna-select"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        {dnaModes.map((item) => (
          <option key={item}>
            {item}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="dna-arrow"
      />

    </div>
  );
}
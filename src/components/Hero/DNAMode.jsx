import React from "react";
import { Brain, ChevronDown } from "lucide-react";
import "../../styles/DNAMode.css";

const dnaModes = [
  { label: "Teach", value: "teach_hard" },
  { label: "Story", value: "story_trap" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Ghost Mode", value: "ghost_mode" },
  { label: "Authority", value: "authority" },
  { label: "Curiosity", value: "curiosity_loop" },
];

export default function DNAMode({
  dnaMode,
  setDnaMode,
}) {
  const currentMode = dnaMode?.primary || "teach_hard";

  return (
    <div className="dna-selector">
      <Brain
        size={18}
        className="dna-icon"
      />

      <select
        className="dna-select"
        value={currentMode}
        onChange={(e) => {
          const value = e.target.value;

          setDnaMode((prev) => ({
            ...prev,
            primary: value,
          }));
        }}
      >
        {dnaModes.map((item) => (
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
        className="dna-arrow"
      />
    </div>
  );
}
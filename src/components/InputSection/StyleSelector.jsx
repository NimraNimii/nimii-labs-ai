import React from "react";

export default function StyleSelector({
  styles = [],
  selectedStyle,
  setSelectedStyle,
}) {
  return (
    <div className="style-selector">
      {styles.map((style) => (
        <button
          key={style}
          type="button"
          className={`style-btn ${
            selectedStyle === style ? "active" : ""
          }`}
          onClick={() => setSelectedStyle(style)}
        >
          {style}
        </button>
      ))}
    </div>
  );
}
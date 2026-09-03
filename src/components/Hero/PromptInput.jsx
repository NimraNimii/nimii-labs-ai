import React from "react";

import "../../styles/PromptInput.css";

export default function PromptInput({
    niche = "",
    setNiche = () => {},
}) {

  
  return (
    <div className="prompt-wrapper">

     <textarea
  className="prompt-input"
  value={niche}
  onChange={(e) => setNiche(e.target.value)}
  maxLength={300}
  placeholder="Describe your video idea or niche..."
/>

      {!niche && (
   
<div className="prompt-placeholder">

    <h2 className="placeholder-title">
        Describe your viral video idea...
    </h2>

    <h4 className="examples-title">Examples:</h4>

    <ul className="example-list">

    <li className="example-item">
    <span>✦</span>
    <span>AI tools that save 10 hours a week</span>
</li>

      <li className="example-item">
    <span>✦</span>
    <span>How I made $1000 with YouTube Shorts</span>
</li>


    </ul>

</div>

      )}

      <div className="prompt-footer">

        <div className="prompt-tip">
          
          ✨ The more specific your idea, the better your script.
        </div>

        <div className="prompt-counter">
          {niche.length}/300
        </div>

      </div>

    </div>
  );
}
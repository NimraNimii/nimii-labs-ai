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

    <h2>
  Describe your content idea...
</h2>

    <h4 className="examples-title">Examples:</h4>

  <ul className="example-list">

  <li className="example-item">
    <span>✦</span>
    <span>3 AI tools that can help freelancers save hours every week</span>
  </li>

  <li className="example-item">
    <span>✦</span>
    <span>Why do most creators struggle to stay consistent?</span>
  </li>

  <li className="example-item">
    <span>✦</span>
    <span>How to start a side hustle with $100</span>
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
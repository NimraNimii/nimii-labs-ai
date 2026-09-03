import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

import "../../styles/GenerateButton.css";

export default function GenerateButton({
    onGenerate,
    isGenerating
}) {
    return (
   
<div className="dashboard-generate-button">
    <button
        className="generate-btn"
        onClick={onGenerate}
        disabled={isGenerating}
    >
        {isGenerating ? (
            <>Generating...</>
        ) : (
            <>
            Validate Idea
                <span>→</span>
            </>
        )}
    </button>
</div>



    );
}
  
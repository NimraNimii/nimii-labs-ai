import React from "react";

import "../../styles/hero.css";

import Header from "../Header/Header";
import PromptInput from "./PromptInput";
import PlatformSelector from "./PlatformSelector";
import DNAMode from "./DNAMode";
import GenerateButton from "./GenerateButton";
import QuickTopics from "./QuickTopics";
import HeaderStats from "../Header/HeaderStats";

function Hero({
  hook,
  script,
  cta,

   analysis,
scores,

  niche,
  setNiche,

  platform,
  setPlatform,

  dnaMode,
  setDnaMode,

  generateScript,
  generating,



  onCopy,
  onExport,
  onShare,

  totalScripts,
  averageScore,
  plan,

  onImprove,
  isGenerating,

  handleImproveScript,
}) {
  return (
    <section className="dashboard-hero">
      <div className="dashboard-hero-container">
        <div className="dashboard-hero-layout">

          {/* ================= LEFT ================= */}

          <main className="dashboard-hero-main">

            <Header />

            {/* PROMPT WORKSPACE */}

            <section className="prompt-workspace">

              <PromptInput
                niche={niche}
                setNiche={setNiche}
              />

              <div className="dashboard-hero-controls">

                <PlatformSelector
                  platform={platform}
                  setPlatform={setPlatform}
                />

                <DNAMode
                  dnaMode={dnaMode}
                  setDnaMode={setDnaMode}
                />

                <GenerateButton
                  niche={niche}
                  onGenerate={generateScript}
                  generating={generating}
                />

              </div>

            </section>

        {/* AI VALIDATION */}




          </main>

          {/* ================= RIGHT ================= */}

          <aside className="dashboard-hero-sidebar">

            <HeaderStats
              totalScripts={totalScripts}
              averageScore={averageScore}
              plan={plan}
            />

  

            <QuickTopics
              setNiche={setNiche}
            />

  

          </aside>

        </div>
      </div>
    </section>
  );
}

export default Hero;
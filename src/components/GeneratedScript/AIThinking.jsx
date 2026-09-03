import React, { useEffect, useState } from "react";
import "../../styles/AIThinking.css";
import {
  Sparkles,
  Flame,
  Clapperboard,
  Megaphone,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";





const steps = [
  {
    id: 1,
    title: "Understanding your topic",
  },
  {
    id: 2,
    title: "Finding viral competitors",
  },
  {
    id: 3,
    title: "Predicting Viral Score",
  },
  {
    id: 4,
    title: "Writing Hook",
  },
  {
    id: 5,
    title: "Writing Title",
  },
  {
    id: 6,
    title: "Writing Full Script",
  },
  {
    id: 7,
    title: "Generating CTA",
  },
];

export default function AIThinking({
  hook,
  script,
  cta,
}) {

  const hookReady = Boolean(hook);
  const scriptReady = Boolean(script);
  const ctaReady = Boolean(cta);

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((previousStep) => {
        if (previousStep < steps.length) {
          return previousStep + 1;
        }

        return previousStep;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const progress =
    (currentStep / steps.length) * 100;

  return (
    <section className="ai-thinking-card">

      <div className="thinking-header">

        <div className="thinking-icon">
          <Sparkles
            size={29}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <div>

        <h2 className="thinking-title">
  Building your next viral script
</h2>

<p className="thinking-subtitle">
  Researching your topic, optimizing for retention, and writing every section live. Watch your script take shape below.
</p>

        </div>

      </div>

      <div className="thinking-progress">

        <div className="thinking-progress-bar">

          <div
            className="thinking-progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>



<div className="thinking-preview">

  <div className="preview-block">
  
  <h4>
<span className="section-title">
    <Clapperboard size={18}/>
    HOOK
</span>

<span className={hookReady ? "status-done" : "status-working"}>
    {hookReady ? (
        <>
            <CheckCircle2 size={14}/>
            Done
        </>
    ) : (
        <>
            <LoaderCircle size={14} className="loader-spin" />
            Writing...
        </>
    )}
</span>
    
</h4>

    <p>
     {hookReady
    ? hook
    : "Writing hook..."}
    </p>
  </div>

  <div className="preview-block">
  
  <h4>
   <span className={scriptReady ? "status-done" : "status-working"}>
    {scriptReady ? (
        <>
            <CheckCircle2 size={14}/>
            Done
        </>
    ) : (
        <>
            <LoaderCircle
                size={14}
                className="loader-spin"
            />
            Writing...
        </>
    )}
</span>
  
</h4>

    <p>
      {scriptReady
    ? script
    : "Writing main script..."}
    </p>
  </div>

  <div className="preview-block">
 <h4>
   <span className={ctaReady ? "status-done" : "status-working"}>
    {ctaReady ? (
        <>
            <CheckCircle2 size={14}/>
            Done
        </>
    ) : (
        <>
            <LoaderCircle
                size={14}
                className="loader-spin"
            />
            Writing...
        </>
    )}
</span>
</h4>

    <p>
     {ctaReady
    ? cta
    : "Generating CTA..."}
    </p>
  </div>

</div>

      
       

    </section>
  );
}
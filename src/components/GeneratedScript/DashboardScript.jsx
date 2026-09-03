import "../../styles/GeneratedScript.css";

import AIThinking from "./AIThinking";
import GeneratedHeader from "./GeneratedHeader";
import GeneratedScriptBody from "./GeneratedScriptBody";

export default function GeneratedScript({
    hook,
    script,
    cta,
    analysis,
    onCopy,
    onExport,
    onShare,
    onRewrite,
    isGenerating,
    platform,
    dnaMode,
})

{


return (
    <section className="dashboard-script">

<GeneratedHeader
    onCopy={onCopy}
    onExport={onExport}
    onShare={onShare}
    platform={platform}
    dnaMode={dnaMode}
/>


        {isGenerating ? (
         <AIThinking
  hook={hook}
  script={script}
  cta={cta}
/>
        ) : (

<GeneratedScriptBody
    hook={hook}
    script={script}
    cta={cta}
    platform={platform}
    dnaMode={dnaMode}
/>

        )}

        <div className="dashboard-script-divider" />

    </section>
);

}
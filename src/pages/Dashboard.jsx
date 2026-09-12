import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/Hero/Hero";
import AnalysisLoader from "../components/Hero/AnalysisLoader";
import PerformanceSection from "../components/Performance/PerformanceSection";
import "../styles/hero.css";
import { toast } from "react-toastify";
import ValidationReport from "../components/Dashboard/ValidationReport";
import DashboardScript from "../components/GeneratedScript/DashboardScript";
import AIInsights from "../components/Dashboard/AIInsights";
import RewriteStudio from "../components/Dashboard/RewriteStudio";



export default function Dashboard() {

  const wait = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

 const [title, setTitle] = useState("");
const [hook, setHook] = useState("");
const [script, setScript] = useState("");
const [cta, setCta] = useState("");
const [hashtags, setHashtags] = useState([]);


const [rewritePreview, setRewritePreview] = useState(null);

  const [analysis, setAnalysis] = useState(null);
  const [scores, setScores] = useState(null);
const [thinking, setThinking] = useState(null);
  const [copied, setCopied] = useState(false);
const [hasGeneration, setHasGeneration] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


const handleCopy = async () => {
  const text = `🔥 HOOK

${hook || ""}

🎬 SCRIPT

${script || ""}

🚀 CTA

${cta || ""}`;

  try {
    await navigator.clipboard.writeText(text);

    toast.success("Script copied successfully!");

    console.log("COPY BUTTON WORKED");
  } catch (error) {
    console.error("Copy error:", error);
    toast.error("Failed to copy script.");
  }
};

      

  
  const [viralScore, setViralScore] = useState(0);

  const [displayScore, setDisplayScore] = useState(0);
  
  const [analysisStep, setAnalysisStep] = useState("");
  
  const [analysisStage, setAnalysisStage] = useState("");
const [isAnalyzing, setIsAnalyzing] = useState(false);

 const navigate = useNavigate();
  const location = useLocation();

  const grade =
    displayScore >= 90
      ? <span style={{ color: "#22c55e" }}>A+</span>
      : displayScore >= 80
        ? <span style={{ color: "#84cc16" }}>A</span>
        : displayScore >= 70
          ? <span style={{ color: "#facc15" }}>B</span>
        : <span style={{ color: "#ef4444" }}>C</span>


  const resultRef = useRef(null);


useEffect(() => {
  const savedTopic = localStorage.getItem("selectedTopic");

  if (savedTopic) {
    setNiche(savedTopic);

    // Prevent the old topic from appearing on every refresh
    localStorage.removeItem("selectedTopic");
  }
}, []);
  

  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("unfiltered");
  const [niche, setNiche] = useState("");


  const openSidebar = () => {
  setIsSidebarOpen(true);
};

const closeSidebar = () => {
  setIsSidebarOpen(false);
};


  useEffect(() => {
    if (!niche) {
    return;
}



    let score = 55;

    if (niche.length > 5) score += 5;
    if (niche.length > 10) score += 10;
    if (niche.length > 15) score += 10;

    const powerWords = [
      "ai",
      "money",
      "viral",
      "automation",
      "business",
      "secret",
      "growth",
      "productivity"
    ];

    powerWords.forEach(word => {
      if (niche.toLowerCase().includes(word)) {
        score += 3;
      }
    });

   

  }, [niche]);




useEffect(() => {

  if (!location.state?.script) return;

  const saved = location.state.script;

  setHook(saved.hook || "");
  setScript(saved.script || "");
  setCta(saved.cta || "");

  setAnalysis(saved.analysis || {});
  setScores(saved.scores || {});

  setHasGeneration(true);

  const overall =
    saved.scores?.overall ??
    saved.scores?.viralScore ??
    0;

  setViralScore(overall);
  setDisplayScore(overall);

}, [location.state]);

  const [generating, setGenerating] =
    useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [dnaMode, setDnaMode] = useState({
    primary: "teach_hard",
    secondary: null,
    intensity: 70,
  });

  const [platform, setPlatform] =
    useState("TikTok");

   


  const quickTopics = [
    "AI Agents",
    "Side Hustles",
    "Faceless YouTube",
    "Productivity",
    "Money Hacks",
    "Fitness",
  ];


const handleExport = () => {
  const text = `🔥 HOOK

${hook || ""}

🎬 SCRIPT

${script || ""}

🚀 CTA

${cta || ""}`;

  try {
    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "nimii-labs-script.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);

    toast.success("Script exported successfully!");

    console.log("EXPORT BUTTON WORKED");
  } catch (error) {
    console.error("Export error:", error);

    toast.error("Failed to export script.");
  }
};


const handleShare = async () => {
  try {
    const text = `🔥 HOOK

${hook}

🎬 SCRIPT

${script}

🚀 CTA

${cta}`;

    if (navigator.share) {
      await navigator.share({
        title: "Nimii Labs Generated Script",
        text: text,
      });
    } else {
      await navigator.clipboard.writeText(text);
      toast.success("Script copied! You can now share it.");
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error("Share error:", error);
      toast.error("Failed to share script.");
    }
  }
};



const handleNewScript = () => {
  setNiche("");
  setPlatform("TikTok");
  setDnaMode({
    primary:"teach_hard",
    secondary:null,
    intensity:70
});
};


const updateScores = (newScores) => {

    if (!newScores) return;

    setScores(newScores);

    const overall =
        newScores.overall ??
        newScores.viralScore ??
        0;

    setViralScore(overall);
    setDisplayScore(overall);
};


  const isMobile = screenWidth <= 768;
  const isTablet =
    screenWidth > 768 && screenWidth <= 1024;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };
  

 
  const generateScript = async () => {

     if (!niche.trim()) {

    setIsAnalyzing(true);
setAnalysisStep("✨ Analyzing Hook...");

 
    setIsAnalyzing(false);
    setGenerating(false);

    toast.warning(
      "Enter a niche... e.g. AI Agents"
    );
    return;
}

    try {
    setGenerating(true);

setAnalysisStage("Finding viral pattern...");

// Clear previous generation
setTitle("");
setHook("");
setScript("");
setCta("");
setHashtags([]);

// Clear previous analysis
setAnalysis(null);
setScores(null);
setThinking(null);
setViralScore(0);
     

setAnalysisStep("Understanding your topic");
await wait(700);

setAnalysisStep("Finding viral patterns");
await wait(700);

setAnalysisStep("Building hook strategy");
await wait(700);

setAnalysisStep("Generating script");
await wait(700);

setAnalysisStep("Comparing AI writers");
await wait(700);

setAnalysisStep("Calculating viral score");
await wait(700);

setAnalysisStep("Preparing rewrite suggestions");


const user = auth.currentUser;

if (!user) {
  toast.error("User not logged in");
  return;
}

const idToken = await user.getIdToken();

      const response = await fetch(
        "https://server-alpha-one-76.vercel.app/api/generate",
        {
          method: "POST",
        headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${idToken}`,
},

          body: JSON.stringify({
            niche,
       duration: platform,
            trends: "",
            dnaType: dnaMode?.primary.toUpperCase(),
            platform,
          }),
        }
      );

if (!response.ok) {
  throw new Error("Failed to generate script");
}



const responseJson = await response.json();

console.log("Response JSON:", responseJson);
console.log("Response Data:", responseJson.data);

console.log("Pipeline Response:", responseJson);

const result = responseJson.data || {};
console.log("RESULT.SCORES", result.scores);

console.log("Pipeline Result:", result);



// Save AI analysis first
setAnalysis(result.analysis || {});
setScores(result.scores || {});
setThinking(result.thinking || null);

// Save generated script

setTitle(result.title || "");
setHook(result.hook || "");
setScript(result.script || "");
setCta(result.cta || "");
setHashtags(
    Array.isArray(result.hashtags)
        ? result.hashtags
        : []
);

setHasGeneration(true);


const overall =
    result.scores?.overall ??
    result.scores?.viralScore ??
    viralScore;

if (result.scores) {

    setScores(result.scores);

    setViralScore(overall);
    setDisplayScore(overall);
}

// Loading complete
setAnalysisStage("🚀 Script Ready");
setIsAnalyzing(false);

// THEN animate score

setDisplayScore(0);

let currentScore = 0;

const counter = setInterval(() => {

    currentScore++;

    setDisplayScore(currentScore);

    if (currentScore >= overall) {
        clearInterval(counter);
    }

}, 20);




      setIsAnalyzing(false);


    setTimeout(() => {
    resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
},300);

      const savedScripts =
        JSON.parse(localStorage.getItem("myScripts")) || [];


        const newScript = {
  id: Date.now(),
  niche,
  script: `
🔥 HOOK

${result.hook || ""}

🎬 SCRIPT

${result.script || ""}

📣 CTA

${result.cta || ""}
`.trim(),
};



      savedScripts.unshift(newScript);

      localStorage.setItem(
        "myScripts",
   JSON.stringify(savedScripts)
      );

      // save to firestore
await addDoc(collection(db, "scripts"), {
  userId: user.uid,
  niche,
  hook: result.hook,
  script: result.script,
  cta: result.cta,
  analysis: result.analysis,
  scores: result.scores,
  createdAt: serverTimestamp(),
});


      toast.success("Script generated successfully!");

    } catch (error) {
      setIsAnalyzing(false);
      setAnalysisStep("Script Ready 🚀");


      setGenerating(false);
      console.error("❌ Error:", error);
      toast.error("Failed to generate script");

    }
    finally {
      setGenerating(false);
      setAnalysisStage("");
    }
  };

const handleImproveScript = async (rewriteType = "improve_hook") => {

  if (!hook && !script && !cta) {
    toast.warning("Generate a script first.");
    return;
  }

  try {
    setGenerating(true);
    setAnalysisStage("Improving script...");

const user = auth.currentUser;

if (!user) {
  toast.error("User not logged in");
  return;
}

const idToken = await user.getIdToken();

    const response = await fetch(
    "https://server-alpha-one-76.vercel.app/api/rewrite",
      {
        method: "POST",
       headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${idToken}`,
},

body: JSON.stringify({
    script: {
        title,
        hook,
        script,
        cta,
        hashtags,
    },
    analysis,
   rewriteType: rewriteType || "improve_hook",
}),



      }
    );

    if (!response.ok) {
      throw new Error("Failed to rewrite script");
    }

    const responseJson = await response.json();
    const result = responseJson.data || {};


    console.log("FULL RESPONSE");
console.dir(responseJson, { depth: null });

console.log("RESULT");
console.dir(result, { depth: null });

console.log("HOOK");
console.log(result.hook);

console.log("SCRIPT");
console.log(result.script);

console.log("CTA");
console.log(result.cta);

    console.log("RESULT ANALYSIS");
console.dir(result.analysis, { depth: null });

console.log("RESULT SCORES");
console.dir(result.scores, { depth: null });


setRewritePreview({
  rewriteType,

  original: {
    hook,
    script,
    cta,
  },

  improved: {
    hook: result.hook || hook,
    script: result.script || script,
    cta: result.cta || cta,
  },

  analysis: result.analysis,
  scores: result.scores,

  reason: result.reason,   // <-- ADD THIS
});


console.log("REWRITE PREVIEW");
console.dir({
    rewriteType,
    original: {
        hook,
        script,
        cta,
    },
    improved: {
        hook: result.hook,
        script: result.script,
        cta: result.cta,
    },
}, { depth: null });






updateScores(result.scores);

    if (result.analysis) {
      setAnalysis(result.analysis);

    }

    toast.success("Script improved successfully!");

  } catch (error) {
    console.error("Rewrite Error:", error);
    toast.error("Failed to improve script.");
  } finally {
    setGenerating(false);
    setAnalysisStage("");
  }
};

const applyRewrite = (selected) => {
  if (!rewritePreview?.improved) return;

  const improved = rewritePreview.improved;

  // Apply ONLY the section the user selected
  switch (selected) {
    case "improve_hook":
      if (improved.hook) {
        setHook(improved.hook);
      }
      break;

    case "improve_retention":
    case "improve_curiosity":
    case "improve_emotion":
    case "improve_platform":
      if (improved.script) {
        setScript(improved.script);
      }
      break;

    case "improve_cta":
      if (improved.cta) {
        setCta(improved.cta);
      }
      break;

    default:
      break;
  }

  // Update AI analysis if returned
  if (rewritePreview.analysis) {
    setAnalysis(rewritePreview.analysis);
  }

  // Update scores if returned
  if (rewritePreview.scores) {
    updateScores(rewritePreview.scores);
  }

  // Close preview
  setRewritePreview(null);

  toast.success("Rewrite applied successfully!");
};


 return (
  <div className="dashboard-page">

    <Sidebar
      handleLogout={handleLogout}
      isOpen={isSidebarOpen}
      onOpen={openSidebar}
      onClose={closeSidebar}
    />

    <main className="dashboard-main">

      <Hero
        hook={hook}
        script={script}
        cta={cta}
    
    analysis={analysis}

scores={scores}

        niche={niche}
        setNiche={setNiche}

        platform={platform}
        setPlatform={setPlatform}

        dnaMode={dnaMode}
        setDnaMode={setDnaMode}

        generateScript={generateScript}
        generating={generating}
        isAnalyzing={isAnalyzing}

        onCopy={handleCopy}
        onExport={handleExport}
        onShare={handleShare}

        onNewScript={handleNewScript}

        onImprove={handleImproveScript}
        isGenerating={generating}

        handleImproveScript={handleImproveScript}

        
      />


       <DashboardScript
        hook={hook}
        script={script}
        cta={cta}
        analysis={analysis}
        isGenerating={generating}
        analysisStep={analysisStep}
        hasGeneration={hasGeneration}
        onCopy={handleCopy}
        onExport={handleExport}
        onShare={handleShare}
        platform={platform}
dnaMode={dnaMode}
    />

<>
   

    {hasGeneration && (
        <>
            <ValidationReport
                scores={scores}
                overallScore={scores?.viralScore}
            />

            <AIInsights
                analysis={analysis}
            />

<RewriteStudio
  analysis={analysis}
  hook={hook}
  script={script}
  cta={cta}
  rewritePreview={rewritePreview}
  viralScore={scores?.viralScore}

  onImprove={handleImproveScript}
  onApply={applyRewrite}
  onReject={() => setRewritePreview(null)}
  onClearPreview={() => setRewritePreview(null)}
/>

        </>
    )}
</>

    </main>

  </div>
);

}


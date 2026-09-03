import {
  FaTiktok,
  FaInstagram,
  FaYoutube,

} from "react-icons/fa";
import {
  Heart,
  MessageCircle,
  Share,
  Music2,
  Home,
  Search,
  PlusSquare,
  User
} from "lucide-react";
import {
  SiYoutubeshorts
} from "react-icons/si";


import {
    HiOutlineWifi,
    HiSignal,
    HiBattery100
} from "react-icons/hi2";



import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/navbar";

import FaqSection from "../components/FaqSection";
import { HiMenuAlt3 } from "react-icons/hi";
import TransformationSection
  from "../components/TransformationSection";
import WhyNimiiSection from "../components/WhyNimiiSection";
import ResultsSection from "../components/ResultsSection";
import MetricsStripSection from "../components/MetricsStripSection";
import ComparisonSection from "../components/ComparisonSection";
import CtaSection from "../components/CtaSection";

import "../styles/outcomePreview.css";
import "../styles/howworks-page.css";
import HowItworksSection from "../components/HowItworksSection";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import "../App.css";
import {
  Zap,
  Users,
  TrendingUp
} from "lucide-react";


import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Pricing from "./pricing";
import Footer from "../components/footer";
import "../styles/landing-hero.css";




export default function Landing() {
  const [user, setUser] = useState(null);
  const [topic, setTopic] = useState("");
  const [generatedScript, setGeneratedScript] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const rotatingWords = [
    "Trending",
    "Growing",
    "Winning"
  ];


  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) =>
        (prev + 1) % rotatingWords.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);




  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState("");

  const handleGenerate = async () => {
    if (!niche.trim()) return;

    setLoading(true);

    const fakeScripts = [
      `HOOK: Nobody talks about this in ${niche}...

PROBLEM: Most creators fail because they ignore psychology.

VALUE: Here are 3 viral techniques that instantly improve retention.

CTA: Follow for more creator psychology.`,

      `HOOK: The hidden truth about ${niche} 😳

PROBLEM: People waste months doing this wrong.

VALUE: Here’s what top creators actually do.

CTA: Save this before it disappears.`,
    ];

    setTimeout(() => {
      const randomScript =
        fakeScripts[
        Math.floor(Math.random() * fakeScripts.length)
        ];
      setScript(randomScript);

      setTimeout(() => {
        document
          .getElementById("script-preview")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 400);


      setLoading(false);
    }, 3000);
  };



  const [headerCopied, setHeaderCopied] = useState(false);
  const [scriptCopied, setScriptCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const [platformLength, setPlatformLength] =
    useState("TikTok 60s");
  const [cta, setCta] = useState("");
  const [thinkingText, setThinkingText] = useState(
    "Analyzing viral patterns..."
  );

  const [niche, setNiche] = useState("");
  const [viralScore, setViralScore] = useState(94);
  const [streamedText, setStreamedText] = useState("");


  const [phoneHook, setPhoneHook] = useState(
    "POV: You're making this coffee mistake every morning..."
  );
  const [phoneImage, setPhoneImage] = useState(null);

  const scriptRef = useRef(null);

  const rotatingPrompts = [
    "Why Gen Z skips your videos in 2 seconds",
    "How gyms manipulate motivation",
    "This productivity trick is ruining your focus",
    "Why nobody finishes your content",
    "The dark psychology behind TikTok addiction",
    "How creators secretly farm attention",
  ];

  const [placeholder, setPlaceholder] = useState(
    rotatingPrompts[0]
  );

  const [typedPlaceholder, setTypedPlaceholder] =
    useState("");

  const placeholders = [
    "Why coffee beats sleep ☕⚡",
    "How gyms manipulate motivation 💪",
    "Why Gen Z hates meetings",
    "What should we make viral?",
    "The psychology behind viral hooks 🔥",
  ];

  const [placeholderIndex, setPlaceholderIndex] =
    useState(0);

  const handleHeaderCopy = async () => {
    await navigator.clipboard.writeText(script);
    setHeaderCopied(true);
    setTimeout(() => {
      setHeaderCopied(false);
    }, 2000);
  };


  const handleScriptCopy = async () => {
    await navigator.clipboard.writeText(script);
    setScriptCopied(true);
    setTimeout(() => {
      setScriptCopied(false);
    }, 2000);
  };



  console.log("SAVE CLICKED");
  console.log(script);
  console.log(streamedText);


  const handleSave = () => {
    const textToSave = script || streamedText;

    if (!textToSave?.trim()) {
      toast.error("No script to save");
      return;
    }

    const blob = new Blob([textToSave], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "viral-script.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);

    toast.success("Script saved!");
  };


  // rotating placeholder
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % rotatingPrompts.length;
      setPlaceholder(rotatingPrompts[index]);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  // typing animation
  useEffect(() => {
    let current =
      placeholders[placeholderIndex];

    let i = 0;

    setTypedPlaceholder("");

    const typing = setInterval(() => {
      setTypedPlaceholder(
        current.slice(0, i)
      );

      i++;

      if (i > current.length) {
        clearInterval(typing);

        setTimeout(() => {
          setPlaceholderIndex((prev) =>
            prev === placeholders.length - 1
              ? 0
              : prev + 1
          );
        }, 1500);
      }
    }, 60);



    return () => clearInterval(typing);
  }, [placeholderIndex]);

  // feature card glow
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".feature-card"
    );

    cards.forEach((card) => {
      card.addEventListener(
        "mousemove",
        (e) => {
          const rect =
            card.getBoundingClientRect();

          const x =
            e.clientX - rect.left;
          const y =
            e.clientY - rect.top;

          card.style.setProperty(
            "--x",
            `${x}px`
          );
          card.style.setProperty(
            "--y",
            `${y}px`
          );
        }
      );
    });
  }, []);

  // mouse glow
  useEffect(() => {
    const moveGlow = (e) => {
      const glow = document.querySelector(
        ".mouse-glow"
      );

      if (!glow) return;

      glow.style.left =
        `${e.clientX}px`;

      glow.style.top =
        `${e.clientY}px`;
    };

    window.addEventListener(
      "mousemove",
      moveGlow
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveGlow
      );
    };
  }, []);

  return (
    <div className="landing-page app">
      <div className="mouse-glow" />

      <div className="particles">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />

      <Navbar user={user} />

      <div className="beta-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
      </div>

      <section id="generator" className="landing-hero">
        <div className="hero-layout">

          {/* LEFT */}
          <div className="hero-left">

            <div className="hero-badge">
              <span>⚡</span>
              <p>  AI Viral Score for Short-Form Content </p>
            </div>

            <h1 className="hero-title">
              Know if your video
              <br />
              will land —
              <br />
              <span>before you post.</span>
            </h1>

            <p className="hero-subtitle">
              Paste your idea. Get a Viral Score in seconds.
              Know if it's worth filming before you hit record.
            </p>


            <div className="hero-cta-row">


              <button
                className="hero-primary-btn"
                onClick={() => {
                  const token = localStorage.getItem("token");

                  if (token) {
                    navigate("/dashboard");
                  } else {
                    navigate("/signup");
                  }
                }}
              >
                Get My Viral Score →
              </button>
            </div>


            <div className="hero-trust-signals">
              <div className="trust-item">
                <span>✓</span>
                <p>No credit card required</p>
              </div>

              <div className="trust-item">
                <span>✓</span>
                <p>Free plan available</p>
              </div>

             <div className="trust-item">
  <span>✓</span>
  <p>Built for short-form creators</p>
</div>


            </div>



            <div className="hero-platforms">
              <span className="works-label"> Optimized for </span>

            <div className="platform-item tiktok">
    <FaTiktok />
    <span>TikTok</span>
</div>

<div className="platform-divider"></div>

<div className="platform-item instagram">
    <FaInstagram />
    <span>Reels</span>
</div>

<div className="platform-divider"></div>

<div className="platform-item youtube">
    <FaYoutube />
    <span>Shorts</span>
</div>
            </div>



          </div>
          {/* RIGHT */}
          <div className="hero-right">

            {/* floating card */}
          

    <div className="phone-wrapper">

        <div className="generated-badge">
            <span>⚡</span>

            <div>
                <p>Score Ready</p>
                <strong>12 sec ⚡</strong>
            </div>
        </div>

        <div className="phone-frame">

                <div className="phone-screen">





                  {/* status bar */}
                  <div className="phone-status">
                    <span>9:41</span>

                  
      
<div className="status-icons">

    <HiSignal />

    <HiOutlineWifi />

    <HiBattery100 />

</div>


                  </div>
                  

                  {/* notch */}
                  <div className="phone-notch"></div>

                  {/* nav */}

                 <div className="phone-header">

    <div className="phone-logo">

        <div className="phone-logo-icon">N</div>

        <span>Nimii Labs</span>

    </div>

<button className="phone-menu">
    <HiMenuAlt3 />
</button>
                   
                  </div>

                  <h4 className="score-title">
                    Your Viral Score
                  </h4>

                  {/* ring */}
                  <div className="score-ring-wrap">
                    <div className="score-ring">
                      <div className="score-inner">
                        <h2>91</h2>
                        <span>/100</span>
                      </div>
                    </div>


                  </div>

                  <p className="viral-text">
                    Great viral potential 🔥
                  </p>

                  {/* metrics */}
                  <div className="phone-metrics">

                    {[
                      ["Hook Strength", 91],
                      ["Retention", 78],
                      ["Curiosity Gap", 84],
                      ["Story Structure", 81],
                    ].map(([label, score]) => (
                      <div
                        className="metric-row"
                        key={label}
                      >
                        <div className="metric-top">
                          <span>{label}</span>
                          <span>{score}/100</span>
                        </div>

                        <div className="metric-bar">
                          <div
                            className="metric-fill"
                            style={{
                              width: `${score}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
        
      </section>








      <TransformationSection />
      <HowItworksSection />
      <WhyNimiiSection />
      

      <ComparisonSection />



      <ResultsSection />

      <Pricing />


      <CtaSection />
      <FaqSection />






    </div>
  );
}






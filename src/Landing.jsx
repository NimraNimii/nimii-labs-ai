import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaTwitter
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


import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import "./App.css";
import {
  Zap,
  Users,
  TrendingUp
} from "lucide-react";


import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Landing() {
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState("");
  const [copied, setCopied] = useState(false);


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
    "Why GenZ hates meetings 🤯",
    "How TikTok destroys attention spans 📱",
    "The psychology behind viral hooks 🔥",
  ];

  const [placeholderIndex, setPlaceholderIndex] =
    useState(0);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(script);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleGenerate = async () => {
    console.log("Generate clicked");

    if (!niche.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5001/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ niche }),
        }
      );

      const data = await res.json();

     const hookMatch = data.result.match(
  /Hook:\s*(.*)/i
);

if (hookMatch) {
  setPhoneHook(hookMatch[1]);
} else {
  setPhoneHook(data.result.split("\n")[0]);
}

if (hookMatch) {
  setPhoneHook(hookMatch[1]);
} else {
  setPhoneHook(data.result.split("\n")[0]);
}

// CTA logic OUTSIDE
const ctaText = data.result.includes("CTA:")
  ? data.result.split("CTA:")[1]
  : "Follow for more tips!";

setCta(ctaText);

    setCta(ctaText);
setScript(data.result); // ✅ keep only this
console.log(data.result);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      scriptRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
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
    <div className="app">
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

      <header className="navbar">


<div className="brand">
  <div className="brand-icon">
    <div className="orbit orbit-left"></div>
    <div className="orbit orbit-right"></div>
  </div>

  <div className="brand-wordmark">
    <span className="brand-name">Nimii</span>
    <span className="brand-labs">Labs</span>
  </div>
</div>


        <span className="beta-badge">BETA</span>

        <nav className="nav-center">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        <div className="nav-right">
          <button className="signin-btn">Sign In</button>
          <button className="cta-nav-btn">Get Started Free</button>
        </div>
      </header>

      <div className="beta-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
      </div>

      <div className="hero-aurora" />
      <section className="hero">

        <div className="hero-badge">
  <span className="live-dot"></span>

  <span className="hero-badge-text">
    12,482+ scripts generated today
  </span>
</div>


        <h1 className="hero-title">
  Stop Guessing.
  <br />

  Start{" "}
  <span className="rotating-word-wrap">
    <span className="rotating-word">
      Trending.
    </span>

    <span className="rotating-word">
      Viral.
    </span>

    <span className="rotating-word">
      Converting.
    </span>

    <span className="rotating-word">
      Blowing Up.
    </span>
  </span>
</h1>


        <p className="hero-subtitle">
          AI-engineered hooks, viral psychology,
          and creator-ready scripts for TikTok,
          Reels & Shorts.
        </p>

        <div className="input-container">
          <input
            type="text"
            placeholder={`✨ ${typedPlaceholder}`}
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
          />
          <button
            className={`generate-btn ${loading ? "loading" : ""}`}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner" />
                Generating...
              </>
            ) : (
              "⚡ Generate Script"
            )}
          </button>
        </div>

        <div className="hero-input-glow" />
        <div className="creator-workspace">
        <div className="workspace-divider"></div>


{/*============= TONE & STYLE ==================*/}

<div className="controls-row">
        <div className="tone-style-section">
  <h3 className="section-title">
    🎭 TONE / STYLE
  </h3>

  <div className="tone-buttons">

    <button className="tone-btn active">
      🔥 Unfiltered
    </button>

    <button className="tone-btn">
      🎓 Educational
    </button>

    <button className="tone-btn">
      😂 Entertaining
    </button>

    <button className="tone-btn">
      💭 Storytelling
    </button>

    <button className="tone-btn">
      💜 Soft/Aesthetic
    </button>

    <button className="tone-btn">
      ✈️ Travel
    </button>
</div>
  </div>

{/* ======== PLATFORM & LENGTH ======== */}

<div className="platform-card">
  <h3 className="platform-title">
    📱 PLATFORM & LENGTH
  </h3>

  <div className="platform-row">
    {[
      "TikTok 15s",
      "TikTok 60s",
      "Reels 30s",
      "Shorts 60s",
    ].map((platform) => (
      <button
        key={platform}
        className={`platform-btn ${
          platformLength === platform ? "active-platform" : ""
        }`}
        onClick={() => setPlatformLength(platform)}
      >
        {platform}
      </button>
    ))}
  </div>
</div>
</div>




<div className="workspace-divider"></div>
{/*======= LIVE TRENDING ============*/}

        <div className="trending-live">
          <div className="live-badge">
            <span className="live-dot" />
            LIVE TRENDING
          </div>
<div className="trending-row">

  <button className="trend-arrow">
    ‹
  </button>

  {[
    "🔥 Gym",
    "💸 Side Hustle",
    "🤖 AI Tools",
    "🍳 Cooking",
    "🎓 Education",
    "💄 Beauty",
    "📖 Storytime",
    "✈️ Travel",
  ].map((topic) => (
    <button
      key={topic}
      className="alive-pill"
      onClick={() => setNiche(topic)}
    >
      {topic}
    </button>
  ))}

  <button className="trend-arrow">
    ›
  </button>

</div> 
    </div>   
</div>

</section>


{/* ================= PREVIEW SECTION ================= */}

<section className="viral-preview-section">

  <div className="viral-preview-layout">

    {/* LEFT PREVIEW  PLACEHOLDER */}
    
<div className="preview-left-placeholder">

  {/* HEADER */}
  <div className="generated-script-header">

    <div className="generated-script-title">
      <span className="script-star">✨</span>
      <h2>Your Generated Script</h2>
    </div>

    <div className="generated-header-buttons">
      <button className="header-action-btn">
        📋 Copy All
      </button>

      <button className="header-action-btn">
        💾 Save
      </button>
    </div>

  </div>


  {/* SCRIPT CARD */}
  <div className="generated-script-card">

    <div className="generated-card-top">

      <div className="generated-script-left">
        🧠 Generated Script
      </div>

      <button className="copy-script-btn">
        📋 Copy
      </button>

    </div>

    <div className="viral-script-preview">

      <h3>🔥 Viral Script Preview</h3>

      <p>
        AI-generated viral content script will appear here.
      </p>

      <div className="script-checks">
        <span>✅ Hook Optimization</span>
        <span>✅ High Retention Script</span>
        <span>✅ Strong CTA</span>
        <span>✅ Viral Psychology</span>
      </div>

    </div>


    {/* HOOK CARDS */}
    <div className="hook-cards-row">

      <div className="hook-card">
        <span>✓</span>
        <h4>
          POV: You're wasting
          hours studying the
          wrong way...
        </h4>
      </div>

      <div className="hook-card">
        <h4>
          Stop following travel
          hacks that waste your
          money...
        </h4>
      </div>

      <div className="hook-card">
        <h4>
          3 mistakes students
          make before every
          exam...
        </h4>
      </div>

      <div className="quick-fix-card">
        <span>💡 Quick Fix</span>

        <p>
          Add a stronger
          emotional trigger in
          the opening.
        </p>
      </div>

    </div>

  </div>

</div>



    {/* RIGHT COLUMN */}
    <div className="preview-right-column">

      {/* VIRAL SCORE CARD */}
      <div className="viral-score-card">

        <div className="viral-score-header">
          <h3>VIRAL SCORE</h3>
          <span>ⓘ</span>
        </div>

        <div className="score-circle-wrapper">
          <div className="score-circle">
            <h1>94</h1>
            <span>/100</span>
          </div>
        </div>

        <p className="top-score-text">
          🚀 Top 8% of all scripts
        </p>

        <div className="score-list">

          <div className="score-item">
            <span>⚡ Hook Strength</span>

            <div className="score-bar-wrap">
              <div
                className="score-bar"
                style={{ width: "96%" }}
              />
            </div>

            <p>96/100</p>
          </div>

          <div className="score-item">
            <span>💚 Retention Chance</span>

            <div className="score-bar-wrap">
              <div
                className="score-bar"
                style={{ width: "89%" }}
              />
            </div>

            <p>89/100</p>
          </div>

          <div className="score-item">
            <span>🧠 Curiosity Gap</span>

            <div className="score-bar-wrap">
              <div
                className="score-bar"
                style={{ width: "92%" }}
              />
            </div>

            <p>92/100</p>
          </div>

          <div className="score-item">
            <span>🎯 CTA Quality</span>

            <div className="score-bar-wrap">
              <div
                className="score-bar"
                style={{ width: "81%" }}
              />
            </div>

            <p>81/100</p>
          </div>

        </div>
      </div>

      {/* WHY CARD */}
      <div className="why-card">

        <div className="why-header">
          <span>🛡️</span>
          <h3>WHY THIS WORKS</h3>
        </div>

        <p>
          Fear + curiosity gap grabs attention in
          the first second and keeps viewers
          watching till the end. The CTA drives
          engagement and follows.
        </p>

      </div>

     {/* PHONE PREVIEW */}
<div className="phone-preview-card">

  <div className="phone-header">
    <h3>PREVIEW ON TIKTOK</h3>
    <span>ⓘ</span>
  </div>

  <div className="iphone-frame">

    <img
      className="phone-preview-image"
      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200"
      alt="preview"
    />

    <div className="phone-dark-overlay"></div>

    {/* Top tabs */}
    <div className="phone-topbar">
      <span>Following</span>
      <span className="active-tab">For You</span>
    </div>

    {/* AI Badge */}
    <div className="ai-preview-badge">
       ⚡ Generated by Nimii AI
    </div>

    {/* Hook Text */}
    <div className="phone-hook">
    <h2>
  These AI
  <br />
  hooks helped
  <br />
  creators hit
  <br />
  <span>1M+ views</span>
</h2>
    </div>

    {/* Creator */}
    <div className="phone-creator">
      <strong>@nimii.labs</strong>
      <span> ✓</span>
    </div>

    {/* Actions */}
    <div className="phone-actions">

      <div className="phone-action">
        ❤️
        <span>12.4K</span>
      </div>

      <div className="phone-action">
        💬
        <span>2.4K</span>
      </div>

      <div className="phone-action">
        ↗
        <span>3.8K</span>
      </div>

    </div>

    {/* Caption */}
    <div className="phone-caption">
     <p>
  Use AI hooks that make people stop scrolling ⚡
</p>

<p>
  #viralhooks #contentcreator #aitools #growth
</p>
    </div>

  </div>
</div>




        
        </div>
        </div>
</section>


{/* ================= PREMIUM SOCIAL PROOF ================= */}

<div className="premium-social-wrapper">

  {/* CENTER HEADING */}
  <div className="premium-social-heading">

    <div className="trusted-badge">
      ✨ TRUSTED BY TOP CREATORS
    </div>

    <h2>
      Loved by creators
      <span> around the world</span>
    </h2>

  </div>

  {/* SINGLE PREMIUM ROW */}
  <div className="premium-social-row">

   

    <div className="social-divider"></div>

    {/* STAT 1 */}
    <div className="social-stat">

      <div className="stat-icon purple">
        👥
      </div>

      <div>
        <h4>12,547+</h4>
        <p>Scripts generated in the last 24 hours</p>
      </div>

    </div>

    <div className="social-divider"></div>

    {/* STAT 2 */}
    <div className="social-stat">

      <div className="stat-icon green">
        ▶
      </div>

      <div>
        <h4>8.2M+</h4>
        <p>Views generated by our community</p>
      </div>

    </div>

    <div className="social-divider"></div>

    {/* STAT 3 */}
    <div className="social-stat">

      <div className="stat-icon pink">
        ❤️
      </div>

      <div>
        <h4>1,450+</h4>
        <p>Creators joined this week</p>
      </div>

    </div>

    <div className="social-divider"></div>

    {/* CREATOR CARD */}
    <div className="creator-proof">

      <div className="creator-stack">

        <img
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt=""
        />

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt=""
        />

        <img
          src="https://randomuser.me/api/portraits/men/52.jpg"
          alt=""
        />

        <img
          src="https://randomuser.me/api/portraits/women/63.jpg"
          alt=""
        />

        <div className="creator-bubble">
          +1.2K
        </div>

      </div>

      <p>
        Join thousands of creators
        building their audience.
      </p>

    </div>

  </div>


{/* ===== PRICING SECTION ===== */}

<section className="pricing-section">

  <div className="pricing-grid">

    {/* FREE */}
    <div className="pricing-card">
      <h3>FREE</h3>

      <div className="price">
        $0<span>/month</span>
      </div>

      <ul>
        <li>✓ 3 scripts/day</li>
        <li>✓ All niches</li>
        <li>✓ Basic hook system</li>
        <li>✓ Watermarked output</li>
      </ul>

      <button className="pricing-btn secondary">
        Current Plan
      </button>
    </div>

    {/* STARTER */}
    <div className="pricing-card popular-card">

      <div className="popular-badge">
        MOST POPULAR
      </div>

      <h3>STARTER</h3>

      <div className="price">
        $12<span>/month</span>
      </div>

      <ul>
        <li>✓ Unlimited scripts</li>
        <li>✓ Better hooks</li>
        <li>✓ Viral optimization</li>
        <li>✓ Script history</li>
        <li>✓ Priority generation</li>
      </ul>

      <button className="pricing-btn primary">
        Upgrade to Starter
      </button>
    </div>

    {/* CREATOR */}
    <div className="pricing-card">
      <h3>CREATOR</h3>

      <div className="price">
        $29<span>/month</span>
      </div>

      <ul>
        <li>✓ Everything in Starter</li>
        <li>✓ Bulk generation</li>
        <li>✓ Brand voice</li>
        <li>✓ Export PDF</li>
        <li>✓ Early access features</li>
      </ul>

      <button className="pricing-btn primary">
        Go Creator
      </button>
    </div>

    {/* TRUST PANEL */}
   <div className="pricing-card secure-card">

  <div className="secure-card-header">
    <span>🔒</span>
    <h3>Secure & Risk-Free</h3>
  </div>

  <p className="secure-card-description">
    Create confidently with protected payments,
    flexible billing, and zero long-term commitment.
  </p>
   
  <div className="trust-feature">
    <div className="secure-icon">
      </div>

    <div>
      <h4>Cancel anytime</h4>
      <p>No contracts. Cancel whenever you want.</p>
    </div>
  </div>

  <div className="trust-feature">
    <div className="trust-icon">♡</div>

    <div>
      <h4>7-day money back</h4>
      <p>Get a full refund within 7 days.</p>
    </div>
  </div>

</div> {/* trust-side-card */}

</div> {/* pricing-grid */}

</section>
  

           {/*========= FEATURES SECTION ========== */}
      <motion.section
        className="features-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="features-header">
          <p className="section-tag">
            WHY CREATORS USE <span>NIMII LABS</span>
          </p>
          <h2 className="features-title">Built For Viral Retention</h2>
          <p className="features-subtitle">
            Everything is optimized to maximize hooks, watch-time, and
            engagement.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass magnetic-card">
            <h3>⚡ Hook Engineering</h3>
            <p>Built to maximize retention in the first 3 seconds.</p>
          </div>
          <div className="feature-card glass magnetic-card">
            <h3>🧠 Viral Psychology</h3>
            <p>Scripts designed around curiosity gaps and dopamine loops.</p>
          </div>
          <div className="feature-card glass magnetic-card">
            <h3>🚀 CTA Optimization</h3>
            <p>Every script ends with high-retention calls to action.</p>
          </div>
        </div>
      </motion.section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Nimii Labs</h4>
            <p>Made for the next generation of creators ⚡</p>
            <p className="footer-tagline">
              Ping us faster than your TikTok scroll
            </p>
            <div className="footer-socials">
              <span className="icon tiktok">
                <FaTiktok />
              </span>
              <span className="icon instagram">
                <FaInstagram />
              </span>
              <span className="icon youtube">
                <FaYoutube />
              </span>
              <span className="icon twitter">
                <FaTwitter />
              </span>
            </div>
          </div>

          <div>
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>API</p>
          </div>

          <div>
            <h4>Resources</h4>
            <p>Docs</p>
            <p>FAQ</p>
            <p>Support</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact</p>
          </div>
        </div>

        <p className="footer-bottom">
          We don’t sell your data • Built for creators 💀
        </p>
        
      </footer>
    </div>
  </div>

  );
  }

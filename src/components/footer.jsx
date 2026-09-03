import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-glow"></div>


       {/* Watermark */}
  <div className="footer-watermark">
    KNOW FIRST
  </div>


      {/* CTA SECTION */}
      <div className="footer-cta">

        <span className="footer-cta-label">
          READY TO CREATE WITH CONFIDENCE?
        </span>

        <h2>
          Know before you record.
        </h2>

        <p>
          Validate ideas in seconds and stop wasting
          hours on content that won't perform.
        </p>

        <Link
          to="/signup"
          className="footer-cta-button"
        >
          Start Free →
        </Link>

        <p className="footer-trust">
  No credit card required • Free validation included
</p>

<p className="footer-platforms">
  Built for TikTok • Reels • Shorts
</p>

      </div>





      {/* MAIN FOOTER */}
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <div className="footer-logo-row">

            <div className="footer-logo-box">
              <div className="footer-logo-n">N</div>
              <div className="footer-logo-dot"></div>
            </div>

            <div className="footer-brand-text">
              <h2>Nimii Labs</h2>

              ⚡ Validate Before You Create

            </div>

          </div>

          <p className="footer-tagline">
           Most creators learn after they publish.
Nimii helps you know before you record.
          </p>

          <div className="footer-stat-row">

            <div className="footer-stat">
              <strong>12s</strong>
              <span>Validation</span>
            </div>

            <div className="footer-stat">
              <strong>91%</strong>
              <span>Confidence</span>
            </div>

            <div className="footer-stat">
              <strong>724h</strong>
              <span>Saved / Year</span>
            </div>

          </div>

Trusted by creators building short-form content daily.


        </div>

        


        {/* PRODUCT */}
        <div className="footer-links">
          <h4>Product</h4>

          <a href="#how-it-works">How It Works</a>
          <Link to="/pricing">Pricing</Link>
          <a href="#faq">FAQ</a>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>

          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>

        {/* CREATORS */}
        <div className="footer-links">
          <h4>Creators</h4>

          <a href="/">Follow on TikTok →</a>
          <a href="/">Follow on Instagram →</a>
          <a href="/">Follow on YouTube →</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          Optimized for TikTok • Reels • Shorts
        </p>

        <p>
          © 2026 Nimii Labs. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
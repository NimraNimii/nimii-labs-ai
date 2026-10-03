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
  Analyze your idea, identify weak points, and improve
  your script before you publish.
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
  Built for short-form content workflows
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

        <p className="footer-description">
  AI-assisted content analysis and script
  improvement for short-form creators.
</p>

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
  <Link to="/refund">Refund & Cancellation</Link>
  <Link to="/support">Support</Link>
</div>

        {/* CREATORS */}
       <div className="footer-links">
  <h4>Resources</h4>
  <Link to="/how-it-works">How It Works</Link>
  <Link to="/pricing">Pricing</Link>
  <Link to="/support">Support</Link>
  <a href="mailto:nimiiwritess@gmail.com">Contact Us</a>
</div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

       <p className="footer-bottom-platforms">
  Built for short-form content workflows
</p>
        <p>
          © 2026 Nimii Labs. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
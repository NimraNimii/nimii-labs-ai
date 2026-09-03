import Footer from "../components/footer";
import "../styles/pricing.css";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== PRICING SECTION ===== */}

      <section id="pricing" className="pricing-section">
        <div className="section-noise"></div>
        <div className="section-glow"></div>

        <div className="pricing-header">
          <span className="pricing-tag">
            💎 SIMPLE PRICING
          </span>

          <h2>
            Start Free.
            <br />
            Upgrade Only When Content Starts Winning.
          </h2>

          <p>
            Validate your ideas before you spend hours recording.
          </p>
        </div>

        <div className="pricing-benefits">
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
          <span>✓ Upgrade instantly</span>
        </div>

        <div className="pricing-grid">

          {/* ===== EXPLORER ===== */}

          <div className="pricing-card">
            <h3>Explorer</h3>

            <div className="price">
              $0<span>/month</span>
            </div>

            <ul>
              <li>✓ 3 validations/day</li>
              <li>✓ All niches</li>
              <li>✓ Basic hook scoring</li>
              <li>✓ Watermarked exports</li>
            </ul>

            <button
              className="pricing-btn-secondary"
              onClick={() => navigate("/signup")}
            >
              Try Free
            </button>
          </div>


          {/* ===== CREATOR ===== */}

          <div className="pricing-card popular-card magnetic-card">
            <h3>Creator</h3>

            <div className="price">
              $12<span>/month</span>
            </div>

            <ul>
              <li>✓ Unlimited validations</li>
              <li>✓ Advanced hook analysis</li>
              <li>✓ Viral scoring</li>
              <li>✓ Script history</li>
              <li>✓ Faster generation</li>
            </ul>

            <button
              className="pricing-btn-primary"
              onClick={() => navigate("/signup")}
            >
              Start Creating
            </button>
          </div>


          {/* ===== GROWTH ===== */}

          <div className="pricing-card glass-card">
            <div className="popular-badge">
              MOST POPULAR
            </div>

            <h3>Growth</h3>

            <div className="price">
              $29<span>/month</span>
            </div>

            <ul>
              <li>✓ Everything in Creator</li>
              <li>✓ Brand voice</li>
              <li>✓ Content variations</li>
              <li>✓ Bulk generation</li>
              <li>✓ PDF export</li>
            </ul>

            <button
              className="pricing-btn-primary"
              onClick={() => navigate("/signup")}
            >
              Upgrade To Growth
            </button>
          </div>


          {/* ===== ENTERPRISE ===== */}

          <div className="pricing-card enterprise-card">
            <h3>Enterprise</h3>

            <div className="price">
              Custom
            </div>

            <p className="enterprise-anchor">
              Starting at $199/month
            </p>

            <ul>
              <li>✓ Unlimited everything</li>
              <li>✓ Dedicated support</li>
              <li>✓ Team collaboration</li>
              <li>✓ Advanced automation</li>
              <li>✓ API access</li>
            </ul>

            <button
              className="pricing-btn-primary"
              onClick={() => navigate("/signup")}
            >
              Contact Sales
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
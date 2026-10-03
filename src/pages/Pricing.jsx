
import "../styles/pricing.css";
import { useNavigate } from "react-router-dom";
import { getPaddle } from "../utils/paddle";
import { auth } from "../firebase";


const PADDLE_MONTHLY_PRICE_ID =
  "pri_01m31gc50nkmdjv8rwk3eeyqcw";

const PADDLE_ANNUAL_PRICE_ID =
  "pri_01m31gn4a8rr7nt66eq3eqf3j1";

export default function Pricing() {
  const navigate = useNavigate();

  const openPaddleCheckout = async (priceId) => {
  try {
    const paddle = await getPaddle();

    if (!paddle) {
      alert("Payment system is temporarily unavailable.");
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      alert("Please log in before subscribing.");
      return;
    }

    await paddle.Checkout.open({
      settings: {
        displayMode: "overlay",
        theme: "dark",
        variant: "one-page",
        locale: "en",
      },

      items: [
        {
          priceId,
          quantity: 1,
        },
      ],

      customData: {
        firebaseUid: user.uid,
      },
    });
  } catch (error) {
    console.error("Paddle checkout error:", error);
    alert("Unable to open checkout. Please try again.");
  }
};


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
  Upgrade When You Need More.
</h2>

          <p>
            Validate your ideas before you spend hours recording.
          </p>
        </div>

        <div className="pricing-benefits">
          <span>✓ 3-day free trial</span>
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


          {/* ===== PRO MONTHLY ===== */}

          <div className="pricing-card popular-card magnetic-card">

            <h3>Nimii Labs Pro</h3>

            <div className="price">
              $9<span>/month</span>
            </div>

            <p className="trial-text">
              3-day free trial
            </p>

            <ul>
              <li>✓ Unlimited validations</li>
              <li>✓ Advanced hook analysis</li>
            <li>✓ Content scoring</li>
              <li>✓ Script history</li>
              <li>✓ Faster generation</li>
            </ul>

            <button
              className="pricing-btn-primary"
              onClick={() =>
                openPaddleCheckout(PADDLE_MONTHLY_PRICE_ID)
              }
            >
              Start 3-Day Free Trial
            </button>

          </div>


          {/* ===== PRO ANNUAL ===== */}

          <div className="pricing-card glass-card">

            <div className="popular-badge">
              BEST VALUE
            </div>

            <h3>Nimii Labs Pro Annual</h3>

            <div className="price">
              $90<span>/year</span>
            </div>

            <p className="trial-text">
              3-day free trial
            </p>

            <p className="annual-equivalent">
              Equivalent to $7.50/month
            </p>

            <ul>
              <li>✓ Everything in Pro</li>
              <li>✓ Unlimited validations</li>
              <li>✓ Advanced hook analysis</li>
              <li>✓ Script history</li>
              <li>✓ Faster generation</li>
            </ul>

            <button
              className="pricing-btn-primary"
              onClick={() =>
                openPaddleCheckout(PADDLE_ANNUAL_PRICE_ID)
              }
            >
              Start Annual Trial
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
    </>
  );
}
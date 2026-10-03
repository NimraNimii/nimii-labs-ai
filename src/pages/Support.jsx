import React from "react";
import "../styles/support.css";

const supportOptions = [
  {
    icon: "🔐",
    title: "Account & Login",
    description:
      "Can't sign in, reset your password, or access your Nimii Labs account?",
    subject: "Nimii Labs — Account & Login Help",
  },
  {
    icon: "💳",
    title: "Subscription & Billing",
    description:
      "Questions about your Pro plan, free trial, billing, cancellation, or payment?",
    subject: "Nimii Labs — Subscription & Billing Help",
  },
  {
    icon: "✨",
    title: "Content Analysis",
    description:
      "Need help understanding your Content Score, analysis, or generated results?",
    subject: "Nimii Labs — Content Analysis Help",
  },
  {
    icon: "🛠️",
    title: "Technical Problem",
    description:
      "Something isn't working correctly? Tell us what happened and we'll investigate.",
    subject: "Nimii Labs — Technical Support",
  },
];

function createSupportEmail(subject) {
  return `mailto:nimiiwritess@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    "Hello Nimii Labs Support,\n\nPlease describe the issue I am experiencing:\n\n\nThank you."
  )}`;
}

export default function Support() {
  return (
    <main className="support-page">

      {/* HERO */}

      <section className="support-hero">

        <div className="support-hero-glow"></div>

        <div className="support-badge">
          <span>⚡</span>
          Nimii Labs Support
        </div>

        <h1>
          Need Help?
          <br />
          <span>We've Got You.</span>
        </h1>

        <p>
          Tell us what you're stuck with and we'll point you
          in the right direction.
        </p>

      </section>


      {/* MAIN SUPPORT PANEL */}

      <section className="support-container">

        <div className="support-main-card">

          <div className="support-main-header">

            <div>
              <span className="support-eyebrow">
                SUPPORT CENTER
              </span>

              <h2>
                What do you need help with?
              </h2>

              <p>
                Choose the option that best describes your issue.
                Your email will open with the right subject already
                prepared.
              </p>
            </div>

            <div className="support-mail-icon">
              ✉
            </div>

          </div>


          {/* SUPPORT OPTIONS */}

          <div className="support-options">

            {supportOptions.map((option) => (

              <div
                className="support-option"
                key={option.title}
              >

                <div className="support-option-icon">
                  {option.icon}
                </div>

                <div className="support-option-content">

                  <h3>
                    {option.title}
                  </h3>

                  <p>
                    {option.description}
                  </p>

                  <a
  href={createSupportEmail(option.subject)}
  className="support-option-button"
>
  Contact Support
  <span>→</span>
</a>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* DIRECT CONTACT */}

        <div className="support-direct">

          <div className="support-direct-content">

            <span className="support-direct-label">
              PREFER TO EMAIL DIRECTLY?
            </span>

            <h2>
              Send us a message.
            </h2>

            <p>
              Include your account email and a short description
              of the problem so we can understand what you need.
            </p>

          </div>

          <a
            href={createSupportEmail(
              "Nimii Labs — General Support Request"
            )}
            className="support-direct-button"
          >
            Email Support
            <span>→</span>
          </a>

        </div>


        {/* QUICK LINKS */}

        <div className="support-links">

          <a href="/how-it-works">
            <span>How It Works</span>
            <strong>→</strong>
          </a>

          <a href="/pricing">
            <span>Pricing & Plans</span>
            <strong>→</strong>
          </a>

          <a href="/refund">
            <span>Refund & Cancellation</span>
            <strong>→</strong>
          </a>

          <a href="/privacy">
            <span>Privacy</span>
            <strong>→</strong>
          </a>

        </div>

      </section>

    </main>
  );
}
import "../styles/transformation.css";

export default function TransformationSection() {
  return (
    <section className="transformation-section">

      <div className="transformation-wrapper">

        {/* =========================
            HEADER
        ========================= */}

        <div className="section-header">

          <span className="section-badge">
            WHAT NIMII ACTUALLY DOES
          </span>

          <h2>
            See Why Your Content Will Win
            <span> Before You Publish. </span>
          </h2>

          <p className="section-subtitle">
            Nimii finds what's holding your idea back, strengthens the weak
            points, and shows you exactly why the new version performs better.
          </p>

        </div>


        {/* =========================
            TRANSFORMATION
        ========================= */}

        <div className="transformation-grid">


          {/* =========================
              BEFORE
          ========================= */}

          <div className="before-card transformation-card">

            <div className="card-top">

              <span className="card-label">
                BEFORE
              </span>

              <span className="card-score-bad">
                34/100
              </span>

            </div>

            <span className="potential-label">
              VIRAL POTENTIAL
            </span>

            <div className="hook-box">

              <p>
                How I became more productive.
              </p>

            </div>

            <div className="issues-list">

              <p>What's holding it back:</p>

              <ul>
                <li>
                  <span>×</span>
                  Weak hook
                </li>

                <li>
                  <span>×</span>
                  No curiosity gap
                </li>

                <li>
                  <span>×</span>
                  Too generic
                </li>
              </ul>

            </div>

            <div className="card-bottom-note">
              <span className="status-dot bad"></span>
              Needs a stronger angle
            </div>

          </div>


          {/* =========================
              TRANSFORM ARROW
          ========================= */}

          <div className="transform-arrow">
            <span>→</span>
          </div>


          {/* =========================
              AFTER
          ========================= */}

          <div className="after-card transformation-card">

            <div className="card-top">

              <span className="card-label success">
                AFTER
              </span>

              <span className="card-score-good">
                91/100
              </span>

            </div>

            <span className="potential-label">
              VIRAL POTENTIAL
            </span>

            <div className="hook-box">

              <p>
                These 3 everyday habits are silently
                destroying your focus.
              </p>

            </div>

            <div className="improvement-score">
              +57 points
              <span> improvement</span>
            </div>

            <div className="issues-list success-list">

              <p>Why it works better:</p>

              <ul>
                <li>
                  <span>✓</span>
                  Stronger hook
                </li>

                <li>
                  <span>✓</span>
                  Curiosity gap
                </li>

                <li>
                  <span>✓</span>
                  Retention trigger
                </li>

                <li>
                  <span>✓</span>
                  Clear payoff
                </li>
              </ul>

            </div>

            <div className="improvement-tags">

              <span>Hook ↑</span>
              <span>Retention ↑</span>
              <span>Curiosity ↑</span>
              <span>Structure ↑</span>

            </div>

          </div>


          {/* =========================
              AI VERDICT
          ========================= */}

          <div className="verdict-card">

            <div className="verdict-header">

              <div>
                <span className="verdict-eyebrow">
                  NIMII'S AI VERDICT
                </span>

                <h3>
                  Performance Analysis
                </h3>
              </div>

              <div className="verdict-score">
                <strong>91</strong>
                <span>/100</span>
              </div>

            </div>


            {/* SCORE SUMMARY */}

            <div className="score-summary">

              <div className="score-ring">

                <div className="score-ring-inner">
                  <strong>91</strong>
                  <span>VIRAL SCORE</span>
                </div>

              </div>

              <div className="score-summary-text">

                <span className="score-status">
                  VERY STRONG
                </span>

                <h4>
                  Great viral potential
                </h4>

                <p>
                  Strong hook and curiosity give this idea
                  a much better chance of holding attention.
                </p>

              </div>

            </div>


            {/* METRICS */}

            <div className="analysis-metrics">

              <div className="metric-row">

                <div className="metric-info">
                  <span>Hook</span>
                  <strong>91</strong>
                </div>

                <div className="metric-bar">
                  <span style={{ width: "91%" }}></span>
                </div>

              </div>


              <div className="metric-row">

                <div className="metric-info">
                  <span>Retention</span>
                  <strong>78</strong>
                </div>

                <div className="metric-bar">
                  <span style={{ width: "78%" }}></span>
                </div>

              </div>


              <div className="metric-row">

                <div className="metric-info">
                  <span>Curiosity</span>
                  <strong>94</strong>
                </div>

                <div className="metric-bar">
                  <span style={{ width: "94%" }}></span>
                </div>

              </div>


              <div className="metric-row">

                <div className="metric-info">
                  <span>Emotion</span>
                  <strong>82</strong>
                </div>

                <div className="metric-bar">
                  <span style={{ width: "82%" }}></span>
                </div>

              </div>


              <div className="metric-row">

                <div className="metric-info">
                  <span>Platform Fit</span>
                  <strong>90</strong>
                </div>

                <div className="metric-bar">
                  <span style={{ width: "90%" }}></span>
                </div>

              </div>

            </div>


            {/* INSIGHTS */}

            <div className="verdict-insights">

              <div className="verdict-insight strength">

                <span className="insight-icon">
                  ✓
                </span>

                <div>
                  <small>BIGGEST STRENGTH</small>
                  <strong>Curiosity</strong>
                </div>

              </div>


              <div className="verdict-insight weakness">

                <span className="insight-icon">
                  !
                </span>

                <div>
                  <small>BIGGEST WEAKNESS</small>
                  <strong>Retention</strong>
                </div>

              </div>

            </div>


            {/* QUICK WIN */}

            <div className="quick-win">

              <div className="quick-win-label">
                QUICK WIN
              </div>

              <p>
                Strengthen the middle of the script with
                another curiosity loop to protect retention.
              </p>

              <span>
                Improve Retention →
              </span>

            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================= */}

        <div className="transformation-bottom">

          <span className="bottom-line"></span>

          <p>
            <strong>34 → 91</strong>
            Nimii doesn't just rewrite your idea.
            It shows you why the new version is stronger.
          </p>

          <span className="bottom-line"></span>

        </div>

      </div>

    </section>
  );
}
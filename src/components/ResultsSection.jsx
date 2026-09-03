import "../styles/results.css";


export default function ResultsSection() {
  return (
   
    <section className="results-section">

  <div className="results-header">
    <div className="section-badge">
      ✨ BEFORE RECORDING
    </div>

    <h2>
      Stop Guessing.
Start Validating.
    </h2>

    <p>
     Predict hook strength, retention and viral potential before you record.
    </p>
  </div>

  <div className="insights-dashboard">

<div className="hero-metric">

  <div className="metric-tag">
    AI CONTENT SCORE
  </div>

  <div className="hero-metric-value">
    91
  </div>

  <div className="hero-metric-label">
    Average Viral Score
  </div>

</div>


    <div className="secondary-metrics">

      <div className="metric-box">
        <div className="metric-value">12s</div>
        <div className="metric-label">
         ✓ Idea Validation
        </div>
      </div>

      <div className="metric-box">
        <div className="metric-value">38%</div>
        <div className="metric-label">
         ✓ Predicted Retention
        </div>
      </div>

      <div className="metric-box">
        <div className="metric-value">2x</div>
        <div className="metric-label">
      ✓ Content Variations
        </div>
      </div>

    </div>

  </div>

</section>
  );
}
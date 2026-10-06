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
    Evaluate hook strength, retention and content quality before you record.
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
    Average Content Score
  </div>

</div>


    <div className="secondary-metrics">

    <div className="metric-box">
  <div className="metric-value">12s</div>
  <div className="metric-label">
   ✓ Content Analysis
  </div>
</div>

  <div className="metric-box">
 <div className="metric-value">AI</div>
<div className="metric-label">
  ✓ Retention Structure
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
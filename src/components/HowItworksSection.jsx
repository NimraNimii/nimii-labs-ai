import "../styles/howworks-section.css";



export default function HowItWorksSection() {
  return (
    <section className="landing-how-section">

      <div className="landing-how-header">

        <span className="landing-how-badge">
          ✨ WHY NIMII EXISTS
        </span>

       <h2>
  Know Before <span>You Record.</span>
</h2>

        <p>
          Stop guessing what might work. Nimii analyzes your idea,
          predicts performance and generates a stronger version
          before you ever hit record.
        </p>

      </div>

      <div className="landing-process">

        <div className="process-item">

          <div className="process-number">
            01
          </div>

          <div className="process-content">

            <h3>Drop Your Idea</h3>

            <p>
            Paste any topic, trend, story
or content concept.
            </p>

          </div>

        </div>

        <div className="process-line"></div>

        <div className="process-item">

          <div className="process-number">
            02
          </div>

          <div className="process-content">

            <h3>AI Analysis</h3>

            <p>
         We analyze hooks, retention,
curiosity and engagement signals.
            </p>

          </div>

        </div>

        <div className="process-line"></div>

        <div className="process-item">

          <div className="process-number">
            03
          </div>

          <div className="process-content">

            <h3>Get Your Score</h3>

            <p>
        Know what's strong,
what's weak and what to improve.
            </p>

          </div>

        </div>

        <div className="process-line"></div>

        <div className="process-item">

          <div className="process-number">
            04
          </div>

          <div className="process-content">

            <h3>Generate Script</h3>

            <p>
             Get a stronger version
designed to maximize performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

import "../styles/why-nimii.css";
export default function WhyNimiiSection() {
  return (
    <section className="why-section">

      <div className="why-container">

        <div className="why-left">

          <span className="why-label">
            WHY WE BUILT NIMII
          </span>

          <h2>
            Most AI tools generate scripts.
          </h2>

          <h3>
            Nimii tells you if they're worth filming.
          </h3>

         <p>
Creators don't need another writer.
They need to know if an idea is worth filming
before they spend hours recording, editing and posting.
</p>

<p>
Most creators discover a video won't work after it's already published.
</p>

<p className="why-highlight">
Nimii helps you find out first.
</p>

        </div>

        <div className="why-right">

          <div className="process-columns">

            <div className="process-side">

              <span className="process-title muted">
                WITHOUT NIMII
              </span>

              <div className="process-flow">

                <span>Idea</span>
                <span className="arrow">↓</span>

                <span>Write Script</span>
                <span className="arrow">↓</span>

                <span>Film</span>
                <span className="arrow">↓</span>

                <span>Edit</span>
                <span className="arrow">↓</span>

                <span>Post</span>
                <span className="arrow">↓</span>

                <span className="fail">
                  Flops
                </span>

              </div>

            </div>

            <div className="divider" />

            <div className="process-side">

              <span className="process-title success">
                WITH NIMII
              </span>

              <div className="process-flow">

                <span>Idea</span>
                <span className="arrow">↓</span>

                <span>Write Script</span>
                <span className="arrow">↓</span>

                <span className="score-step">
                  Score It
                </span>

                <span className="arrow">↓</span>

                <span>Improve</span>
                <span className="arrow">↓</span>

                <span>Film</span>
                <span className="arrow">↓</span>

                <span className="success-text">
                  Post ✓
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
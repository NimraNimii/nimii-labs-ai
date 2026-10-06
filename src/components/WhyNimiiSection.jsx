
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
  Nimii helps you improve them before filming.
</h3>

   <p>
Creators don't need another writer.
They need useful feedback on an idea before they
spend hours recording, editing and posting.
</p>

<p>
Creators can discover weaknesses in their content only after
spending time recording and editing.
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
  Uncertain Outcome
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
  Ready to Publish
</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
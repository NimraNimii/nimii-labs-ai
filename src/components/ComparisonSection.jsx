import "../styles/comparison.css";
import { SiOpenai } from "react-icons/si";
import NimiiLogo from "./NimiiLogo";


export default function ComparisonSection() {
 const rows = [
  ["Generic script output", "Viral score before posting"],
  ["No performance prediction", "Hook strength analysis"],
  ["No content scoring", "Retention prediction"],
  ["No audience insights", "Curiosity gap detection"],
  ["No creator context", "Built around creator psychology"],
];

  return (
    <section className="comparison-section">

      <div className="comparison-header">
        <span className="comparison-tag">
          ✨ THE DIFFERENCE
        </span>

      <h2>
Most AI generates content.
<span>  Nimii tells you if it will work. </span>
</h2>

       <p>
Generate your script anywhere. Know if it's worth filming
 before you spend hours recording and editing.
</p>
      </div>

      <div className="comparison-card">

   <div className="comparison-top">

  <div className="comparison-title muted header-brand">
    <SiOpenai size={26} />
    <span>ChatGPT</span>
  </div>

  <div className="comparison-title active header-brand">
    <NimiiLogo size={30} />
    <span>Nimii Labs</span>
  </div>
</div>

<div className="vs-circle">VS</div>


  {rows.map((row, index) => (
  <div className="comparison-row" key={index}>

    <div className="comparison-left">
      <span className="cross-icon">✕</span>
      <span>{row[0]}</span>
    </div>

    <div className="comparison-right">
      <span className="check-icon">✓</span>
      <span>{row[1]}</span>
    </div>

  </div>
))}


      </div>

    </section>
  );
}
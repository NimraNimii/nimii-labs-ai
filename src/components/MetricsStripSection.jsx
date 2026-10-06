import "../styles/metrics-strip.css";

export default function MetricsStripSection() {
  const metrics = [
    {
      value: "91",
      label: "Average Script Score",
    },
   {
  value: "AI",
  label: "Assisted Content Generation",
},
   {
  value: "AI",
  label: "Script Generation",
},
   {
  value: "9",
  label: "Content Quality Dimensions",
},
  ];

  return (
    <section className="metrics-strip">
      <div className="metrics-container">
        {metrics.map((item, index) => (
          <div key={index} className="metric-item">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
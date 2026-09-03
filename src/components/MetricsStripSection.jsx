import "../styles/metrics-strip.css";

export default function MetricsStripSection() {
  const metrics = [
    {
      value: "91",
      label: "Average Script Score",
    },
    {
      value: "12s",
      label: "Average Generation Time",
    },
    {
      value: "500+",
      label: "Scripts Generated",
    },
    {
      value: "38%",
      label: "Average Retention Lift",
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
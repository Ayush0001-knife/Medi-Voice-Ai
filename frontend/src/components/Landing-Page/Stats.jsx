import React from "react";
import "../../styles/LandingPageCSS.js";

const Stats = () => {
  return (
    <div className="stats reveal">
      {[
        { num: "98", unit: "%", label: "Transcription accuracy" },
        { num: "3", unit: "x", label: "Faster patient triage" },
        { num: "24", unit: "/7", label: "Always-on AI agents" },
        { num: "50", unit: "k+", label: "Medical conversations handled" },
      ].map((s, i) => (
        <div key={i} className="stat-item">
          <span className="stat-num">
            {s.num}
            <span className="g">{s.unit}</span>
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;

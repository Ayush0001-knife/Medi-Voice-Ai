import React from "react";
import STEPS from "../../data/Landing-Page/steps";
import "../../styles/LandingPageCSS.js";

const Steps = () => {
  return (
    <section className="how">
      <div className="how-inner">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">How it works</div>
          <div
            className="section-title"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Live in minutes, not months
          </div>
        </div>
        <div className="steps-row">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="step reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="step-num">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

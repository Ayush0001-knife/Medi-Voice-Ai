import React from "react";
import FEATURES from "../../data/Landing-Page/features";
import FeatureVisual from "./FeatureVisual";
import "../../styles/LandingPageCSS.js";

const Features = () => {
  return (
    <section className="features">
      <div className="reveal">
        <div className="section-eyebrow">What we offer</div>
        <div className="section-title">Every tool your clinical team needs</div>
        <div className="section-sub">
          From real-time transcription to sentiment analysis — one platform,
          total coverage.
        </div>
      </div>
      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="feature-card reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
            <div className="feature-visual">
              <FeatureVisual type={f.visual} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LandingPageCSS.js";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section reveal">
      <h2 className="cta-title">
        Ready to <span className="accent">transform</span>
        <br />
        your practice?
      </h2>
      <p className="cta-sub">
        Join hundreds of healthcare providers already using MediVoice AI.
      </p>
      <button className="cta-btn" onClick={() => navigate("/auth")}>
        Start Free Trial →
      </button>
    </section>
  );
};

export default CTA;

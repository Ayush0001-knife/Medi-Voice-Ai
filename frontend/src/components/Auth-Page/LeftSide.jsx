import React from "react";

const LeftSide = () => {
  const FEATS = [
    "24/7 AI Medical Voice Agents",
    "Real-time Clinical Transcription",
    "HIPAA-Compliant & Secure",
    "Integrates with 50+ EHR Systems",
  ];
  const WAVE_COUNT = 28;

  return (
    <div className="auth-left">
      <div className="mesh">
        <div className="mesh-orb m1" />
        <div className="mesh-orb m2" />
        <div className="mesh-orb m3" />
      </div>
      <div className="grid-lines" />

      <div className="left-top">
        <a href="#" className="left-logo">
          <div className="logo-icon">✚</div>
          <span>
            <span className="logo-medi">Medi</span>Voice AI
          </span>
        </a>

        <div className="left-headline">
          Healthcare AI
          <br />
          that <span className="hl-accent">listens,</span>
          <br />
          understands,
          <br />
          &amp; acts.
        </div>
        <div className="left-sub">
          Join thousands of doctors and hospitals using voice-first automation
          to deliver better patient care — faster.
        </div>

        <div className="feat-list">
          {FEATS.map((f, i) => (
            <div key={i} className="feat-pill">
              <div className="fp-dot" />
              <span className="fp-text">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="left-bottom">
        <div className="waveform-strip">
          {Array.from({ length: WAVE_COUNT }).map((_, i) => (
            <div
              key={i}
              className="wv"
              style={{
                animationDelay: `${i * 0.06}s`,
                animationDuration: `${0.8 + (i % 6) * 0.12}s`,
              }}
            />
          ))}
        </div>
        <div className="left-footer-text">
          © 2026 MediVoice AI · HIPAA Compliant
        </div>
      </div>
    </div>
  );
};

export default LeftSide;

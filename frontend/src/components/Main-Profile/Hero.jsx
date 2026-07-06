import React from "react";

const Hero = ({ showToast }) => {
  return (
    <div className="profile-hero">
      <div className="avatar-wrap">
        <div className="avatar-ring">
          <div className="avatar-inner">AS</div>
        </div>
        <div
          className="avatar-edit"
          onClick={() => showToast("Photo upload coming soon")}
        >
          ✏️
        </div>
      </div>
      <div className="hero-info">
        <div className="hero-name">Arjun Sharma</div>
        <div className="hero-title">arjun@hospital.in · New Delhi, India</div>
        <div className="hero-badges">
          <span className="hero-badge hb-green">✚ Pro Plan</span>
          <span className="hero-badge hb-white">🩺 12 Consultations</span>
          <span className="hero-badge hb-white">⭐ 4.8 Avg Rating</span>
          <span className="hero-badge hb-white">🩸 Blood Type A+</span>
        </div>
        <div className="wv-mini">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="wv-b"
              style={{
                animationDelay: `${i * 0.065}s`,
                animationDuration: `${0.9 + (i % 5) * 0.13}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="hero-stats">
        <div className="hs-stat">
          <div className="hs-val">12</div>
          <div className="hs-label">Consults</div>
        </div>
        <div className="hs-stat">
          <div className="hs-val">
            <span>★</span>4.8
          </div>
          <div className="hs-label">Rating</div>
        </div>
        <div className="hs-stat">
          <div className="hs-val">8</div>
          <div className="hs-label">Rx Active</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

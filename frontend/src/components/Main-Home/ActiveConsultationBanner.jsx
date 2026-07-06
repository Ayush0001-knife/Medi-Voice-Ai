import React from "react";

const ActiveConsultationBanner = () => {
  return (
    <div className="active-banner">
      <div className="ab-live">
        <div className="ab-live-dot" />
        LIVE
      </div>
      <div className="ab-text">
        <div className="ab-title">Upcoming session with Dr. Priya Nair</div>
        <div className="ab-sub">
          Jul 1, 2026 · 2:00 PM · Dermatology · 30 min session
        </div>
      </div>
      <div className="wv-strip">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="wv-bar"
            style={{
              animationDelay: `${i * 0.07}s`,
              animationDuration: `${0.9 + (i % 5) * 0.12}s`,
            }}
          />
        ))}
      </div>
      <button className="ab-join">Join Now →</button>
    </div>
  );
};

export default ActiveConsultationBanner;

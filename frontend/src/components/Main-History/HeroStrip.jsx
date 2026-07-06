import React from "react";

const HeroStrip = ({ total, done, upcoming, avgRating }) => {
  return (
    <div className="hero-strip">
      <div>
        <div className="hs-title">
          Consultation <span>History</span>
        </div>
        <div className="hs-sub">
          A complete timeline of your medical journey
        </div>
        <div className="wv-mini">
          {Array.from({ length: 22 }).map((_, i) => (
            <div
              key={i}
              className="wv-b"
              style={{
                animationDelay: `${i * 0.06}s`,
                animationDuration: `${0.9 + (i % 5) * 0.13}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="hs-stats">
        <div className="hss">
          <div className="hss-val">
            {total}
            <span>+</span>
          </div>
          <div className="hss-label">Total Sessions</div>
        </div>
        <div className="hss">
          <div className="hss-val">{done}</div>
          <div className="hss-label">Completed</div>
        </div>
        <div className="hss">
          <div className="hss-val">
            <span>★</span>
            {avgRating}
          </div>
          <div className="hss-label">Avg Rating</div>
        </div>
      </div>
    </div>
  );
};

export default HeroStrip;

import React from "react";
import VITALS from "../../data/Main-Profile/vitals.js";

const Vitals = ({ showToast }) => {
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">❤️ My Vitals</div>
        <button
          className="s-card-edit"
          onClick={() => showToast("Syncing from devices…")}
        >
          Sync Devices
        </button>
      </div>
      <div className="s-card-body">
        <div className="vitals-grid">
          {VITALS.map((v, i) => (
            <div key={i} className="vital-card">
              <div className="vital-icon">{v.icon}</div>
              <div className="vital-val">
                {v.val}
                <span className="vital-unit"> {v.unit}</span>
              </div>
              <div className="vital-label">{v.label}</div>
              <div className={`vital-status ${v.statusClass}`}>{v.status}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 20,
            padding: "16px",
            background: "var(--gray-50)",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--gray-200)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--gray-400)",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: ".06em",
            }}
          >
            AI Health Insight
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--gray-600)",
              lineHeight: 1.7,
            }}
          >
            Your blood pressure is well-controlled. Blood sugar is slightly
            elevated — consider reducing refined carbohydrates and scheduling a
            follow-up with Dr. Mehta in 2 weeks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitals;

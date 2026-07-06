import React from "react";
import CONDITIONS from "../../data/Main-Profile/conditions.js";
import ALLERGIES from "../../data/Main-Profile/allergies.js";

const HealthProfile = ({ showToast }) => {
  const HEALTH_BARS = [
    { label: "Overall Health Score", val: 84, color: ["var(--green)"] },
    { label: "Fitness Level", val: 62, color: ["var(--amber)"] },
    { label: "Mental Wellness", val: 76, color: ["var(--blue)"] },
  ];
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">🏥 Health Profile</div>
      </div>
      <div className="s-card-body">
        <div style={{ marginBottom: 24 }}>
          <div className="field-label" style={{ marginBottom: 10 }}>
            Medical Conditions
          </div>
          <div className="tags-wrap">
            {CONDITIONS.map((c, i) => (
              <span key={i} className={`cond-tag ${c.c}`}>
                {c.l}
              </span>
            ))}
            <button
              className="add-tag"
              onClick={() => showToast("Add condition coming soon")}
            >
              + Add
            </button>
          </div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div className="field-label" style={{ marginBottom: 10 }}>
            Allergies
          </div>
          <div className="tags-wrap">
            {ALLERGIES.map((a, i) => (
              <span key={i} className={`cond-tag ${a.c}`}>
                ⚠ {a.l}
              </span>
            ))}
            <button
              className="add-tag"
              onClick={() => showToast("Add allergy coming soon")}
            >
              + Add
            </button>
          </div>
        </div>
        <div>
          {HEALTH_BARS.map((b, i) => (
            <div
              key={i}
              className="health-bar-wrap"
              style={{ marginBottom: 14 }}
            >
              <div className="health-bar-label">
                <span>{b.label}</span>
                <span style={{ fontWeight: 700, color: "var(--navy)" }}>
                  {b.val}%
                </span>
              </div>
              <div className="health-bar-track">
                <div
                  className="health-bar-fill"
                  style={{
                    "--w": `${b.val}%`,
                    width: `${b.val}%`,
                    background: b.color[0],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthProfile;

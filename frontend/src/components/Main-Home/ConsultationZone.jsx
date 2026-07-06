import React from "react";
import PAST_CONSULTS from "../../data/Main-Home/past-consults.js";

const ConsultationZone = ({ czTab, setCzTab, showToast }) => {
  return (
    <div className="consult-zone">
      <div className="cz-header">
        <div className="cz-title">Consultations</div>
        <div className="cz-tabs">
          {["recent", "upcoming", "completed"].map((t) => (
            <button
              key={t}
              className={`cz-tab${czTab === t ? " active" : ""}`}
              onClick={() => setCzTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {czTab === "recent" ? (
        <div className="cz-empty">
          <div className="empty-circle">🩺</div>
          <div className="empty-title">No Recent Consultations</div>
          <div className="empty-sub">
            It looks like you haven't consulted with any doctors yet. Start your
            first AI-powered consultation today.
          </div>
          <button
            className="empty-btn"
            onClick={() => showToast("Opening consultation flow…")}
          >
            ＋ Start a Consultation
          </button>
        </div>
      ) : (
        <div className="consult-list">
          {PAST_CONSULTS.filter((c) =>
            czTab === "upcoming"
              ? c.status === "upcoming" || c.status === "pending"
              : c.status === "done",
          ).map((c, i) => (
            <div
              key={c.id}
              className="consult-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="cc-avatar">{c.emoji}</div>
              <div className="cc-info">
                <div className="cc-name">{c.name}</div>
                <div className="cc-spec">{c.spec}</div>
                <div className="cc-date">📅 {c.date}</div>
              </div>
              <div className={`cc-status ${c.status}`}>{c.statusLabel}</div>
              <button className="cc-action">
                {c.status === "done" ? "View Summary →" : "Join →"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultationZone;

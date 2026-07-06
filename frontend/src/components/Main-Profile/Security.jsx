import React from "react";
import SECURITY_ITEMS from "../../data/Main-Profile/security-items.js";

const Security = ({ showToast, setConfirmModal }) => {
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">🔒 Security</div>
      </div>
      <div className="s-card-body">
        <div className="security-list">
          {SECURITY_ITEMS.map((item, i) => (
            <div key={i} className="security-item">
              <div className="si-left">
                <div className={`si-icon ${item.c}`}>{item.icon}</div>
                <div>
                  <div className="si-title">{item.title}</div>
                  <div className="si-sub">{item.sub}</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {item.status && (
                  <span className={`si-status ${item.status}`}>
                    {item.status === "on" ? "● Active" : "○ Off"}
                  </span>
                )}
                <button
                  className="si-btn"
                  onClick={() => showToast(`${item.title} updated ✓`, "green")}
                >
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="danger-zone" style={{ marginTop: 20 }}>
          <div className="dz-title">⚠ Account Actions</div>
          <div className="dz-row">
            <div className="dz-text">
              Permanently delete your account and all associated data.
            </div>
            <button
              className="dz-btn"
              onClick={() => setConfirmModal("delete")}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;

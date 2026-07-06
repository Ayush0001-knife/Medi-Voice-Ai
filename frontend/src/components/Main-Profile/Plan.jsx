import React from "react";

const Plan = ({ showToast, setConfirmModal }) => {
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">💳 My Plan</div>
      </div>
      <div className="s-card-body">
        <div className="plan-banner" style={{ marginBottom: 20 }}>
          <div className="pb-left">
            <div className="pb-label">Current Plan</div>
            <div className="pb-plan">
              Pro <span>Plan</span>
            </div>
            <div className="pb-sub">Renews Aug 1, 2026 · ₹29/month</div>
          </div>
          <button
            className="pb-upgrade"
            onClick={() => showToast("Redirecting to upgrade…")}
          >
            Upgrade to Enterprise →
          </button>
        </div>
        <div className="form-grid">
          {[
            { label: "Billing Cycle", value: "Monthly" },
            { label: "Next Billing", value: "Aug 1, 2026" },
            { label: "Amount", value: "₹29.00" },
            { label: "Payment Method", value: "Visa •••• 4242" },
          ].map((r, i) => (
            <div key={i} className="form-field">
              <div className="field-label">{r.label}</div>
              <div className="field-value">{r.value}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <button
            className="s-card-edit"
            style={{ flex: 1, padding: "12px", textAlign: "center" }}
            onClick={() => showToast("Invoice downloaded ✓", "green")}
          >
            Download Invoice
          </button>
          <button
            className="s-card-edit"
            style={{ flex: 1, padding: "12px", textAlign: "center" }}
            onClick={() => showToast("Payment method updated ✓", "green")}
          >
            Update Payment
          </button>
        </div>
        <div className="danger-zone" style={{ marginTop: 20 }}>
          <div className="dz-title">⚠ Danger Zone</div>
          <div className="dz-row">
            <div className="dz-text">
              Cancel your Pro subscription. You'll lose access to specialists.
            </div>
            <button
              className="dz-btn"
              onClick={() => setConfirmModal("cancel")}
            >
              Cancel Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

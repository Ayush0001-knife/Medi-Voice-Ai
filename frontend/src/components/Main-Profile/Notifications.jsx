import React from "react";
import Toggle from "./Toggle";

const Notifications = ({ showToast, setNotifs, notifs }) => {
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">🔔 Notifications</div>
        <button
          className="s-card-edit"
          onClick={() => showToast("Preferences saved ✓", "green")}
        >
          Save
        </button>
      </div>
      <div className="s-card-body">
        <div className="notif-list">
          {[
            {
              k: "appointments",
              title: "Appointment Reminders",
              sub: "Get notified 1 hour before your consultation",
            },
            {
              k: "reminders",
              title: "Medication Reminders",
              sub: "Daily reminders for your active prescriptions",
            },
            {
              k: "reports",
              title: "Report Ready Alerts",
              sub: "Notify when clinical notes are available",
            },
            {
              k: "security",
              title: "Security Alerts",
              sub: "Alerts for logins and account changes",
            },
            {
              k: "marketing",
              title: "Product Updates",
              sub: "News, features, and MediVoice AI tips",
            },
          ].map((item) => (
            <div key={item.k} className="notif-item">
              <div className="notif-info">
                <div className="notif-title">{item.title}</div>
                <div className="notif-sub">{item.sub}</div>
              </div>
              <div className="toggle-wrap">
                <Toggle
                  on={notifs[item.k]}
                  onToggle={() =>
                    setNotifs((n) => ({ ...n, [item.k]: !n[item.k] }))
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

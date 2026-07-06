import React from "react";

const Navbar = ({
  tab,
  setTab,
  profileRef,
  profileOpen,
  setProfileOpen,
  showToast,
}) => {
  return (
    <nav className="db-nav">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">✚</div>
        <div className="nav-logo-text">
          <span>Medi</span>Voice AI
        </div>
      </a>

      <div className="nav-tabs">
        {[
          { id: "home", label: "Home", icon: "🏠" },
          { id: "history", label: "History", icon: "📋" },
          { id: "pricing", label: "Pricing", icon: "💳" },
          { id: "profile", label: "Profile", icon: "👤" },
        ].map((t) => (
          <button
            key={t.id}
            className={`nav-tab${tab === t.id ? " active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            <span className="tab-icon" style={{ marginRight: 6 }}>
              {t.icon}
            </span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="nav-right">
        <button className="nav-notif">
          🔔
          <div className="notif-badge" />
        </button>
        <div className="profile-btn-wrap" ref={profileRef}>
          <button
            className="profile-btn"
            onClick={() => setProfileOpen((p) => !p)}
          >
            A
          </button>
          {profileOpen && (
            <div className="profile-dropdown">
              <div className="pd-header">
                <div className="pd-name">Arjun Sharma</div>
                <div className="pd-email">arjun@hospital.in</div>
              </div>
              <button className="pd-item">👤 &nbsp;My Profile</button>
              <button className="pd-item">⚙️ &nbsp;Settings</button>
              <button className="pd-item">🔔 &nbsp;Notifications</button>
              <button className="pd-item">💳 &nbsp;Billing</button>
              <div className="pd-divider" />
              <button
                className="pd-item danger"
                onClick={() => showToast("Signed out successfully")}
              >
                🚪 &nbsp;Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

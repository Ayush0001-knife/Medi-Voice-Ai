import React from "react";
import ACTIVITY from "../../data/Main-Profile/activities.jsx";

const Activity = () => {
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">📋 Recent Activity</div>
      </div>
      <div className="s-card-body">
        <div className="activity-feed">
          {ACTIVITY.map((a, i) => (
            <div key={i} className="af-item">
              <div className={`af-dot ${a.dot}`}>{a.icon}</div>
              <div>
                <div className="af-text">{a.text}</div>
                <div className="af-time">🕐 {a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;

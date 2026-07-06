import React from "react";
import SECTIONS from "../../data/Main-Profile/sections.js";

const Sidebar = ({ activeSection, handleNav }) => {
  return (
    <div className="side-nav">
      {[
        { label: "Account", items: SECTIONS.slice(0, 2) },
        { label: "Health", items: SECTIONS.slice(2, 4) },
        { label: "Preferences", items: SECTIONS.slice(4, 6) },
        { label: "More", items: SECTIONS.slice(6) },
      ].map((group) => (
        <div key={group.label} className="sn-section">
          <div className="sn-label">{group.label}</div>
          {group.items.map((item) => (
            <button
              key={item.id}
              className={`sn-item${activeSection === item.id ? " active" : ""}${item.danger ? " danger" : ""}`}
              onClick={() => handleNav(item.id)}
            >
              <div className={`sn-icon ${item.iconCls}`}>{item.icon}</div>
              <span className="sn-text">{item.label}</span>
              {item.id === "notifs" && <span className="sn-badge">2</span>}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

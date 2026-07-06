import React from "react";
import STATS from "../../data/Main-Home/stats.js";

const StatsRow = () => {
  return (
    <div className="stats-row">
      {STATS.map((s, i) => (
        <div
          key={i}
          className="stat-card"
          style={{ animationDelay: `${s.delay}s` }}
        >
          <div className={`sc-icon ${s.color}`}>{s.icon}</div>
          <div className="sc-val">{s.val}</div>
          <div className="sc-label">{s.label}</div>
          <div className={`sc-delta ${s.up ? "up" : "dn"}`}>{s.delta}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;

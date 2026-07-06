import React from "react";

const SummaryStrip = ({ total, done, upcoming, avgRating }) => {
  return (
    <div className="summary-panel">
      {[
        { num: total, suf: "", label: "Total Consultations" },
        { num: done, suf: "", label: "Completed" },
        { num: upcoming, suf: "", label: "Upcoming & Pending" },
        { num: avgRating, suf: "★", label: "Average Rating" },
      ].map((s, i) => (
        <div key={i} className="sp-item">
          <div className="sp-num">
            {s.suf && <span>{s.suf}</span>}
            {s.num}
          </div>
          <div className="sp-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SummaryStrip;

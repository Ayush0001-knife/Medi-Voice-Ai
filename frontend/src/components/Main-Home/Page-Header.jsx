import React from "react";

const PageHeader = ({ showToast, today }) => {
  return (
    <div className="page-header">
      <div>
        <div className="page-title">
          My <span>Dashboard</span>
        </div>
        <div className="page-date">{today}</div>
      </div>
      <button
        className="start-btn"
        onClick={() => showToast("Opening consultation flow…")}
      >
        ＋ Start a Consultation
      </button>
    </div>
  );
};

export default PageHeader;

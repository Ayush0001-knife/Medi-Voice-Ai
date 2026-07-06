import React from "react";
import "../../styles/LiveConsultation.css";
import LANGUAGES from "../../data/Live-Consultation/languages";

const Navbar = ({
  doc,
  lang,
  setLang,
  elapsed,
  setEndModal,
  showToast,
  fmtTime,
}) => {
  return (
    <div className="top-bar">
      <a href="#" className="tb-logo">
        <div className="tb-logo-icon">✚</div>
        <div className="tb-logo-text">
          <span>Medi</span>Voice AI
        </div>
      </a>

      <div className="tb-center">
        <div className="tb-live-pill">
          <div className="tb-live-dot" />
          LIVE SESSION
        </div>
        <div className="tb-doctor">
          {doc.name} · {doc.spec}
        </div>
      </div>

      <div className="tb-right">
        <select
          className="lang-select"
          value={lang}
          onChange={(e) => {
            setLang(e.target.value);
            showToast(
              `Language changed to ${LANGUAGES.find((l) => l.code === e.target.value)?.label}`,
            );
          }}
        >
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.flag} {l.label}
            </option>
          ))}
        </select>
        <div className="tb-timer">⏱ {fmtTime(elapsed)}</div>
        <button className="end-btn" onClick={() => setEndModal(true)}>
          End Session
        </button>
      </div>
    </div>
  );
};

export default Navbar;

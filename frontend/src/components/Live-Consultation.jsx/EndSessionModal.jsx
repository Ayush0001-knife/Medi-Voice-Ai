import React from "react";

const EndSessionModal = ({
  endModal,
  setEndModal,
  elapsed,
  transcript,
  fmtTime,
  showToast,
}) => {
  return (
    <div className="end-overlay">
      <div className="end-card">
        <div className="end-icon">🩺</div>
        <div className="end-title">End this session?</div>
        <div className="end-sub">
          Your consultation will be saved and a full medical report will be
          generated automatically.
        </div>
        <div className="end-stats">
          <div className="es-item">
            <div className="es-val">{fmtTime(elapsed)}</div>
            <div className="es-label">Duration</div>
          </div>
          <div className="es-item">
            <div className="es-val">
              {transcript.length}
              <span>+</span>
            </div>
            <div className="es-label">Exchanges</div>
          </div>
          <div className="es-item">
            <div className="es-val">
              <span>★</span>AI
            </div>
            <div className="es-label">Report Ready</div>
          </div>
        </div>
        <div className="end-actions">
          <button className="end-back" onClick={() => setEndModal(false)}>
            Continue Session
          </button>
          <button
            className="end-view"
            onClick={() => {
              setEndModal(false);
              showToast("Session saved. Report generated ✓");
            }}
          >
            End & View Report →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndSessionModal;

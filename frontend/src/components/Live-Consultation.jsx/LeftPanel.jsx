import React from "react";

const LeftPanel = ({ doc, langObj, transcript, status, time, listRef }) => {
  return (
    <div className="history-panel">
      <div className="hp-header">
        <div className="hp-title">Session Transcript</div>
        <div className="session-info-box">
          <div className="sib-row">
            <span className="sib-key">Doctor</span>
            <span className="sib-val">{doc.spec}</span>
          </div>
          <div className="sib-row">
            <span className="sib-key">Started</span>
            <span className="sib-val">2:00 PM</span>
          </div>
          <div className="sib-row">
            <span className="sib-key">Status</span>
            <span className="sib-val green">● Active</span>
          </div>
          <div className="sib-row">
            <span className="sib-key">Exchanges</span>
            <span className="sib-val">{transcript.length}</span>
          </div>
        </div>
        <div className="lang-indicator">
          <span className="li-flag">{langObj.flag}</span>
          <span className="li-text">Speaking in</span>
          <span className="li-lang">{langObj.label}</span>
        </div>
      </div>

      {/* transcript */}
      <div className="transcript-list" ref={listRef}>
        {transcript.map((entry, i) => (
          <div
            key={i}
            className="tr-entry"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div className={`tr-speaker ${entry.speaker}`}>
              {entry.speaker === "ai" ? `🤖 ${doc.name} AI` : "🧑 You"}
            </div>
            <div className={`tr-bubble ${entry.speaker}`}>{entry.text}</div>
            <div className="tr-time">{entry.time}</div>
          </div>
        ))}

        {/* thinking dots */}
        {status === "thinking" && (
          <div className="tr-entry">
            <div className="tr-speaker ai">🤖 {doc.name} AI</div>
            <div className="thinking">
              <div className="th-dot" />
              <div className="th-dot" />
              <div className="th-dot" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;

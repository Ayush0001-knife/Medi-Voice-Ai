import React from "react";

const RightPanel = ({
  doc,
  langObj,
  status,
  spokenText,
  wfBars,
  barClass,
  muted,
  speakerOff,
  micOn,
  onMicDown,
  onMicUp,
  setSpeakerOff,
  showToast,
  setMuted,
}) => {
  return (
    <div className="main-stage">
      <div className="avatar-zone">
        {/* pulse rings */}
        <div className="pulse-rings">
          <div
            className={`pulse-ring pr1${status === "ai-speaking" ? " speaking" : ""}`}
          />
          <div
            className={`pulse-ring pr2${status === "ai-speaking" ? " speaking" : ""}`}
          />
          <div
            className={`pulse-ring pr3${status === "ai-speaking" ? " speaking" : ""}`}
          />
          <div
            className={`ai-avatar${status === "ai-speaking" ? " speaking" : status === "user-speaking" ? " listening" : ""}`}
          >
            {doc.emoji}
          </div>
        </div>

        <div className="ai-status-label">
          {status === "idle" && `${doc.name}`}
          {status === "user-speaking" && "Listening…"}
          {status === "thinking" && "Processing…"}
          {status === "ai-speaking" && "Speaking…"}
        </div>
        <div className="ai-status-sub">
          {status === "idle" && `${doc.spec} · AI Session`}
          {status === "user-speaking" && "Release mic when done speaking"}
          {status === "thinking" && "Analyzing your response"}
          {status === "ai-speaking" && `Responding in ${langObj.label}`}
        </div>
      </div>

      {/* waveform + spoken text */}
      <div className="wave-stage">
        <div className="waveform-outer">
          {wfBars.map((_, i) => (
            <div
              key={i}
              className={`wf-bar ${barClass}`}
              style={{
                animationDelay: `${i * 0.04}s`,
                animationDuration: `${0.85 + (i % 6) * 0.11}s`,
                background:
                  status === "user-speaking" ? "#3b82f6" : "var(--green)",
              }}
            />
          ))}
        </div>

        <div
          className={`spoken-text-wrap${status === "ai-speaking" ? " ai-speaking" : status === "user-speaking" ? " user-speaking" : ""}`}
        >
          {spokenText}
        </div>
      </div>

      {/* controls */}
      <div className="controls-bar">
        {/* mute */}
        <button
          className={`ctrl-btn secondary${muted ? " muted" : ""}`}
          onClick={() => {
            setMuted((m) => !m);
            showToast(muted ? "Microphone unmuted" : "Microphone muted");
          }}
          title="Toggle mute"
        >
          {muted ? "🚫" : "🎙️"}
          <span className="ctrl-label">{muted ? "Unmute" : "Mute"}</span>
        </button>

        {/* speaker */}
        <button
          className={`ctrl-btn secondary${speakerOff ? " muted" : ""}`}
          onClick={() => {
            setSpeakerOff((s) => !s);
            showToast(speakerOff ? "Speaker on" : "Speaker off");
          }}
          title="Toggle speaker"
        >
          {speakerOff ? "🔇" : "🔊"}
          <span className="ctrl-label">
            {speakerOff ? "Speaker Off" : "Speaker"}
          </span>
        </button>

        {/* MIC — hold to speak */}
        <button
          className={`mic-btn${micOn ? " active" : muted ? " muted" : " idle"}`}
          onMouseDown={onMicDown}
          onMouseUp={onMicUp}
          onTouchStart={onMicDown}
          onTouchEnd={onMicUp}
          title="Hold to speak"
        >
          {micOn ? "🎤" : muted ? "🚫" : "🎙️"}
          <span className="ctrl-label" style={{ bottom: -22, fontSize: 9 }}>
            {micOn ? "Release" : "Hold to speak"}
          </span>
        </button>

        {/* notes */}
        <button
          className="ctrl-btn secondary"
          onClick={() => showToast("Notes saved to session report")}
          title="Save note"
        >
          📝
          <span className="ctrl-label">Notes</span>
        </button>
      </div>
    </div>
  );
};

export default RightPanel;

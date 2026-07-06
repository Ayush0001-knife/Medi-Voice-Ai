function FeatureVisual({ type }) {
  if (type === "waves")
    return (
      <div className="waveform">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="wave-bar"
            style={{
              animationDelay: `${i * 0.07}s`,
              animationDuration: `${0.9 + (i % 5) * 0.15}s`,
            }}
          />
        ))}
      </div>
    );
  if (type === "sentiment")
    return (
      <div className="sentiment-row">
        <span className="sent-badge sent-red">Delusional</span>
        <span className="sent-badge sent-green">Sensible</span>
        <span className="sent-badge sent-yellow">Helpless</span>
        <span className="sent-badge sent-green">Positive</span>
        <span className="sent-badge sent-red">Anxious</span>
      </div>
    );
  return (
    <div className="mini-bubbles">
      <div className="mini-bubble b1" />
      <div className="mini-bubble b2" />
      <div className="mini-bubble b3" />
    </div>
  );
}

export default FeatureVisual;

import React from "react";
import "../../styles/LandingPageCSS.js";

const Highlight = () => {
  return (
    <section className="highlight reveal">
      <div className="highlight-text">
        <div className="section-eyebrow">Intelligence built-in</div>
        <div className="section-title">AI that listens, learns, and acts</div>
        <p
          style={{
            fontSize: 15,
            color: "var(--gray-600)",
            marginTop: 12,
            lineHeight: 1.7,
          }}
        >
          MediVoice AI doesn't just transcribe — it understands clinical
          context, detects errors, and surfaces the right information at the
          right moment.
        </p>
        <ul className="highlight-list">
          {[
            "HIPAA-compliant end-to-end encryption",
            "Integrates with Epic, Cerner & 50+ EHRs",
            "Supports 30+ languages and medical dialects",
            "Continuous model improvement from your workflows",
          ].map((item, i) => (
            <li key={i}>
              <div className="check">✓</div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="highlight-visual">
        {[
          {
            label: "AI Diagnosis",
            title: "Possible hypertension detected",
            body: "Based on reported symptoms and BP readings from last 3 visits.",
            tags: ["cardiology", "urgent"],
          },
          {
            label: "Transcription complete",
            title: "Dr. Mehta – Patient 7742",
            body: "15-minute consultation transcribed with 99.2% accuracy.",
            tags: ["transcription", "complete"],
          },
          {
            label: "Sentiment alert",
            title: "Patient showing anxiety",
            body: "Recommend empathetic tone and follow-up scheduling.",
            tags: ["sentiment", "follow-up"],
          },
        ].map((card, i) => (
          <div key={i} className="hl-card">
            <div className="hl-card-label">{card.label}</div>
            <div className="hl-card-title">{card.title}</div>
            <div className="hl-card-body">{card.body}</div>
            <div className="tag-strip">
              {card.tags.map((t) => (
                <span key={t} className="tiny-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlight;

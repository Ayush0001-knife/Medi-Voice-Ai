import React from "react";
import CHAT_ITEMS from "../../data/Landing-Page/chat-items";
import MESSAGES from "../../data/Landing-Page/messages";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-bg-orb orb-1" />
      <div className="hero-bg-orb orb-2" />
      <div className="hero-badge">
        <div className="badge-dot" />
        AI-Powered Healthcare Platform
      </div>
      <h1 className="hero-title">
        🧠 Transform Healthcare
        <br />
        with <span className="accent">AI Medical</span>
        <br />
        Voice Agents
      </h1>
      <p className="hero-sub">
        Provide 24/7 intelligent medical support using conversational AI. Triage
        symptoms, book appointments, and deliver empathetic care with
        voice-first automation.
      </p>
      <div className="hero-cta-row">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Watch Demo →</button>
      </div>

      {/* Dashboard Preview */}
      <div className="hero-preview">
        <div className="preview-frame">
          <div className="preview-topbar">
            <div className="dot dot-r" />
            <div className="dot dot-y" />
            <div className="dot dot-g" />
          </div>
          <div className="preview-body">
            {/* LEFT */}
            <div className="sidebar">
              <div className="sidebar-tabs">
                <div className="stab active">Open</div>
                <div className="stab">Waiting on me</div>
                <div className="stab">Waiting on user</div>
              </div>
              {CHAT_ITEMS.map((c, i) => (
                <div
                  key={c.id}
                  className="chat-item"
                  style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                >
                  <div className={`avatar ${c.color}`}>{c.id.slice(0, 2)}</div>
                  <div className="chat-meta">
                    <div className="chat-name">{c.name}</div>
                    <div className="chat-preview">{c.preview}</div>
                  </div>
                  {c.badge && <div className="chat-badge">{c.badge}</div>}
                </div>
              ))}
            </div>
            {/* CENTER */}
            <div className="chat-main">
              <div className="chat-header">
                <div className="chat-header-title">Active chat</div>
                <button className="close-btn">Close chat</button>
              </div>
              <div className="messages">
                {MESSAGES.map((m, i) => (
                  <div
                    key={i}
                    className={`msg ${m.type === "agent" ? "agent" : ""}`}
                  >
                    {m.type === "user" && (
                      <div
                        className="avatar av-blue"
                        style={{ width: 24, height: 24, fontSize: 9 }}
                      >
                        KG
                      </div>
                    )}
                    <div className={`msg-bubble ${m.type}`}>{m.text}</div>
                  </div>
                ))}
                <div className="msg">
                  <div
                    className="avatar av-blue"
                    style={{ width: 24, height: 24, fontSize: 9 }}
                  >
                    KG
                  </div>
                  <div className="msg-bubble typing">
                    <div className="typing-dots">
                      <span>•</span>
                      <span>•</span>
                      <span>•</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="info-panel">
              <div className="info-guest">Guest – 334455</div>
              <div className="info-loc">Bengaluru, India</div>
              <div className="info-summary">
                Patient is reporting persistent symptoms and requesting an
                urgent appointment with a specialist…
              </div>
              <div className="info-section">Chat tags</div>
              <div className="tag-row">
                <span className="tag tag-filled">✕ Track</span>
                <span className="tag tag-filled">✕ Cancel</span>
                <span className="tag tag-outline">+ Refund</span>
                <span className="tag tag-outline">+ Return</span>
              </div>
              <div className="info-section">Time</div>
              <div className="info-row">Visitor local time: 12:39 PM</div>
              <div className="info-row">Total chat time: 4m 12s</div>
              <div className="info-section" style={{ marginTop: 10 }}>
                Activity log
              </div>
              <div
                className="hl-card"
                style={{ padding: "8px 10px", margin: "4px 0" }}
              >
                <div style={{ fontSize: 9, color: "var(--gray-400)" }}>
                  12 Jun
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "var(--navy)",
                  }}
                >
                  Closed by Rahul
                </div>
                <div className="tag-strip">
                  <span className="tiny-tag">whatsapp</span>
                  <span className="tiny-tag">order</span>
                  <span className="tiny-tag">return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

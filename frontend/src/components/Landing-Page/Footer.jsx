import React from "react";
import "../../styles/LandingPageCSS.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: 16,
            color: "var(--navy)",
            marginBottom: 4,
          }}
        >
          <span style={{ color: "var(--green)" }}>✚Medi</span>
          <span style={{ color: "var(--green)" }}>Voice</span> AI
        </div>
        <div className="footer-copy">
          © 2026 MediVoice AI. All rights reserved.
        </div>
      </div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">HIPAA</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;

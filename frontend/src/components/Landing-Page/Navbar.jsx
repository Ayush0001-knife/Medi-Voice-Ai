import React from "react";
import { useState } from "react";
import "../../styles/LandingPageCSS.js";
import { useNavigate } from "react-router-dom";
import "../../styles/LandingPageCSS.js";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#" className="nav-logo">
        <span className="medi">✚</span>Medi<span className="medi">Voice</span>
        &nbsp;AI
      </a>
      <button className="nav-login" onClick={() => navigate("/auth")}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect, useRef } from "react";
import "../styles/AuthPage.css";
import LeftSide from "../components/Auth-Page/LeftSide";
import RightSide from "../components/Auth-Page/RightSide";

/* ─────────────── MAIN COMPONENT ─────────────── */
export default function AuthPage() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [animKey, setAnimKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const on = () => setHovered(true),
      off = () => setHovered(false);
    const els = document.querySelectorAll("button, a, input");
    els.forEach((el) => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("mouseenter", on);
        el.removeEventListener("mouseleave", off);
      });
  });

  return (
    <>
      <div className="auth-root">
        {/* ── LEFT ── */}
        <LeftSide
          mode={mode}
          setMode={setMode}
          animKey={animKey}
          setAnimKey={setAnimKey}
        />

        {/* ── RIGHT ── */}
        <RightSide
          mode={mode}
          setMode={setMode}
          animKey={animKey}
          setAnimKey={setAnimKey}
        />
      </div>
    </>
  );
}

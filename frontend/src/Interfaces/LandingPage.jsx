import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Landing-Page/Navbar";
import Hero from "../components/Landing-Page/Hero";
import Stats from "../components/Landing-Page/Stats";
import Features from "../components/Landing-Page/Features";
import Footer from "../components/Landing-Page/Footer";
import CTA from "../components/Landing-Page/CTA";
import Highlight from "../components/Landing-Page/Highlight";
import Steps from "../components/Landing-Page/Steps";
import CSS from "../styles/LandingPageCSS.js";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hoverable = document.querySelectorAll(
      "button, a, .feature-card, .chat-item, .hl-card, .step",
    );
    const on = () => setHovered(true);
    const off = () => setHovered(false);
    hoverable.forEach((el) => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    return () =>
      hoverable.forEach((el) => {
        el.removeEventListener("mouseenter", on);
        el.removeEventListener("mouseleave", off);
      });
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal, .step").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      {/* NAV */}
      <Navbar scrolled={scrolled} />

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <Stats />

      {/* FEATURES */}
      <Features />

      {/* HOW IT WORKS */}
      <Steps />

      {/* HIGHLIGHT */}
      <Highlight />

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

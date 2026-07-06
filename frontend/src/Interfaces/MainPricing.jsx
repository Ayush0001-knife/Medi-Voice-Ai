import { useState, useEffect } from "react";
import "../styles/MainPricing.css";
import Header from "../components/Main-Pricing/Header.jsx";
import Plans from "../components/Main-Pricing/Plans.jsx";
import ComparisionTable from "../components/Main-Pricing/ComparisionTable.jsx";
import Faq from "../components/Main-Pricing/Faq.jsx";
import Trust from "../components/Main-Pricing/Trust.jsx";

export default function MainPricing() {
  const [yearly, setYearly] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  const showToast = (msg, type = "") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  return (
    <>
      <div className="page">
        {/* HEADER */}
        <Header yearly={yearly} setYearly={setYearly} />

        {/* PLANS */}
        <Plans yearly={yearly} showToast={showToast} />

        {/* COMPARISON TABLE */}
        <ComparisionTable />

        {/* FAQ */}
        <Faq />

        {/* TRUST */}
        <Trust />
      </div>

      {toast && (
        <div className={`toast${toast.type === "green" ? " green" : ""}`}>
          {toast.msg}
        </div>
      )}
    </>
  );
}

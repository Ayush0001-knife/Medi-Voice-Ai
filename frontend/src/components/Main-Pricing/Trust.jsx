import React from "react";

const Trust = () => {
  return (
    <div className="trust-row">
      {[
        "🔒 HIPAA Compliant",
        "🌍 30+ Languages",
        "⭐ 4.9/5 Rating",
        "👥 50,000+ Patients",
        "🏥 200+ Hospitals",
      ].map((t, i) => (
        <div key={i} className="trust-item">
          <span className="trust-icon">{t.split(" ")[0]}</span>
          {t.split(" ").slice(1).join(" ")}
        </div>
      ))}
    </div>
  );
};

export default Trust;

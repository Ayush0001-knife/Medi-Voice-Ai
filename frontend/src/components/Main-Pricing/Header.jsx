import React from "react";

const Header = ({ yearly, setYearly }) => {
  return (
    <div className="pricing-header">
      <div className="ph-eyebrow">
        <div className="ph-dot" />
        Transparent Pricing
      </div>
      <div className="ph-title">
        Invest in your <span>health</span>,<br />
        not your bills.
      </div>
      <div className="ph-sub">
        Start free, upgrade when you need more. No hidden fees, no surprise
        charges.
      </div>

      {/* billing toggle */}
      <div className="billing-toggle">
        <span className={`bt-label${!yearly ? " active" : ""}`}>Monthly</span>
        <div className="toggle-track" onClick={() => setYearly((v) => !v)}>
          <div className={`toggle-thumb${yearly ? " right" : ""}`} />
        </div>
        <span className={`bt-label${yearly ? " active" : ""}`}>Annual</span>
        <span className="bt-save">Save 35%</span>
      </div>
    </div>
  );
};

export default Header;

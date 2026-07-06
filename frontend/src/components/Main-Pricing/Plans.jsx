import React from "react";
import PLANS from "../../data/Main-Pricing/plans.js";

const Plans = ({ yearly, showToast }) => {
  const price = (p) => (yearly ? p.yearlyPrice : p.monthlyPrice);

  return (
    <div className="plans-grid">
      {PLANS.map((plan, i) => (
        <div
          key={plan.id}
          className={`plan-card${plan.popular ? " popular" : ""}${plan.enterprise ? " enterprise" : ""}`}
          style={{ animationDelay: plan.delay }}
        >
          {plan.popular && <div className="popular-badge">Most Popular</div>}
          <div className="pc-icon" style={{ marginTop: plan.popular ? 20 : 0 }}>
            {plan.icon}
          </div>
          <div className="pc-name">{plan.name}</div>
          <div className="pc-desc">{plan.desc}</div>
          <div className="pc-price">
            <span className="pc-currency">₹</span>
            <span className="pc-amount">
              {price(plan) === 0 ? "0" : price(plan)}
            </span>
          </div>
          <div className="pc-period">
            {price(plan) === 0
              ? "Forever free"
              : `per month${yearly ? " · billed annually" : ""}`}
          </div>
          <div className="pc-save">
            {yearly && price(plan) > 0
              ? `You save ₹${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year`
              : " "}
          </div>
          <ul className="pc-features">
            {plan.features.map((f, fi) => (
              <li key={fi} className={`pf-item${!f.yes ? " dim" : ""}`}>
                <div className={`pf-check ${f.yes ? "yes" : "no"}`}>
                  {f.yes ? "✓" : "✕"}
                </div>
                {f.label}
              </li>
            ))}
          </ul>
          <button
            className={`pc-btn ${plan.btnStyle}`}
            onClick={() =>
              showToast(
                plan.id === "enterprise"
                  ? "Redirecting to sales…"
                  : `${plan.name} plan selected ✓`,
                plan.popular ? "green" : "",
              )
            }
          >
            {plan.btnLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Plans;

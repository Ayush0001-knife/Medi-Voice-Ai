import React from "react";
import FAQS from "../../data/Main-Pricing/faqs.js";
import { useState } from "react";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="faq-section">
      <div className="faq-title">Frequently Asked Questions</div>
      <div className="faq-sub">
        Everything you need to know before subscribing.
      </div>
      <div className="faq-grid">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`faq-item${openFaq === i ? " open" : ""}`}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <div className="faq-q">
              {faq.q}
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

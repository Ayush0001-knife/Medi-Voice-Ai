import React from "react";
import COMPARE_ROWS from "../../data/Main-Pricing/compare-rows.js";

const ComparisionTable = () => {
  return (
    <div className="comparison">
      <div className="comp-title">Full Feature Comparison</div>
      <div className="comp-sub">
        Everything side by side so you can choose with confidence.
      </div>
      <table className="comp-table">
        <thead>
          <tr>
            <th style={{ width: "35%" }}>Feature</th>
            <th>Starter</th>
            <th className="comp-pop-col">Pro ⭐</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE_ROWS.map((row, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600, color: "var(--navy)" }}>
                {row.feature}
              </td>
              <td>
                {row.free === "✓" ? (
                  <span className="comp-yes">✓</span>
                ) : row.free === "✗" ? (
                  <span className="comp-no">✕</span>
                ) : (
                  <span className="comp-val">{row.free}</span>
                )}
              </td>
              <td className="comp-pop-col">
                {row.pro === "✓" ? (
                  <span className="comp-yes">✓</span>
                ) : row.pro === "✗" ? (
                  <span className="comp-no">✕</span>
                ) : (
                  <span className="comp-val">{row.pro}</span>
                )}
              </td>
              <td>
                {row.ent === "✓" ? (
                  <span className="comp-yes">✓</span>
                ) : row.ent === "✗" ? (
                  <span className="comp-no">✕</span>
                ) : (
                  <span className="comp-val">{row.ent}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisionTable;

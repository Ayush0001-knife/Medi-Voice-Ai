import React from "react";

const Timeline = ({ filtered, setModal }) => {
  return (
    <>
      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <div className="empty-title">No consultations found</div>
          <div className="empty-sub">
            Try adjusting your search or filter settings.
          </div>
        </div>
      ) : (
        <div className="timeline">
          {filtered.map((group, gi) => (
            <div key={group.id} className="timeline-group">
              <div className="tg-label">{group.month}</div>
              {group.items.map((item, ii) => (
                <div
                  key={item.id}
                  className="h-card"
                  style={{
                    animationDelay: `${(gi * group.items.length + ii) * 0.08}s`,
                  }}
                  onClick={() => setModal(item)}
                >
                  <div className="hc-avatar">{item.emoji}</div>
                  <div className="hc-body">
                    <div className="hc-top">
                      <span className="hc-name">{item.name}</span>
                      <span className="hc-spec-tag">{item.spec}</span>
                      {item.premium && (
                        <span className="hc-premium">Premium</span>
                      )}
                    </div>
                    <div className="hc-date">📅 {item.date}</div>
                    <div className="hc-notes">{item.notes}</div>
                    <div className="hc-tags">
                      {item.tags.map((t, ti) => (
                        <span key={ti} className={`hc-tag ${t.c}`}>
                          {t.l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hc-right">
                    <div className={`hc-status ${item.status}`}>
                      {item.statusLabel}
                    </div>
                    {item.rating > 0 && (
                      <div className="hc-rating">
                        <span>★</span>
                        {item.rating}.0
                      </div>
                    )}
                    <button
                      className="hc-action"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModal(item);
                      }}
                    >
                      {item.status === "done" ? "View →" : "Details →"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;

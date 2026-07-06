import React, { useState } from "react";

const DetailModal = ({ modal, setModal, showToast }) => {
  const [stars, setStars] = useState({});

  return (
    <>
      {modal && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">Consultation Details</div>
              <button className="modal-close" onClick={() => setModal(null)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-section-title">Doctor</div>
                <div className="modal-doctor-row">
                  <div className="modal-avatar">{modal.emoji}</div>
                  <div>
                    <div className="modal-doc-name">{modal.name}</div>
                    <div className="modal-doc-spec">
                      {modal.spec} · 📅 {modal.date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-section">
                <div className="modal-section-title">Clinical Notes</div>
                <div className="modal-notes-box">{modal.notes}</div>
              </div>
              {modal.prescriptions?.length > 0 && (
                <div className="modal-section">
                  <div className="modal-section-title">Prescriptions</div>
                  <div className="modal-prescription">
                    {modal.prescriptions.map((p, i) => (
                      <div key={i} className="prescription-item">
                        <div className="pi-name">💊 {p.name}</div>
                        <div className="pi-dose">{p.dose}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {modal.status === "done" && (
                <div className="modal-section">
                  <div className="modal-section-title">Rate this session</div>
                  <div className="modal-star-row">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className={`modal-star${(stars[modal.id] || modal.rating) >= s ? " lit" : ""}`}
                        onClick={() =>
                          setStars((prev) => ({ ...prev, [modal.id]: s }))
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="modal-actions-row">
                <button
                  className="modal-btn outline"
                  onClick={() => setModal(null)}
                >
                  Close
                </button>
                <button
                  className="modal-btn solid"
                  onClick={() => {
                    showToast("Summary downloaded ✓");
                    setModal(null);
                  }}
                >
                  Download Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;

import React from "react";
import TIME_SLOTS from "../../data/Main-Home/time-slots.js";
import UNAVAIL from "../../data/Main-Home/unvail.js";

const BookingModal = ({
  modal,
  setModal,
  selectedSlot,
  setSelectedSlot,
  confirmBooking,
}) => {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && setModal(null)}
    >
      <div className="modal">
        <div className="modal-title">Book a Consultation</div>
        <div className="modal-sub">Choose a time slot that works for you</div>

        <div className="modal-doctor">
          <div className="modal-avatar">{modal.emoji}</div>
          <div>
            <div className="modal-doctor-name">{modal.name}</div>
            <div className="modal-doctor-spec">
              {modal.spec} · ★ {modal.rating}
            </div>
          </div>
        </div>

        <div className="modal-label">Available slots — Thu, Jul 3</div>
        <div className="time-slots">
          {TIME_SLOTS.map((slot, i) => (
            <button
              key={slot}
              className={`time-slot${selectedSlot === slot ? " selected" : ""}${UNAVAIL.includes(i) ? " unavail" : ""}`}
              onClick={() => !UNAVAIL.includes(i) && setSelectedSlot(slot)}
              disabled={UNAVAIL.includes(i)}
            >
              {slot}
            </button>
          ))}
        </div>

        <div className="modal-actions">
          <button className="modal-cancel" onClick={() => setModal(null)}>
            Cancel
          </button>
          <button className="modal-confirm" onClick={confirmBooking}>
            Confirm Booking →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

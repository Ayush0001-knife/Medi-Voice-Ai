import SPECIALTIES from "../../data/Main-Home/specialties.js";
import BookingModal from "./BookingModal.jsx";

const DoctorsSection = ({
  specialty,
  setSpecialty,
  filteredDoctors,
  setModal,
  setSelectedSlot,
  confirmBooking,
  modal,
  selectedSlot,
}) => {
  return (
    <>
      <div className="doctors-section">
        <div className="section-header">
          <div>
            <div className="section-title">AI Specialist Doctor Agents</div>
            <div className="section-sub">
              Expert AI agents trained on millions of clinical conversations
            </div>
          </div>
          <button className="see-all">See all →</button>
        </div>

        {/* specialty filter */}
        <div className="filter-chips">
          {SPECIALTIES.map((s) => (
            <button
              key={s}
              className={`chip${specialty === s ? " active" : ""}`}
              onClick={() => setSpecialty(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="doctors-grid">
          {filteredDoctors.map((doc, i) => (
            <div
              key={doc.id}
              className="doctor-card"
              style={{ animationDelay: `${doc.delay}s` }}
            >
              <div className="dc-img">
                <span style={{ position: "relative", zIndex: 1, fontSize: 60 }}>
                  {doc.emoji}
                </span>
                <div
                  className={`dc-badge ${doc.tier === "premium" ? "premium" : "free"}`}
                >
                  {doc.tier === 1 ? "Premium" : "Free"}
                </div>
              </div>
              <div className="dc-body">
                <div className="dc-name">{doc.name}</div>
                <div className="dc-spec">{doc.spec}</div>
                <div className="dc-meta">
                  <div className="dc-rating">
                    <span>★</span> {doc.rating}
                  </div>
                  <div className="dc-patients">
                    {doc.patient_attended} patients
                  </div>
                </div>
                <button
                  className="dc-btn"
                  onClick={() => {
                    setModal(doc);
                    setSelectedSlot(null);
                  }}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && (
        <BookingModal
          modal={modal}
          setModal={setModal}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          confirmBooking={confirmBooking}
        />
      )}
    </>
  );
};

export default DoctorsSection;

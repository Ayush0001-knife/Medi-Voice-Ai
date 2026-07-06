import { useState, useEffect, useRef } from "react";
import "../styles/MainDashboard.css";
import DOCTORS from "../data/Main-Home/doctors.js";
import Navbar from "../components/Main-Dashboard/Navbar.jsx";
import MainHome from "./MainHome.jsx";
import MainHistory from "./MainHistory.jsx";
import MainProfile from "./Mainprofile.jsx";
import MainPricing from "./MainPricing.jsx";

/* ─────────────── COMPONENT ─────────────── */
export default function MainDashboard() {
  const [tab, setTab] = useState("home");
  const [czTab, setCzTab] = useState("recent");
  const [specialty, setSpecialty] = useState("All");
  const [profileOpen, setProfileOpen] = useState(false);
  const [modal, setModal] = useState(null); // doctor object
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [toast, setToast] = useState(null);
  const profileRef = useRef(null);

  /* inject CSS */
  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  /* close profile on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setProfileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const showToast = (msg, type = "") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const confirmBooking = () => {
    if (!selectedSlot) {
      showToast("Please select a time slot first");
      return;
    }
    setModal(null);
    setSelectedSlot(null);
    showToast(`Booked with ${modal.name} at ${selectedSlot} ✓`, "green");
  };

  const filteredDoctors =
    specialty === "All"
      ? DOCTORS
      : DOCTORS.filter((d) =>
          d.spec
            .toLowerCase()
            .includes(
              specialty
                .toLowerCase()
                .replace("ology", "")
                .replace("ics", "")
                .replace("iatry", "iat"),
            ),
        );

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="db-root">
        {/* ── NAVBAR ── */}
        <Navbar
          tab={tab}
          setTab={setTab}
          profileRef={profileRef}
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
          showToast={showToast}
        />

        {/* ── BODY ── */}
        {tab === "home" && (
          <MainHome
            showToast={showToast}
            today={today}
            czTab={czTab}
            setCzTab={setCzTab}
            specialty={specialty}
            setSpecialty={setSpecialty}
            filteredDoctors={filteredDoctors}
            setModal={setModal}
            setSelectedSlot={setSelectedSlot}
            confirmBooking={confirmBooking}
            modal={modal}
            selectedSlot={selectedSlot}
          />
        )}

        {tab === "history" && <MainHistory />}
        {tab === "pricing" && <MainPricing />}
        {tab === "profile" && <MainProfile />}
      </div>

      {/* ── TOAST ── */}
      {toast && (
        <div className={`toast${toast.type === "green" ? " green" : ""}`}>
          {toast.msg}
        </div>
      )}
    </>
  );
}

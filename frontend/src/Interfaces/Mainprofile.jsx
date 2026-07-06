import { useState, useEffect, useRef } from "react";
import "../styles/MainProfile.css";
import NOTIF_DEFAULTS from "../data/Main-Profile/Notif-Defaults.js";
import Hero from "../components/Main-Profile/Hero.jsx";
import Sidebar from "../components/Main-Profile/Sidebar.jsx";
import Content from "../components/Main-Profile/Content.jsx";
import BodyGrid from "../components/Main-Profile/BodyGrid.jsx";
import ConfirmModal from "../components/Main-Profile/ConfirmModal.jsx";

export default function MainProfile() {
  const [activeSection, setActiveSection] = useState("personal");
  const [notifs, setNotifs] = useState(NOTIF_DEFAULTS);
  const [editing, setEditing] = useState(false);
  const [toast, setToast] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);
  const [form, setForm] = useState({
    name: "Arjun Sharma",
    age: "28",
    email: "arjun@hospital.in",
    phone: "+91 98765 43210",
    city: "New Delhi",
    blood: "A+",
    height: "178 cm",
    weight: "72 kg",
  });

  const showToast = (msg, type = "") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const handleNav = (id) => {
    if (id === "signout") {
      setConfirmModal("signout");
      return;
    }
    setActiveSection(id);
    setEditing(false);
  };

  const saveForm = () => {
    setEditing(false);
    showToast("Profile updated ✓", "green");
  };

  return (
    <>
      <div className="page">
        {/* HERO */}
        <Hero showToast={showToast} />

        {/* BODY GRID */}
        <BodyGrid
          activeSection={activeSection}
          handleNav={handleNav}
          editing={editing}
          form={form}
          saveForm={saveForm}
          setEditing={setEditing}
          setForm={setForm}
          notifs={notifs}
          setNotifs={setNotifs}
          showToast={showToast}
          setConfirmModal={setConfirmModal}
        />
      </div>

      {/* CONFIRM MODAL */}
      {confirmModal && (
        <ConfirmModal
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          showToast={showToast}
        />
      )}

      {toast && (
        <div className={`toast${toast.type === "green" ? " green" : ""}`}>
          {toast.msg}
        </div>
      )}
    </>
  );
}

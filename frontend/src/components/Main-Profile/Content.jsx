import React from "react";
import Activity from "./Activity.jsx";
import Notifications from "./Notifications.jsx";
import Plan from "./Plan.jsx";
import Vitals from "./Vitals.jsx";
import HealthProfile from "./HealthProfile.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Security from "./Security.jsx";

const Content = ({
  activeSection,
  editing,
  form,
  saveForm,
  setEditing,
  setForm,
  notifs,
  setNotifs,
  showToast,
  setConfirmModal,
}) => {
  return (
    <div className="content-panel">
      {/* PERSONAL INFO */}
      {activeSection === "personal" && (
        <PersonalInfo
          editing={editing}
          form={form}
          saveForm={saveForm}
          setEditing={setEditing}
          setForm={setForm}
        />
      )}

      {/* HEALTH PROFILE */}
      {activeSection === "health" && <HealthProfile showToast={showToast} />}

      {/* VITALS */}
      {activeSection === "vitals" && <Vitals showToast={showToast} />}

      {/* PLAN */}
      {activeSection === "plan" && (
        <Plan showToast={showToast} setConfirmModal={setConfirmModal} />
      )}

      {/* NOTIFICATIONS */}
      {activeSection === "notifs" && (
        <Notifications
          showToast={showToast}
          setNotifs={setNotifs}
          notifs={notifs}
        />
      )}

      {/* SECURITY */}
      {activeSection === "security" && (
        <Security showToast={showToast} setConfirmModal={setConfirmModal} />
      )}

      {/* ACTIVITY */}
      {activeSection === "activity" && <Activity />}
    </div>
  );
};

export default Content;

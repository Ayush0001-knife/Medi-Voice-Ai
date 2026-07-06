import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const BodyGrid = ({
  activeSection,
  handleNav,
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
    <div className="body-grid">
      {/* SIDEBAR */}
      <Sidebar activeSection={activeSection} handleNav={handleNav} />

      {/* CONTENT */}
      <Content
        activeSection={activeSection}
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
  );
};

export default BodyGrid;

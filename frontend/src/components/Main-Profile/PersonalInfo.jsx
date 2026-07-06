import React from "react";

const PersonalInfo = ({ editing, form, saveForm, setEditing, setForm }) => {
  return (
    <div className="s-card" style={{ animationDelay: ".25s" }}>
      <div className="s-card-header">
        <div className="s-card-title">👤 Personal Information</div>
        {editing ? (
          <button
            className="s-card-edit"
            style={{ color: "var(--green-d)" }}
            onClick={saveForm}
          >
            Save Changes ✓
          </button>
        ) : (
          <button className="s-card-edit" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>
      <div className="s-card-body">
        <div className="form-grid">
          {[
            { k: "name", label: "Full Name" },
            { k: "age", label: "Age" },
            { k: "email", label: "Email Address" },
            { k: "phone", label: "Phone Number" },
            { k: "city", label: "City" },
            { k: "blood", label: "Blood Group" },
          ].map((field) => (
            <div key={field.k} className="form-field">
              <div className="field-label">{field.label}</div>
              {editing ? (
                <input
                  className="field-input"
                  value={form[field.k]}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      [field.k]: e.target.value,
                    }))
                  }
                />
              ) : (
                <div className="field-value">{form[field.k]}</div>
              )}
            </div>
          ))}
        </div>
        {editing && (
          <button className="save-btn" onClick={saveForm}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;

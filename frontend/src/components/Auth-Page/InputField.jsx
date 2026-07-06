import { useState } from "react";

function InputField({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
  hasEye,
}) {
  const [show, setShow] = useState(false);
  const actualType = hasEye ? (show ? "text" : "password") : type;
  return (
    <div className="field">
      <div className="field-label">{label}</div>
      <div className="input-wrap">
        <span className="input-icon">{icon}</span>
        <input
          className={`auth-input${error ? " error-input" : ""}`}
          type={actualType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          style={hasEye ? { paddingRight: 40 } : {}}
        />
        {hasEye && (
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShow((v) => !v)}
          >
            {show ? "🙈" : "👁️"}
          </button>
        )}
      </div>
      {error && <div className="field-error">⚠ {error}</div>}
    </div>
  );
}

export default InputField;

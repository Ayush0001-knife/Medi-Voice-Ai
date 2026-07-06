import { useState } from "react";

function PasswordInput({ value, onChange, error, placeholder, autoComplete }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <input
        className={`auth-input${error ? " error-input" : ""}`}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        style={{ paddingRight: 40 }}
      />
      <button
        type="button"
        className="eye-btn"
        onClick={() => setShow((v) => !v)}
      >
        {show ? "🙈" : "👁️"}
      </button>
    </>
  );
}

export default PasswordInput;

import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const RightSide = ({ mode, setMode, animKey, setAnimKey }) => {
  const switchMode = (m) => {
    setMode(m);
    setAnimKey((k) => k + 1);
  };
  return (
    <div className="auth-right">
      <div className="auth-card" key={`card`}>
        {/* tab switcher */}
        <div className="tab-bar">
          <div
            className={`tab-slider${mode === "register" ? " on-register" : ""}`}
          />
          <button
            className={`tab-btn${mode === "login" ? " active" : ""}`}
            onClick={() => switchMode("login")}
          >
            Sign in
          </button>
          <button
            className={`tab-btn${mode === "register" ? " active" : ""}`}
            onClick={() => switchMode("register")}
          >
            Register
          </button>
        </div>

        {/* forms */}
        <div key={animKey}>
          {mode === "login" ? (
            <LoginForm onSwitch={() => switchMode("register")} />
          ) : (
            <RegisterForm onSwitch={() => switchMode("login")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSide;

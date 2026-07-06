import InputField from "./InputField";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import StrengthMeter from "./StrengthMeter";
import { getStrength } from "../../utils/passwordStrength";
import { useNavigate } from "react-router-dom";

function RegisterForm({ onSwitch }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Enter your full name";
    const age = parseInt(form.age);
    if (!form.age || isNaN(age) || age < 18 || age > 100)
      e.age = "Age must be between 18 and 100";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/))
      e.email = "Enter a valid email address";
    if (getStrength(form.password) < 0)
      e.password = "Choose a stronger password";
    if (form.confirm !== form.password) e.confirm = "Passwords don't match";
    return e;
  };

  const submit = async () => {
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length) return;

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/patients/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          age: Number(form.age),
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show Success Popup
        setSuccess(true);
        console.log(data);
        localStorage.setItem("patient", JSON.stringify(data.patient));

        // Wait 2.5 seconds then redirect
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      } else {
        console.error("Registration Error:", data);
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Server Error:", error);
      alert("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return (
      <div className="success-overlay">
        <div className="success-icon">🎉</div>
        <div className="success-title">Account created!</div>
        <div className="success-sub">
          Welcome to MediVoice AI, {form.name.split(" ")[0]}. Your journey
          starts here.
        </div>
      </div>
    );

  return (
    <div className="form-slide">
      <div className="card-title">Create account</div>
      <div className="card-sub">Join thousands of healthcare professionals</div>

      <div className="auth-form">
        <div className="form-row">
          <InputField
            label="Full name"
            icon="👤"
            placeholder="Dr. Arjun Sharma"
            value={form.name}
            onChange={set("name")}
            error={errors.name}
            autoComplete="name"
          />
          <InputField
            label="Age"
            icon="🎂"
            type="number"
            placeholder="28"
            value={form.age}
            onChange={set("age")}
            error={errors.age}
            autoComplete="off"
          />
        </div>

        <InputField
          label="Email address"
          icon="✉️"
          type="email"
          placeholder="doctor@hospital.com"
          value={form.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />

        <div className="field">
          <div className="field-label">Password</div>
          <div className="input-wrap">
            <span className="input-icon">🔒</span>
            <PasswordInput
              value={form.password}
              onChange={set("password")}
              error={errors.password}
              placeholder="Create a strong password"
              autoComplete="new-password"
            />
          </div>
          {errors.password && (
            <div className="field-error">⚠ {errors.password}</div>
          )}
          <StrengthMeter password={form.password} />
        </div>

        <InputField
          label="Confirm password"
          icon="✅"
          hasEye
          placeholder="Re-enter your password"
          value={form.confirm}
          onChange={set("confirm")}
          error={errors.confirm}
          autoComplete="new-password"
        />

        <button
          type="button"
          className={`submit-btn${loading ? " loading" : ""}`}
          onClick={submit}
        >
          {loading ? (
            <>
              <span className="btn-spinner" />
              Creating account…
            </>
          ) : (
            "Create account →"
          )}
        </button>
      </div>

      <div className="toggle-text">
        Already have an account?{" "}
        <button type="button" className="toggle-link" onClick={onSwitch}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;

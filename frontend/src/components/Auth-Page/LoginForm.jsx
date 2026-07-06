import InputField from "./InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/))
      e.email = "Enter a valid email address";
    if (form.password.length < 6)
      e.password = "Password must be at least 6 characters";
    return e;
  };

  const submit = async () => {
    const e = validate();
    setErrors(e);

    if (Object.keys(e).length) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/patient/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Login Success:", data);
        localStorage.setItem("patient", JSON.stringify(data.patient));
        // Show success popup
        setSuccess(true);

        // Wait 2.5 seconds before redirecting
        await new Promise((resolve) => setTimeout(resolve, 2500));

        navigate("/dashboard");
      } else {
        console.error("Login Failed:", data);

        setErrors({
          general: data.message || "Invalid email or password",
        });
      }
    } catch (error) {
      console.error("Server Error:", error);

      setErrors({
        general: "Unable to connect to the server.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return (
      <div className="success-overlay">
        <div className="success-icon">✅</div>
        <div className="success-title">Welcome back!</div>
        <div className="success-sub">You're now signed in to MediVoice AI.</div>
      </div>
    );

  return (
    <div className="form-slide-left">
      <div className="card-title">Sign in</div>
      <div className="card-sub">Access your MediVoice AI dashboard</div>

      <div className="auth-form">
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
        <InputField
          label="Password"
          icon="🔒"
          hasEye
          placeholder="Enter your password"
          value={form.password}
          onChange={set("password")}
          error={errors.password}
          autoComplete="current-password"
        />

        <div style={{ textAlign: "right", marginTop: -8, marginBottom: 16 }}>
          <button
            type="button"
            className="toggle-link"
            style={{ fontSize: 12 }}
          >
            Forgot password?
          </button>
        </div>

        <button
          type="button"
          className={`submit-btn${loading ? " loading" : ""}`}
          onClick={submit}
        >
          {loading ? (
            <>
              <span className="btn-spinner" />
              Signing in…
            </>
          ) : (
            "Sign in →"
          )}
        </button>
      </div>

      <div className="divider">or continue with</div>

      <button type="button" className="social-btn">
        <span className="google-icon">🌐</span> Continue with Google
      </button>

      <div className="toggle-text">
        Don't have an account?{" "}
        <button type="button" className="toggle-link" onClick={onSwitch}>
          Create one
        </button>
      </div>
    </div>
  );
}

export default LoginForm;

import { useState } from "react";
import styles from "./Login.module.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  function validateForm(name, value) {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters"
          : "";
      default:
        return "";
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: validateForm(name, value),
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      email: validateForm("email", formData.email),
      password: validateForm("password", formData.password),
    };
    setFormErrors(newErrors);

    setTouched({
      email: true,
      password: true,
    });

    const isValid = Object.values(newErrors).every((msg) => msg === "");
    console.log(formData);
    
    if (isValid) {
      setLoading(true);  // <-- Start loading (disable submit button)
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // <-- Fixed: headers must be an object
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (response.ok) {
          setSubmitted(true);  // <-- Only called once here (avoid duplicate calls)
      
          
          localStorage.setItem("token", data.token);            
          localStorage.setItem("user", JSON.stringify(data.user));

          setFormErrors({});
          setTouched({});
          setFormData({
            email: "",
            password: "",
          });
        } else {
          setSubmitted(false);

          // Corrected condition: check for data.errors array, map errors properly
          if (data.errors && Array.isArray(data.errors)) {
            const backendErrors = {};
            data.errors.forEach(({ param, message, msg }) => {
              backendErrors[param] = message || msg;
            });
            setFormErrors((prev) => ({
              ...prev,
              ...backendErrors,     // <-- Spread backendErrors correctly
            }));
          } else {
            console.error(data);
          }
        }
      } catch (err) {
        setSubmitted(false);
        setFormErrors((prev) => ({
          ...prev,
          email: "Network or server error",  // Show error on email field as generic fallback
        }));
        console.error("Network error:", err);
      } finally {
        setLoading(false); // <-- Stop loading (re-enable submit button)
      }
    } else {
      setSubmitted(false);
      console.log("Fix credentials to login");
    }
  }

  function showError(field) {
    return touched[field] && formErrors[field];
  }

  const hasErrors =
    Object.values(formErrors).some((msg) => msg !== "") ||
    !formData.email ||
    !formData.password ||
    loading;    // <-- Disable submit when loading

  return (
    <div className={styles.centerContainer}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        aria-label="Login form"
      >
        <h2>Login</h2>

        {/* Improved error display for invalid credentials - case-insensitive check */}
        {!submitted &&
          (formErrors.email === "Invalid credentials" ||
           formErrors.email === "invalid credentials") && (
            <div className={styles.errorMsg} role="alert">
              Invalid credentials!
            </div>
          )}

        {submitted && (
          <div role="alert" className={styles.successMsg}>
            Login successful!
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("email") ? styles.error : styles.input}
            aria-invalid={!!showError("email")}
            aria-describedby="email-error"
            required
          />
          {showError("email") && (
            <div id="email-error" className={styles.errorMsg} role="alert">
              {formErrors.email}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("password") ? styles.error : styles.input}
            aria-invalid={!!showError("password")}
            aria-describedby="password-error"
            required
          />
          {showError("password") && (
            <div id="password-error" className={styles.errorMsg} role="alert">
              {formErrors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={hasErrors}   // <-- Button disabled when errors or loading
        >
          {loading ? "Logging in..." : "Login"} {/* Optional loading text */}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

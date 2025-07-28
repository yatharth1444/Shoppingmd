
import { useState } from "react";
import styles from "./Login.module.css"; // Your CSS module or style file

function LoginForm() {
  // Form state for inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Track which fields are touched (visited) by the user
  const [touched, setTouched] = useState({});

  // To show submission success message
  const [submitted, setSubmitted] = useState(false);

  // Validation errors for each field
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  // Validation function returning error message (empty string if valid)
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

  // Handle input changes and update errors in real-time
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update error messages as user types
    setFormErrors((prev) => ({
      ...prev,
      [name]: validateForm(name, value),
    }));
  }

  // Handle field blur to mark the field as "touched"
  function handleBlur(event) {
    const { name } = event.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  // Handle form submit: validate all fields, update touched, and show success or errors
  function handleSubmit(event) {
    event.preventDefault();
    // Run validation for all fields
    const newErrors = {
      email: validateForm("email", formData.email),
      password: validateForm("password", formData.password),
    };
    setFormErrors(newErrors);

    // Mark all fields as touched on submit
    setTouched({
      email: true,
      password: true,
    });

    // Check if there are any errors
    const isValid = Object.values(newErrors).every((msg) => msg === "");

    if (isValid) {
      setSubmitted(true);
      console.log("Logging in with details:", formData);
      // Put your actual login logic here
    } else {
      setSubmitted(false);
      console.log("Fix credentials to login");
    }
  }

  // Helper: show error only if field was touched and has an error
  function showError(field) {
    return touched[field] && formErrors[field];
  }

  // Determine if submit button should be disabled
  const hasErrors =
    Object.values(formErrors).some((msg) => msg !== "") ||
    !formData.email ||
    !formData.password;

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

        {submitted && (
          <div role="alert" className={styles.successMsg}>
            Login successful! (Simulation)
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
          disabled={hasErrors}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

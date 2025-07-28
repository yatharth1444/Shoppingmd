// import { useState } from "react"
// export default function Register(){
//     const [formData, setFormData] = useState({
//         name : "",
//         email: "",
//         password: ""
//     })
//     const [formError, setFormError] = useState({
//         email:"",
//         password: "",
//         name: ""
//     })
//    function isValidate(name, value) {
//      switch (name) {
//         case "name":
//             return value.trim() === "" ? "Name is required" : ""
//         case "email":
//             return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : "Invalid email"
//         case "password":
//             return value.length >  6 ? "" : "password must be 6 characters"
//         default:
//             return ""
           
//      }
//    }
      
    
//     const HandleSubmit = (e) =>{
//        e.preventDefault()
//        console.log("registered User with", formData)
//        const newError={
//         name : isValidate("name", formData.name),
//         email : isValidate("email", formData.email),
//         password: isValidate("password", formData.password)
//        }
//        setFormError(newError)
//        const isValid = Object.values(newError).every((msg)=>msg === "")
//        if(isValid){
//         console.log("no error");
        
//        }
//        else{
//         console.log("fix errors");
        
//        }
//     }
//     function HandleChange(event){
//       const {name, value} = event.target
//       setFormData((prev)=>({
//         ...prev,
//         [name] : value
//       }))
//       setFormError((prev) =>({
//         ...prev,
//         [name] : isValidate(name, value)
//       }))
//     }
//     return(
//         <div>
//             <form action="" onSubmit={HandleSubmit}>
//                 <input 
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={HandleChange}
//                   placeholder="Name"
//                 />
//                 {formError.name && <p style={{color: "red"}}>{formError.name}</p>}
//                 <input 
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={HandleChange}
//                   placeholder="Email"
//                 />
//                 {formError.email && <p style={{color: "red"}}>{formError.email}</p>}

//                 <input 
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={HandleChange}
//                   placeholder="Password"
//                 />
//                 {formError.password && <p style={{color: "red"}}>{formError.password}</p>}

//                 <button type="Submit">Register</button>
//             </form>
//         </div>
//     )
// }

import { useState } from "react";
import styles from "./Register.module.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function validateForm(name, value) {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
      case "password":
        return value.length < 6
          ? "Password must be at least 6 characters"
          : "";
      case "confirmPassword":
        if (value !== formData.password) return "Passwords do not match";
        return "";
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

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      name: validateForm("name", formData.name),
      email: validateForm("email", formData.email),
      password: validateForm("password", formData.password),
      confirmPassword: validateForm("confirmPassword", formData.confirmPassword),
    };
    setFormErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    const isValid = Object.values(newErrors).every((msg) => msg === "");

    if (isValid) {
      setSubmitted(true);
      console.log("Registration successful with details:", formData);

    } else {
      setSubmitted(false);
      console.log("Please fix errors to register");
    }
  }

  
  function showError(field) {
    return touched[field] && formErrors[field];
  }

  const hasErrors =
    Object.values(formErrors).some((msg) => msg !== "") ||
    !formData.name ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword;

  return (
    <div className={styles.centerContainer}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        aria-label="Registration form"
      >
        <h2>Register</h2>

        {submitted && (
          <div role="alert" className={styles.successMsg}>
            Registration successful! (Simulation)
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("name") ? styles.error : styles.input}
            aria-invalid={!!showError("name")}
            aria-describedby="name-error"
            required
          />
          {showError("name") && (
            <div id="name-error" className={styles.errorMsg} role="alert">
              {formErrors.name}
            </div>
          )}
        </div>

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

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={showError("confirmPassword") ? styles.error : styles.input}
            aria-invalid={!!showError("confirmPassword")}
            aria-describedby="confirmPassword-error"
            required
          />
          {showError("confirmPassword") && (
            <div
              id="confirmPassword-error"
              className={styles.errorMsg}
              role="alert"
            >
              {formErrors.confirmPassword}
            </div>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={hasErrors}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;

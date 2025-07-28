import { useState } from "react"

export default function Login(){

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const [FormError, setFormError] = useState({
        email: "",
        password:""
    })

    const validateForm = (name, value) =>{
        switch (name) {
            case "email":
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)? "": "Invalid Email"
            case "password":
                return value.length < 6 ? "" : "the password should be atleast 6 characters"
        
            default:
                return ""
        }
    }
    const handleSubmit= (event) =>{
        event.preventDefault()
       console.log("Login With", formData);
       const newErrors = {
          email: validateForm("email", formData.email),
          password: validateForm("password", formData.password)
       }
       setFormError(newErrors)
       const isValid = Object.values(newErrors).every((msg)=>msg === "")
       if(isValid){
         console.log("logging with details", formData);
         
       }else{
          console.log("Fix credentials");
          
       }

    }
    function HandleChange(event){
        const {name, value} = event.target 
       setFormData((prev)=>({
         ...prev,
         [name] : value
       }))
       setFormError((prev)=>({
        ...prev,
        [name] : validateForm(name, value)
       }))
    }
    return (
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input 
             type="email"
             name="email"
             value={formData.email}
             onChange={HandleChange}
             placeholder="Email"
             />
           {FormError.email && <p style={{color: "red"}}>{FormError.email}</p>}
             <input 
             type="password"
             name="password"
             value={formData.password}
             onChange={HandleChange}
             placeholder="Password"
             />
           {FormError.password && <p style={{color: "red"}}>{FormError.password}</p>}

             <button type="Submit">Login</button>
          </form>
        </div>
    )
}
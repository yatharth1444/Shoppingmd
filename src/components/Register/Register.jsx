import { useState } from "react"
export default function Register(){
    const [formData, setFormData] = useState({
        name : "",
        email: "",
        password: ""
    })
    const [formError, setFormError] = useState({
        email:"",
        password: "",
        name: ""
    })
   function isValidate(name, value) {
     switch (name) {
        case "name":
            return value.trim() === "" ? "Name is required" : ""
        case "email":
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : "Invalid email"
        case "password":
            return value.length >  6 ? "" : "password must be 6 characters"
        default:
            return ""
           
     }
   }
      
    
    const HandleSubmit = (e) =>{
       e.preventDefault()
       console.log("registered User with", formData)
       const newError={
        name : isValidate("name", formData.name),
        email : isValidate("email", formData.email),
        password: isValidate("password", formData.password)
       }
       setFormError(newError)
       const isValid = Object.values(newError).every((msg)=>msg === "")
       if(isValid){
        console.log("no error");
        
       }
       else{
        console.log("fix errors");
        
       }
    }
    function HandleChange(event){
      const {name, value} = event.target
      setFormData((prev)=>({
        ...prev,
        [name] : value
      }))
      setFormError((prev) =>({
        ...prev,
        [name] : isValidate(name, value)
      }))
    }
    return(
        <div>
            <form action="" onSubmit={HandleSubmit}>
                <input 
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={HandleChange}
                  placeholder="Name"
                />
                {formError.name && <p style={{color: "red"}}>{formError.name}</p>}
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={HandleChange}
                  placeholder="Email"
                />
                {formError.email && <p style={{color: "red"}}>{formError.email}</p>}

                <input 
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={HandleChange}
                  placeholder="Password"
                />
                {formError.password && <p style={{color: "red"}}>{formError.password}</p>}

                <button type="Submit">Register</button>
            </form>
        </div>
    )
}
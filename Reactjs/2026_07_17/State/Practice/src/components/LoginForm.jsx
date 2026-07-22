// import React from 'react'
import { useState } from "react"

const LoginForm = () => {
    const [formData , setFormData] = useState({email : "", password:""})
    
    // clg the value of formData
    const handleSubmit =(e)=>{
        e.preventDefault()

        console.log("Student details", formData);
    }
    const handleChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setFormData((prev)=> ({...prev , [name]:value}))
    }
    return (
    <div>LoginForm

        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    </div>

  )
}

export default LoginForm
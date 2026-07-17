// import React from 'react'
import Button from "./Button"
const Contact = () => {
    const handelClickContact = ()=>{
        alert("alert from contact")
    }

    return (
    <div>Contact
        <Button text={"From contact"} clickEvent={handelClickContact}/>
    </div>
  )
}

export default Contact
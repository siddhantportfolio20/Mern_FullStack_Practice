// import React from 'react'
import { useState } from "react"
const StudentDetails = () => {

    const [student , setStudent] = useState({name : "Siddhant",age:23})


    const handleClick = ()=>{
        setStudent((prev)=> ({...prev,age:25}))
    }
    const nameChange = (e) =>{
        setStudent((prev) => ({...prev,name:e.target.value}))
    }
    return (
    <div>StudentDetails

        <h2>Name: {student.name}</h2>
        <h2>Age: {student.age}</h2>
        <button onClick={handleClick}>Update age</button>
        <input type="text" name="" id="" onChange={nameChange} />
    </div>
  
)
}

export default StudentDetails
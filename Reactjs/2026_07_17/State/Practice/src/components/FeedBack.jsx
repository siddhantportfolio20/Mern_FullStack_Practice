// import React from 'react'
import { useState } from "react"
const FeedBack = () => {
    const [student,setStudent] = useState({course:"",feedback:""})
    function handleSubmit(e){
        e.preventDefault()
        console.log("Student feedback: ",student);
    }
    const handleTextarea=(e)=>{
        
        setStudent((prev)=>({...prev,feedback:e.target.value}))
    }
    const handleSelect = (e)=>{
        
        setStudent((prev)=> ({...prev,course:e.target.value}))
    }
  return (
    <div>FeedBack

        <form onSubmit={handleSubmit}>
            <select name="" id="" onChange={handleSelect}>
                <option>Select Course</option>
                <option value="react">React.js</option>
                <option value="js">JavaScript</option>
                <option value="css">Css</option>
            </select>

            <textarea name="" id="" placeholder="Write your feedback" onChange={handleTextarea}></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default FeedBack
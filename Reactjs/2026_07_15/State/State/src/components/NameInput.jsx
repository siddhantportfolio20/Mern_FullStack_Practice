// import React from 'react'
import { useState } from "react"
const NameInput = () => {
    const [name,setName] = useState("")
    const [user,setUser] = useState(["sisafdkj"])
    

    const handleClick = () =>{
        setUser([...user,name])
    }
    return (
        <div>NameInput
            <input type="text"
            placeholder="enter name" 
            onChange={(e)=> setName(e.target.value)}/>
            <h1>{name}</h1>
            <button onClick={handleClick}>addName</button>
            <ul>
                {user.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default NameInput
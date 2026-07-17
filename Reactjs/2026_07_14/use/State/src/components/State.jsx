// import React from 'react'
import { useState } from "react"
const State = () => {
    
    const [count,setCount]=useState(0)
    
    const handleIncrease = ()=>{
        setCount(count+1)
        console.log(count);
    }
    const handleDecrease = ()=>{
        if(count>0){
        setCount(count -1)
        }
        console.log(count);
    }
    
    return (
    <div>State
        <h1>Count {count}</h1>
        <button onClick={handleIncrease}>increase </button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default State
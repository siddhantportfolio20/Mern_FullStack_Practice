// import React from 'react'
import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
    
console.log("render phase : " + count);
    const handleClick =()=>{

        console.log("Count value before " + {count});
        setCount(count + 1)
        console.log("count value After" + {count});
    }
    return (
    <div>Counter
        <h1>Counter : {count}</h1>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter



// output 
// click -1 
// 'before setCount value ' -> 0
// 'after setCount value' -> 0
// "Render phase :"  -> 1

// click - 2
// 'before setCount value ' -> 1
// 'after setCount value' -> 1
// "Render phase :"  -> 2


// In react , state updates or not immediate 
// when you call a setState , you are scheduling an update for the next render 
// Inside your current render , the state values don't change 
// if you log the value inside the eventhandler you will always get thhe same value
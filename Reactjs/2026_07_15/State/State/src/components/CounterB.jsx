// import React from 'react'
import { useState } from "react"
const CounterB = () => {
    // lazy initialization 
    // the below function will run as soon as the component renders (and only then)
    // this is usefull when you have to do any heavy computation to calculate the inital state 
    // like rendering from local storage of fetching data 
    
    
    const [count, setCount] = useState(()=>{
        console.log("runs in inital render");
        return 0 

    })
  
    return (
    <div>CounterB
        <h2>Counter b : {count}</h2>
        <button onClick={()=> setCount(count +1)}>Increase</button>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default CounterB
// import React from 'react'
import { useRef , useState } from "react"
const Counter = () => {
  const ref = useRef(0)
  
  const [count , setCount] =useState(0)
  console.log("component rendering");
  
  const increaseRef = () =>{
    ref.current = ref.current +1
    console.log(ref);
  }
  return (
    <div>
      <h1>UseReff</h1>
      <h2>Count {count}</h2>
      <h3>Ref value: {ref.current}</h3>
      <button onClick={increaseRef}>Increase Ref</button>
      <button onClick={()=> setCount(prev => prev +1)}>Increase Count</button>
    </div>
  )
}

export default Counter
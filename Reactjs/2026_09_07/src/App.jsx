// import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, increaseByStep } from "./slice/reduxjs"
import { useState } from "react"
import { multiply } from "./slice/multiplyer"

const App = () => {
  const dispatch = useDispatch()
  const [input , setInput] = useState(1)
  console.log(typeof input);
  const [mul , setMul] = useState(1)
  
  return (
    <div>

      <h1>Counter : {useSelector((state) => state.counter.value)}</h1>
      
      
      <button onClick={()=>dispatch(increase())}>Increase</button>
      <button onClick={()=> dispatch(decrease())}>Decrease</button>
      
      <br />
      <input type="number" placeholder="Enter the step number"  onChange={(e)=>setInput(Number(e.target.value))} />
      <button onClick={()=> dispatch(increaseByStep({step:input}))}>Increase by Step</button>
      <br /> ---------------------------------------------------------------------
    <br />
      <h1>
        Multiply : {useSelector((state)=>state.multiplyer.value)}
      </h1>
      <input type="number" placeholder="Enter multipy number" onChange={(e)=>setMul(Number(e.target.value))}/>
      <button onClick={()=>{dispatch(multiply({step:mul}))}}>Multiply</button>
    
    <br />
    <h1>---------------------------------------------------</h1>
    <br />
    <h1>Shopping cart </h1>

    

    </div>
  )
}

export default App
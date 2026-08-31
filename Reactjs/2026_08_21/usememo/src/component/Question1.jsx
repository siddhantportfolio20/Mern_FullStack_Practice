// import React from 'react'

import { useMemo, useState } from "react"

const Question1 = () => {
  const [name,setName] = useState('')
  const [count , setCount] = useState(0)
  
  function expensiveCalculation(){
    console.log("Expensive funciton ran");
    
    let sum = 0;
    for(let i = 0; i< 10 ; i++){
        sum +=1

    }
    
    return sum 
}

    console.log("Parent render");
    const result = useMemo(()=>expensiveCalculation(),[count])


    return (
    <div>Question1

        <h1>Hello {name}</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        
        <button onClick={()=>setCount(prev => prev + 1)}>increase Count</button>

        <h2>Result : {result}</h2>

        <h2>Count : {count}</h2>
    </div>
  )
}

export default Question1
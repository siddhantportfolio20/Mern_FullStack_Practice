// import React from 'react'
import { useEffect ,useState } from "react"
const App = () => {
  const [ count , setCount] = useState(0)
  const [count2 , setCount2] =useState(0)
  useEffect(()=>{
    console.log("effect running count: ",count);
    console.log("effect running count: ",count2);
  },[count,count2])
  return (
    <div>
      <h1>Count showing without display</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Count : {count}</button>
      <button onClick={()=>setCount2(prev => prev + 1)}>Count2 : {count2}</button>
    </div>
  )
}

export default App
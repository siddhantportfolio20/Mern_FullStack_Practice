// import React from 'react'
import { useEffect ,useState } from "react"
const App = () => {
  const [ count , setCount] = useState(0)

  useEffect(()=>{
    console.log("effect running count: ",count);
  },[count])
  return (
    <div>App
      <button onClick={()=>setCount(prev => prev + 1)}>Count : {count}</button>
    </div>
  )
}

export default App
// import React from 'react'

import CounterB from "./Components/CounterB"
import CounterC from "./Components/CounterC"
import { useState } from "react"
const App = () => {
  const [count,setCount] = useState(0)
  return (
    <div>App
      <CounterB count={count} setCount={setCount}/>
      <CounterC count={count} setCount={setCount}/>
    </div>
  
  )
}

export default App
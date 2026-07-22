// import React from 'react'

export const CounterC = ({count,setCount}) => {
    
    return (
    <div><h1>CounterC: {count} </h1>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increase</button>
        <button onClick={()=>setCount((prev)=>prev-1)}>Decrease</button>
    </div>
        
)
}

export default CounterC
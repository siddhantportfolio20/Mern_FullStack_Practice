// // import React from 'react'
// import { useState } from "react";
// const CounterB = () => {
//         const [count,setCount] = useState(0)
        
//     console.log("render phase : " + count);
//         const handleClick =()=>{
    
//             console.log("Count value before " + count);
//             setCount(count + 1)
//             console.log("count value After" + count);
            
        
//             setCount(count + 5)
//             console.log("count value After" + count);
        
                
//             setCount(count + 10)
//             console.log("count value After" + count);
//         }
  
//     return (
//     <div>CounterB
//         <h1>CounterB : {count}</h1>
//         <button onClick={handleClick}>Increase</button>
//     </div>
  
// )
// }

// export default CounterB

// as we can see react does not allow us to directly update the state multiple times in the same handler 
// this is done so that the amount of component renders could br limited for better optimization

// Solution // but what happens when we want to update the state multiple times -> to solve this the setState function 
// has a argument that keep tracks of the previous value 

// import React from 'react'

//Solution:- 
// import { useState } from "react";
// const CounterB = () => {
//         const [count,setCount] = useState(0)
//         console.log("Render phase : complete render with cpunt value : " , count);
  
//         const handleClick =()=>{
    
//             console.log("Count value before " + count);
//             setCount((prev)=> prev + 1)
//             console.log("count value After" + count);
            
        
//             setCount((prev)=>prev + 5)
//             console.log("count value After" + count);
        
                
//             setCount((prev)=>prev + 10)
//             console.log("count value After" + count);
//         }
  
//     return (
//     <div>CounterB
//         <h1>CounterB : {count}</h1>
//         <button onClick={handleClick}>Increase</button>
//     </div>
  
// )
// }

// export default CounterB

// Note :- if the next value of state depends on the previous value always go with prev arg in setState
// this will help you avoid unnecessary rerenders and keep the state in code and UI in synchronous 


import { useState } from "react";
const CounterB = () => {
        const [count,setCount] = useState(0)
        const [ name , setName] = useState(0)
        const [isActive,setIsActive] = useState(0)
        console.log("Render phase : complete render with cpunt value : " , count);
  
        const handleClick =()=>{
    
            console.log("Count value before " + count);
            setCount((prev)=> prev + 1)
            console.log("count value After" + count);
            
        
            setCount((prev)=>prev + 5)
            console.log("count value After" + count);
        
                
            setCount((prev)=>prev + 10)
            console.log("count value After" + count);
        
            setName("Updated value")
            setIsActive(true)
        }
  
    return (
    <div>CounterB
        <h1>CounterB : {count}</h1>
        <h2>Name: {name}</h2>
        <h2>Active : {isActive ? "Yes":"No"}</h2>
        <button onClick={handleClick}>Increase</button>
    </div>
  
)
}

export default CounterB


// what is batching in react 
// in the above code we cann see that even tho the state is pdated 5 times but component only renders 1 time
// This is known as Batching , in batching react -->
// 1. waits until your event handlers finishes 
// 2. gathers all your state updates 
// 3. applies them in one render 

// import React from 'react'
import { useReducer, useState } from "react"


const intialState = {
    count: 0,
    steps: 1
}

const reducer = (state , action)=>{
    switch(action.type){
        case "incerement" :
            return {...state,count:state.count + state.steps}
        case "decrement" :
            return {...state,count:state.count - state.steps}
        case "reset" :
            return {...state,count: 0,steps : 1}
        
        case "steps":
            return {...state,steps: state.steps + 1}

        case 'changeSteps':
            return {...state,steps: action.payload}
        default : 
            return state
    }
}

const SimpleCounter = () => {
// useState Part 
//   const [count , setCount] = useState(0)

//   const increment =()=>{
//     setCount(prev => prev+1)
//   }
//   function decrement(){
//     setCount(prev => prev - 1)
//   }

//   const reset = ()=>{
//     setCount(0)
//   }

// UseReducer part 

    const [state , dispatch] = useReducer(reducer,intialState)
    
    return (
    <div>SimpleCounter
        <h2>Count : {state.count}</h2>
        <h2>Steps : {state.steps}</h2>

        <input type="text" placeholder="enter steps " onChange={(e)=>dispatch({type:"changeSteps",payload:Number(e.target.value)})}/>

        <button onClick={()=>dispatch({type:"steps"})}>Increase steps</button>
        <button onClick={()=>dispatch({type:"incerement"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default SimpleCounter
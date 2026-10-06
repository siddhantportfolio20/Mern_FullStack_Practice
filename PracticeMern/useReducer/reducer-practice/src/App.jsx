// import React from 'react'

import { useReducer } from "react"

const App = () => {
  let initialState = {count:1}
  const [state , dispatch]=useReducer(reducer , initialState)
  
  function reducer(state,action){
    if(action.type == 'increment'){
      return { count: state.count + 1 }
    }
    else if(action.type == 'decrement'){
      return { count: state.count - 1 }
    }
    else if ( action.type == 'reset'){
      return { count:  1 }
    }
    return state
  }
  return (
    <div>
        <h1>Use Reducer practice</h1>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:'increment'})}>Increase</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrease</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default App
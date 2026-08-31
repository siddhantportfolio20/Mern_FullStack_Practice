// import React from 'react'

import { act, useReducer, useState } from "react"
const intialState = {
    toggle : true
}

const reducer = (state,action)=>{
    switch(action.type){
        case "toggle":
            return {...state,toggle : !state.toggle}
        default:
            return {toggle:state.toggle}
    }
}



const ToggleMessage = () => {
    // const [toggle , setToggle] = useState(false)
    // const toggleVisible = () =>{
    //     setToggle(prev => !prev)
    // }

    const [state,dispatch] = useReducer(reducer,intialState)
    return (
    <div>
        ToggleMessage

        <button onClick={()=>dispatch({type:"toggle"})}>
            toggle Message
        </button>
            {state.toggle && <p>Hello students , welcome to React! </p>}
    </div>
  )
}

export default ToggleMessage
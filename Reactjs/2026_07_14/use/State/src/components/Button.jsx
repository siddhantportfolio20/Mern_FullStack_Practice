
// import React from 'react'


const Button = ({text,clickEvent}) => {
 
    return (
    <div>Button

        <button onClick={clickEvent}>{text}</button>
    </div>
  )
}

export default Button
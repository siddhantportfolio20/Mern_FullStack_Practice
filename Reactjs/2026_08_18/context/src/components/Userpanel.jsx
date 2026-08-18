import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

// import React from 'react'

const Userpanel = ({username}) => {

    const {theme , toggleTheme} = useContext(ThemeContext)
  return( 
  <>
    <h3>{theme}</h3>
    <button onClick={toggleTheme}>toggle theme</button>

    <p>Welcome , {username} 👋</p>
  </>
  
  )
}

export default Userpanel


// Prop drilling -> in the above simple example Layout and Content recieve prop but they do not use it 
// they just pass it further , incase of complex components passing props in myltiple components , becomes harder
// to mainntain and difficult to debug this issue is know as prop drilling 
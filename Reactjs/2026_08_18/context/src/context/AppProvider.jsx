// import React from 'react'

import { useState } from "react"
import { ThemeContext } from "./themeContext"
import { UserContext } from "./userContext"


const AppProvider = ({children}) => {
    const [theme , setTheme] = useState("light")
    let userName = 'SpiderMan'
    const appName = 'Context Introduction ,alternative for props'
    
    const toggleTheme = () =>{
      setTheme((prev) => prev == 'light' ? 'dark' : 'light')
    }
    
    return (
    
    <UserContext.Provider value={userName}>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </UserContext.Provider>
    
    
  )
}

export default AppProvider
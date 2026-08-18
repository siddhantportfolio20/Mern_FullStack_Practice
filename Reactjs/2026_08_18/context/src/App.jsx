// import React from 'react'


import { useState } from "react"
import Layout from "./components/Layout"
import { ThemeContext } from "./context/themeContext"
import { UserContext } from "./context/userContext"
import AppProvider from "./context/AppProvider"



const App = () => {
  
  const appName = 'Context Introduction ,alternative for props'
  

  
  return (


        
    <AppProvider>
    
        <h2>Topic = {appName}</h2>
        <div>
          <h1>Prop Drilling Demo</h1>

          <Layout/>      


        </div>
    </AppProvider>

    
  )
}

export default App
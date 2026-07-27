// import React from 'react'

import  About  from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import {BrowserRouter,Route,Routes} from "react-router"
import Navbar from "./Components/Navbar"
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

      </BrowserRouter>  
    </div>
  )
}

export default App
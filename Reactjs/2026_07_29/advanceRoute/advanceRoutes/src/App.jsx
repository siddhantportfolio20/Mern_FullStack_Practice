import {lazy , Suspense} from 'react'

import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import Contact from "./Components/Contact";
import Post from './Components/Post';


const About = lazy(()=> import("./Components/About"))
const Home  = lazy(()=> import("./Components/Home"))

const Posts = lazy(()=> import("./Components/Post"))


const App = () => {
  return (
    
<>
  
  <Suspense fallback={<h1>Loading About...</h1>}>
  <Navbar />
  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="/contact" element={<Contact />} />
    <Route path='/Posts' element={<Posts/>}/>
    {/* 404 Page */}
    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
  </Routes>
  </Suspense>
  
</>
  )
}

export default App
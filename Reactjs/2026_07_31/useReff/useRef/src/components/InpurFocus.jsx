// import React from 'react'
import { useEffect,useRef, useState } from "react"
const InpurFocus = () => {
    const inputRef = useRef(null)
    const cityRef =useRef(null)
    const [city,setCity]=useState("Mumbai")


    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const changeCity = () =>{
        console.log(cityRef);
        cityRef.current.textContent ="Pune"
    }
    return (
    <div>InpurFocus
        <input type="text" name="" id="" ref={inputRef} placeholder="focus this when page loads " />
        <h2>City : {city}</h2>
        <h2 ref={cityRef}>Mumbai</h2>
        <button onClick={()=>setCity("Pune")}>Change city State</button>
    
        <button onClick={changeCity}>Change cityRef</button>
    </div>
  )
}

export default InpurFocus
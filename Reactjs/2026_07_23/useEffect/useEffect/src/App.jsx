// import React from 'react'
import { useState , useEffect} from "react"
import RaceCondition from "./Components/RaceCondition"

const App = () => {
  // const [count , setCount] = useState(0)
  // const [toggle , setToggle] = useState(true)
  // // // componentDidMount
  // // useEffect(()=>{
  // //   console.log("Performing this sideEffect ");
  // // },[])

  // // //componentDidUpdate
  // // useEffect(()=>{
  // //   return ()=>{
  // //     console.log("performing this sideEffect when compoent updates on the screen");
  // //   }
  // // },[count])

  // //componentWillUnmount

  // useEffect(()=>{
  //   return ()=>{
  //     console.log("performing the sideEffect when component is removed from the screen");
  //   }
  // },[])

  const [userInput, setUserInput] = useState(1)
  const [ user , setUser] = useState(null)
  const API = "https://jsonplaceholder.typicode.com/users/"
    useEffect(()=>{
      console.log(userInput);
      async function fetchData() {
        const res = await fetch(API+userInput)
        const data = await res.json()
        console.log(data);
        setUser(data)

      }
      fetchData()
  },[userInput])

  return (
    <div>
      {/* <h1>useEffect</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Count : {count}</button>
      {/* <button onClick={()=>setCount2(prev => prev + 1)}>Count2 : {count2}</button> */}

      {/* <button onClick={()=>setToggle(prev => !prev)}>Toggle</button> */} 


      <input type="text" placeholder="enter user id" onChange={(e)=>setUserInput(e.target.value)}/>
      {/* <h1>User id : {user.id} ,UseName: {user.name} </h1> */}
      {user ?  <h1>User id : {user.id} ,UseName: {user.name} </h1>:""}

      <RaceCondition/>
    </div>
  )
}

export default App
// import React from 'react'
import { useState } from "react"
const Users = () => {
    const [users,setUsers] = useState([{name: "siddhant",age:20}])

    const [name , setName ] = useState("")
    const [ age, setAge] = useState(null)
    const handOnclick = () =>{
        let obj = {name : name , age :age}
        setUsers([...users , obj])
    }
    return (
    <div>Users
        <input type="text" name="" id="" placeholder="enter name" onChange={(e)=> setName(e.target.value)}/>
        <input type="number" name="" id="" placeholder="enter age" onChange={(e)=> setAge(e.target.value)}/>

        <button onClick={handOnclick}>Add User</button>
        {
            users.map((item,index)=> <li key={index}>Name: {item.name}, age: {item.age}</li>)    
        }

    </div>
  )
}

export default Users
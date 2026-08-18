// import React from 'react'

import { useContext } from "react"
import { UserContext } from "../context/userContext"
import Userpanel from "./Userpanel"

const Content = () => {
    const userName = useContext(UserContext)
    return (
    <div>
        Content = {userName}        
        <Userpanel username={UserContext}/>
        
    </div>
  )
}

export default Content
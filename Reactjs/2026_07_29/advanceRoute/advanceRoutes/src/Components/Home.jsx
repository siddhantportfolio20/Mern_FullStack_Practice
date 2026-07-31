

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const [uniqueId,setUniqueID] = useState(null);

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      localStorage.setItem("data",JSON.stringify(data))
      const userIds = data.map((item)=> item.userId)
      const uniqueUserIds = new Set(userIds)
      setUniqueID(Array.from(uniqueUserIds))
    }
  })
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to Home</h1>
      <p></p>
    {
      uniqueId && uniqueId.map(item => <button key={item} onClick={()=> navigate(`/posts/${item}`)}>{item}</button>)
    }
    </div>
  );
}

export default Home;
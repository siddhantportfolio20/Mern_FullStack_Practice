
const Test = () => {
    const handelClick = (name)=>{
        alert(`Hello : ${name}`)
    }
    return (
    <div>Test
        {/* <button onClick={handelClick}> Like </button> */}
        <button onClick={()=>handelClick("Siddhant")}>Like</button>
        {/* <button onClick={()=>alert("like")}></button> */}
    
        
    </div>
  )
}


export default Test
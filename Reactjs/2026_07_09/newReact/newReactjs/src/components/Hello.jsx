import React from 'react'

const Hello = () => {

  const name = "Siddhant";
  const age = 23;
  function checkage(){
    if(age > 18){
      return 'adult'
    }else {
      return "not Adult"
    };
  }
  const isAdult = (age>18)
  return (
    <>
      <h1>Hello!!!!!!! {name}, his age is  {age}</h1>
      <h2>this person is {checkage()}</h2>
      <h2>ternary operator checking {(age > 18)? "adult":"not adult"}</h2>
      <h3>{isAdult ?  <div>This is an adult content</div> : "Not"}</h3>
      <h3> Mostly used syntax && using operators  {isAdult && <div>This is an adult content</div>}</h3>
        <div style = {
            {
                height:"200px",
                width:"500px",
                backgroundColor:"purple",
                display: "flex",
                justifyContent : "center",
                alignitem : "center"
            }
            }>

        </div>
    </>
  )
}

export default Hello
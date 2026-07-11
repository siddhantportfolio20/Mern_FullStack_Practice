// import React from 'react'
import Greeting from "./component/Greeting"
import Greeting2 from "./component/Greeting2"
import Card from "./component/Card"
import Student from "./component/Student"
import Products from "./component/Products"


const App = () => {
  return (
    <div>
      <Greeting  name={"Sourish "}/>
      <Greeting2 name={"Siddhant"} age={23}/>
      <Card title={"Demo Card"}>
        <p>Javascript Fundamentals</p>
        <p>Duration 4 weeks</p>   
      </Card>
      <Card title={"Demo Card 2"}>
        <p>Javascript Fundamentals 2</p>
        <p>Duration 4 weeks 2</p>   
      </Card>

      <Student />
      <Products></Products>
    </div>
  )
}

export default App

// age = 18 will be used when the user does not pass any prop 
const Greeting2 = ({name , age = 18}) => {
  return (
    <div>
        Greeting 2 
        <h2>Name: {name}, Age: {age}</h2>
    </div>
  )
}

export default Greeting2
// // the name User can be anything if it uses export default

// import User from "./script.js"

// // named immport should be the same name mentioned in the export
// // import { printAge , printName } from "./script.js";

// // if you want to use costum name 
// import { printName as name , printAge as age} from "./script.js";

// console.log(User);

// const user = new User("siddhant",20)
// console.log(user);

// name(user)
// age(user)



// tasks import calculator


import { add , mul , PI } from "./calculator.js";

const a = 20
const b = 10


console.log(add(a,b));
console.log(mul(a,b));
console.log(PI());

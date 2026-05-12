// function greet(){
//     console.log("hello")
// }

// function outer(func){
//     func()
// }

// outer(greet)


// Callback -> a callback is simply a function passed into another function to be executed later, 
// the outer most function decides the execution of the inner function 

//higherorder
// function calculator(a,b,fun) {
//     return fun(a,b)
// }

// // callback function 
// function add(a,b){
//     return a + b
// }

// //callbac fucntion 
// function mul(a,b) {
//     return a * b
// }

// console.log(calculator(1,2,add))
// console.log(calculator(4,5,mul))


// to solve the same in arrow function 

// let calculator = (a,b,func) => func(a,b)

// let add = (a,b) => a+b

// let mul = (a,b) => a*b

// console.log(calculator(1,2,add))
// console.log(calculator(4,5,mul))


// HOF 


// function outer() {
//     return function(){
//         console.log("Hello")
//     }
// }
// // Method 1
// let resulFromOuter = outer()
// resulFromOuter()
// // or 
// // Method 2 
// outer()()

// let outer = () => { 
//     return () =>{    
//         console.log("hello")
//     }
// }

// outer()()

//HOF -> it is a function which either accepts another function as an arg or return a function

// const outer = () => () => console.log("hello")

// outer()()

// thid is als oan example of closure 
function createGreeter(greet) {
    return function (name) {
        return greet + " " + name
    }
}
let resulFromCreate = createGreeter("hii")("siddhant")
console.log(resulFromCreate)
// or 
console.log(createGreeter("hii")("siddhant"))

// Closures :- Closure happerns when an inner function remembers variables from the outer function , 
// even after the outer function has finished the execution 
// when function is called it comes in a callstack 

function outer() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}
const counter = outer()
counter()
counter()
counter()
counter()

function Atm() {
    let pin = 12314

    let balance = 5000

    let accountNo = 209771598

    return ()=>{
        return balance
    }
}

const seeBalance = Atm()
console.log(seeBalance())
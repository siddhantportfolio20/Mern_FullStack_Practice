// Note let is also called as a block variable 

let hello = "hello world1" // global variable 
// {
//     let hello = "hello world2" // block or local variable 
//     console.log(hello)
// }

// console.log(hello)


{
    console.log(hello)
}

// note : block can use the global variable but local variable that are inside block cannot be used 


// let solve some quesitons now :- 

let userName1 = "Alice"

function changeName(){
    userName1 = "Bob"
}
changeName()
console.log(userName1)// here Bob will be the ouput because we are using the global variable and we are changing it and then it will go to clg 


let userName2 = "Alice"
function changeName2(){
    let userName2 = "Bob"
    console.log(userName2)// Bob
}
changeName2()

console.log(userName2)// here the output will be "Alice" because we are not using the global variable and not changing it 

//for loop scoping 

// for(let i = 0;i<10;i++){

// } // note :- the loop will always run 
// console.log(i) // this will give error because i is not a globall variable 

let i 
for(i = 0;i<10;i++){

 }
  console.log(i) // this will not give error because i is  a globall variable 
  // output will be :- 10 


// example 

let x = 1
{
    let x = 2
    {
        let x = 3
        console.log(x)
    }
    console.log(x)
}console.log(x)

// Cannot access "a" before initiallization
//console.log(a)
//let a = 0;


//hoisting 
// in hoisting when the variable is been decleared above it goes to temporial dead zone  this is only applied for let and const 
{
console.log(c)
var c = 6
} // undefined because c is not initialized its only decleared 
// the declaration of the scope is taken to top of the scope 
// eg
{
var c;
console.log(c)
c = 5
}

// Function hoisting 
// function can be called before its declaration when function are hoisted the whole function is taken to the top of its  scope 

greet()
function greet(){
    console.log("hello world ")
}


// function expression  this will give error even with var 

// greet2
// let greet2 = function (){
//     console.log("hello")
// }
// greet2()

// greet3
// var greet3 = function (){
//     console.log("hello")
// }
// greet3()
console.log("--------------")
let greet2 = function (){ 
        console.log("hello")
 }
greet2()
let a = greet2()


// temporial dead zone :- it is the period in js where a let or const variable exists in its scope but cannot be accessed wuntil decleration is reached 

// {
//     console.log(x)
//     let x = 10 ;
//     console.log(x)
// }


// var is a global scope 
{
    var sd = 7
}
console.log(sd)// 7 

// if var inside a function it becomes a functions scope so it will give an error 

function fun(){
    var a = 5 
}
fun()
console.log(a)

// var variables can be redecleared compared to let 

let arr = [1,2,3]

let result = arr.slice()
console.log(result)
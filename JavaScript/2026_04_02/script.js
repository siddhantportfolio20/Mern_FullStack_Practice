// // in a function if the user gives many values it only takes the arguments that a funciton allows 
// // to solve this issue there is a Rest operator 

// // Rest operator :- used to combine the arguments in a function with ...args
// //                  it combines the arguments in the form of array 


// function sumALL(...args){
//     let sum = 0
//     console.log(args)

//     for (let arg of args){
//         sum += arg
//     }
//     return sum;
// }

// console.log(sumALL(1,2,3,4,5,6,8))


// // more eg:- 
// function sum(a,b,...args){
//     console.log(a)
//     console.log(b)
//     return  args
// }

// let res = sum(1,2,3,4,5,6,8)

// console.log(res)


// // Spread operator 

// let arr =[1,2,3,4,5]

// console.log(Math.max(arr)) // NaN
// console.log(Math.max(...arr)) // 5

// // merging an array 

// let arr1 = [3,2]
// let arr2 = [5,6,1]

// let arr3 = [...arr1 , ...arr2]
// console.log(arr3)

// let arr4 = [...arr1,0]

// let str = "Hello"

// console.log([...str])


/// Spread in objects 

// let student = {name : "Siddhant", marks : 90}

// let obj = {...student}
// let obj1 = {...student,gender : "Female"}

// console.log(obj)

// console.log(obj1)


// // updating an object this does not happen in array because of indexing 

// let obj2 = {...student, marks:100}
// console.log(obj2)

// let obj3 = {marks:100 ,...student}
// console.log(obj3)

//  shallow copy 

let obj = {
    a:"a",
    b:"b",
    c:{
        see:"c"
    }
}

// let obj2 ={...obj}
// obj2.a = "A"
// console.log(obj)
// console.log(obj2)
// here the main issue is when you want to change anything inside the nested  objects that time it will be changed into both arrays 

///  Deep copy --------------
// method 1 :- 
let obj2 = JSON.parse(JSON.stringify(obj))
obj2.c.see = "C"
console.log(obj) // { a: 'a', b: 'b', c: { see: 'c' } }
console.log(obj2) // { a: 'a', b: 'b', c: { see: 'C' } }

// Method 2:- Best and prefered way 

let obj3 = structuredClone(obj)
obj3.c.see = "C"
console.log(obj) // { a: 'a', b: 'b', c: { see: 'c' } }
console.log(obj3)// { a: 'a', b: 'b', c: { see: 'C' } }

// why method 2 is best way because :- 
// NOte :- JSON.parse(JSON.stringify(obj)) does not preserve all the datatypes correctly thats why its more ideal to use structuredClone()

// Destructuring array and objects 

let fruits = ["apple", "banana", "mango"]
let [first , second , third] = fruits

console.log(first)
console.log(second)
console.log(third)

// EXCEPTIONN case :- predict the ouput question 
console.log("EXCEPTIONN case")
let nums = [1,2,3,4,5]

let [a,,c] = nums
console.log(a)//1
console.log(c)//3

let employee = {
    id : 101,
    address : {
        city:"Pune",
        state:"Maharashtra"
    }
}
let {address :{city,state}} = employee;
console.log(city)
console.log(state)
//console.log(address) // undefined 
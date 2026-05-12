// Map will always return the same length as the original array 
// map() is used when you want to create a new array by changing every item 
// 1. it does not effect the original array 
// 2. it always returns a new array
// 3. the output length is usually the same as the input length 


// ex1. 
const numbers = [1,2,3,4,5]

let double = numbers.map((item)=> item *2)
console.log(numbers)
console.log(double)

// ex2. 

const names = ["rahul","anita", "meena"]

const capitalNames = names.map((item) => item.toUpperCase())
console.log(capitalNames)

// ex3 : add $ sign in front of the prices 

let prices = [100,200,300]

let dollar = prices.map(item => `$ ${item}`)
console.log(dollar)


// ex 4 
const students = [
    {name : "Anita", marks:78},
    {name : "Meena", marks:92},
    {name : "Ravi", marks:45}
]

// method 1

let result = students.map((item)=> {
    if(item.marks > 50){
        return ({students : item.name , result : "Pass"})
    }
    else{
        return ({students : item.name , result : "Fail"})
    }
    return result
})

console.log(result)


// method 2
let result1 = students.map(item => (item.marks > 50 ) ? ({students : item.name , result : "Pass"}) :({students : item.name , result : "Fail"}) )

console.log(result1)


// method 3 
let result2 = students.map(item => {
    return {
        studentName : item.name,
        result : item.marks > 50 ? "Pass" : "Fail"
    }
    
})





// let arr = [1,2,3,4]

// function doubleEachElement(arr){
//     let result = arr.map((item)=>{
//         return item
//     })
// }
// console.log(doubleEachElement(arr))



// Filter : - 
// filter() is used when you want to keep only that elements that satisfy the condition 
// 1. it returns a new array 
// 2. the o/p may have fewer or the same number of elements 
// 3. it does not transform the value , only choses which one stays 


let arr = [1,2,3,4,5,6]

let evenElements = arr.filter((item) => {
    if(item%2 == 0){
        return true 
    }
})
console.log(evenElements)

// ex1: given me list of all elements above 50 

let list = [50,30,40,60,80,90,false , true]

let result4 = list.filter(items => items > 50)
console.log(result4)

// ex2 :- give me list of active users names 

const users =[
    {name:"Asha",isActive:true},
    {name:"Ravi",isActive:false},
    {name:"kiran",isActive:true}

]

let result5 = users.filter(item => item.isActive)
console.log(result5)

let activeNames = result5.map(items => items.name)
console.log(activeNames)

let result7 = users.filter(item => item.isActive).map(items => items.name)
console.log(result7)


// Question :- 
// apply search filter 
// lets say user give input ap 
// the filtered list should contain list of words containing ap 

const item = ["apple","banana", "apricot","orange","grape"]

const result8 = item.filter(item =>item.includes("ap"))
console.log(result8)
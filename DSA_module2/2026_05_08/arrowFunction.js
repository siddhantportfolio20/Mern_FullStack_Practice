// arrow function  

let Greet = () =>{
    console.log("Hello Armor")
}

Greet()


// eg 

let sum = (a,b) => {
    return a+b
}

// Note :- the below 2 sum function are the same if there is no {} after the arrow functiion it means 
// whatever is writtern on the right is returned 
// let sum = (a,b) => a+b

console.log(sum(8,3))


// let func = () => { name : "siddhant"} this will return undefined becasue it take the {} as a function 
// to fix this we have to use ()

let func = () => ({name:"Siddhant"}) // this is how you can return a object

console.log(func())

// Arrow function defination -> these provide a shorter syntax for functions expression 

// let arr = [3,4,5,2,1,0]

// arr.sort(function (a,b){
//     return a-b
// })

// arr.sort((a,b)=>{
//     return a-b
// })

// arr.sort((a,b)=> a-b)

// console.log(arr)


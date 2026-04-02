// let personObj = {
//     name :"siddhant",
//     age : 22,
//     gender : "male",
//     key : "value"
// }

// const { use } = require("react");

// // // Objects.keys gives array of keys 
// // console.log(Object.keys(personObj)) // [ 'name', 'age', 'gender' ]

// // // Object.values gives array of values 
// // console.log(Object.values(personObj))// [ 'siddhant', 22, 'male' ]

// // // to get the length for object we use 
// // console.log(Object.keys(personObj).length)

// // let personObj2 = {
// //     name :"sourav",
// //     age : 20,
// //     gender : "male",
// //     key : "value"
// // }

// // let arr = Object.values(personObj2)

// // for(let i = 0 ; i<arr.length;i++){
// //     console.log(arr[i])
// // }

// let obj ={
//     marks1 : 50,
//     marks2 : 30,
//     marks3 : 40,
//     marks4 : 50
// }

// let arr1 = Object.values(obj)
// let result=0;
// for (let i =0 ; i< arr1.length;i++){
//     result += arr1[i]
// }console.log(result)

// // insert country india inside given object 
// let data = {
//     address:{
//         city : "Pune",
//         pin : "411057"
//     }
// }

// data.address.country = "India"

// console.log(data)


// //// array of object 
// let students = [
//     {id:1, name: 'Aman', marks: 82 , gender : "male"},
//     {id:2, name: 'Sara', marks: 91, gender : "female"},
//     {id:3, name: 'Rohit', marks: 25, gender : "male"},
//     {id:4, name: 'Sachin', marks: 100, gender : "male"},
//     {id:5, name: 'Shreya', marks: 30, gender : "female"},
//     {id:6, name: 'Astha', marks: 99, gender : "female"},
// ]

// // task 1 : print the name of all the students 
// // task 2 : print the name of all the female students 
// // task 3 : print the name of all the male students 


// for (let i = 0 ; i < students.length ; i++){
//         console.log(students[i].name)
//     }
// console.log("Only female candidate ")
// console.log("=======================================================")
// for (let i = 0 ; i < students.length ; i++){
//     let obj = students[i]
//     if ( obj.gender === "female"){    
//         console.log(obj.name)
//     }
//     }
// console.log("Male")
// console.log("=======================================================")
// for (let i = 0 ; i < students.length ; i++){
//     let obj = students[i]
    
//     if ( obj.gender === "male" && obj.marks < 50){    
//         console.log(obj.name)
//     }
//     }

// // for (let i = 0 ; i < students.length ; i++){
// //     let obj = students[i]
// //     console.log(obj)
// //     }



///////////////  Object destructuring 

// let user = {
//     name : "Prisha",
//     age : 23,
//     city : "Pune"
// }

// let {name , age} = user

//in this what is happening is :-

// // let name = user.name
// // let age = user.age

// console.log(name , age)

// // destructuring using the name of some other variable 
// let product = {
//     title : "Phone",
//     price : 200000
// }
// let {title : productTitle , price : productPrice} = product

// console.log(productTitle , productPrice)

// complex object destructing 
// let employee = {
//     id : 101,
//     address : {
//         city:"Pune",
//         state:"Maharashtra"
//     }
// }
// let {address :{city,state}} = employee;
// console.log(city)
// console.log(state)
// console.log(address) // undefined 

//////   task 1 create a groupby function according to city 
// let people = [
//     {name : "Alice",city:"NYC"}
//     ,{name : "Bob", city: "LA"},
//     {name : "Charlie", city : "NYC"}
// ]
// let result = {}
// for (let i = 0 ; i < people.length ; i++){
//     let city = people[i].city
//     if(!result[city]){
//         result[city]=[]
//     }
//     result[city].push(people[i])
// } 
// console.log(result)


// write a function whos name is wordcount 
// wordCount("Hello world hello") ---> {hello : 2 , world : 1}
// wordCOunt("The the The")-----> {the : 3}
// wordCOunt("one")


let wordCount = [
    {word:"Hello world hello"},
    {word:"The the The"},
    {word:"one"}
]
let result1 = {}
for (let i = 0;i<wordCount.length;i++){
    let word = wordCount[i].word
    word = word.split(" ")
    for(let j=0;j<word.length;i++){
    if(!result1[word[i]]){
        result1[word[i]]=1
    }
    else{
        result1[word[i]]++
    }
}


}



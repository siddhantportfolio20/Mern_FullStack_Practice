// // objects is used for storing data 

// // objects are a datatype in js , that stores data in the form of key:value pairs 
// //key:Values is also known as properties of object

// // empty object {}: 
// // let person1 = {} this is not a scope 

// //let person1 = {
// //     name : "siddhant",
// //     age : 20,
// //     gender : "male"
// // }

// // // method 1 of accessing the values 
// // console.log("Using method 1 :-",person1.name)

// // // method 2 of accessing the values of object 

// // console.log("Using method 2 :-",person1["name"])

// // // imp eg 

// // let key = "name"

// // //console.log(person1.key)// undefined 
// // console.log(person1[key]); // siddhant 


// let personObj = {
//     name : "Siddhant",
//     age : 22,
//     gender : "male",
//     "likeBirds": true,
//     "like Animals":false 
// }

// console.log(personObj.likeBirds)
// console.log(personObj["likeBirds"])
// console.log(personObj["like Animals"])


// // to update the objects 
// personObj.name = "ankit"
// personObj["name"]="siddhant"

// console.log(personObj)



// ==================================      Questions ======================================

// task 1 

// let person1Obj = {
//     name : "sourav",
//     age : 20 ,
//     gender :"male",
//     points : [1,5,8,10]
// }
// console.log(person1Obj.points[2])
// console.log(person1Obj["points"][2])


// let person1Obj = {
//     name : "sourav",
//     age : 20 ,
//     gender :"male",
//     points : {
//         first : 100,
//         second : 200,
//         third  : 300
//     }
// }

// console.log(person1Obj.points.first)


// // adding properties to object 

// let obj= {}
// obj.name = "siddhant"
// obj.age= 20 
// obj.gender = "male"

// console.log(obj) 

// // using delete key word to delete a key 

// delete obj.gender
// console.log(obj)


// // ============ key as a number cannot be accessed using . method it can be accessed using []

// let obj2 = {
//     1 : 1,
//     2 : 2,
//     3 : 3,
// }
// //console.log(obj2.1)// gives error 

// console.log(obj2[1])// 1
// console.log(obj2["1"])

// // in operator  

// console.log("name"in obj)// true 
// console.log("address" in obj) // false 


//////// for iin loop 

let obj= {
    name : "siddhant",
    age : 20 ,
    gender : "male"
}


for (let key in obj){
    console.log(key , obj[key])
}
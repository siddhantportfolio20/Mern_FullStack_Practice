// console.log("Set")

// // its a built in collection that stores only unique vlaues , meaning duplicates are ignored 
// // it alse preseves the insertion order during iteration 
// const set = new Set()

// // .add() adds the item indside set , if the item already exists it will ignore that item

// set.add(10)
// set.add(30)
// set.add(10)
// console.log(set)

// // set also has .has() ,.delete(),.size, .clear

// console.log(set.delete(10))
// console.log(set.has(10))
// console.log(set.size)


// let usernames = ["sid", "john", "sid", "alex", "john"]

// // method 1 ideal and better method 
// let uniqueUsers = new Set(usernames)

// console.log(uniqueUsers)

// // method 2
// let sets = new Set()
// for(const item of usernames){
//     sets.add(item)
// }
// console.log(sets)


// //union()
// const A = new Set(["a","b","c"])
// const B = new Set(["b","c","d"])

// const C = A.union(B)

// const D = A.intersection(B)
// console.log(C)
// console.log(D)

// // Difference or A - B

// const E = A.difference(B)
// console.log(E)


// // isSubsetOf
// // All values of A should be inside of B
// console.log(B.isSubsetOf(A))

// for a given string check if all the charecters are uniques or not 
// input :- 

let a = "abc"

let uniqueness = new Set(a)
 
if(uniqueness.size == a.length){
    console.log("unique string")
}else{
    console.log("Not unique string")
}

// task 2 convert the below object into a Map 

let obj = {
     name:"Pranav"
    ,age:20
    ,gender: "male"

} 
// method 1
let object = Object.entries(obj)
const userMap = new Map(object)
console.log(userMap)

// Method 2 
const map2 = new Map();
for(let key in obj){
    map2.set(key , obj[key])
}

console.log(map2)
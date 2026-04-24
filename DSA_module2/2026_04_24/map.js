console.log("Maps , Set")

// // cons of object
// // the properties in obj are not ordered 
// // we cannot directly traverse an object
// // keys in obj are of 2 types string and symbols 

// // MAP defination 
// // A map is a built in collection of key value pairs but unlike objects keys here 
// // can be of any data type. Mao also preserves the insertion order when itrated.


// // option 1
// // new key is used to create blueprints 
// let map = new Map() // this is how you create a map 

// // .set is used in inseting values inside map
// console.log(".set")
// map.set("name","Pranav")


// // .has(key) checks if the key is present or not 
// console.log(".has")
// console.log(map.has("name"))


// // .get(key) lets you access the values 
// console.log(".get")
// console.log(map.get("name")) 


// // .delete  also retrun true if deletion happens 
// console.log(map.set("age","21"))
// let age = map.delete("age")
// console.log(age)


// // .clear to clear all the data in the map 


// // .size for getting the length of the map 
// console.log(map.size)


// const userMap = new Map()
// const user1 = {id: 1 , name: "Aman"}
// const user2 = {id: 2 , name: "Sara"}

// userMap.set(user1, "Frontend Student")
// userMap.set(user2, "Backend Student")
// userMap.set(101, "Batch A")
// userMap.set(true , "Active Batch")

// console.log(userMap)

// // Output
// // Map(4) {
// //   { id: 1, name: 'Aman' } => 'Frontend Student',
// //   { id: 2, name: 'Sara' } => 'Backend Student',
// //   101 => 'Batch A',
// //   true => 'Active Batch'
// // }

// console.log(userMap.get(user1))
// console.log(user1)

// console.log(user2,"=>",userMap.get(user2))
// console.log(userMap.get(101))
// console.log(userMap.get(true))



// // task count the frequency in map 

// const words = ['js',"react","js","node","react","js"]

// const freqMap = new Map()

// for(word of words){
//     freqMap.set(word , (freqMap.get(word) || 0 )+1)
// }
// console.log(freqMap)

// this is anothr way of creating your map , where the key value pairs are in an array

const inventory = new Map(
    [
        ["pen",2],
        ["notebook",3],
        ["market",4]
    ]
)
console.log(inventory)

// remember to destructure your array inside your for of loops
for(const [key,value]of inventory){
    console.log(key,value)
}

//
// pen 2
// notebook 3
// market 4



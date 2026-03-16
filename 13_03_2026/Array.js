
/*
let arr = [30 ,40 ,50 ,60]

let emptyArr = []

let strArr = ["a","b","c"]

let mixArr =[30,49,"a","b"]


console.log("Empty Array :- ",emptyArr)
console.log("StringArrya :- ",strArr)
console.log("array       :- ", arr)
console.log("Mixed Array :- ",mixArr)

console.log("Accessing the array")
// index =[0,1,2,3,4,5]

console.log("arr element:-",arr[3])
//console.log(arr[7]) undefined 

// modifying the array 
console.log("modifying the array")
arr[3]=10
console.log(arr[3])

// adding element in array but at last
// you can also add elements in an array at the end 
// but this is not recomended 

arr[7]=80
//Note: elements between index 3-6 will be empty or undefined 
// to find the kength of array we use array.length
// access the last element arr.length - 1

console.log(arr.length - 1)

arr.length = 2
console.log(arr)
*/

let forArr =[30,20,30,40]
for(let i=0 ;i < forArr.length ;i++){
    console.log(forArr[i])
}

// for of loop 

for (let fruit of forArr){
    console.log(fruit)
}

// for in loop 

for(let i in forArr){
    console.log(i)
}

// task : i want to seee the values in the array using for in loop 


// let arr = ["apple", "Bannana","mango", "kiwi"]
// for(let i in arr){
//     console.log(arr[i])
// }

let arr = [1,2,3,4,5,6]
for(let i in arr){
    console.log(arr[i]*6)
}

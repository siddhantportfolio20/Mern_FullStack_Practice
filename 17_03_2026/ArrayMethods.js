// /*let arr = ["a","b","c","d","e","f","g"];

// // index = 0 1 2 3 
// console.log(arr.slice(0,3))  //["a",b","c"]
// console.log(arr.slice(3))   //["d","e","f","G"]
// console.log(arr.slice(2,2)) //[]
// console.log(arr.slice(2,3)) //["c"]
// console.log(arr.slice(-3)) //["e","f","g"]

// // you are given an array and size write a function to split athe array into the given sizes  
// // eg 
// // output : [[1,2,3,],[4,5,6],[7,8,9]]
// let array = [1,2,3,4,5,6,7,8,9]
// let size = 3
// let result=[]
// function splitArray(arr , size){
//   for (let i = 0; i < arr.length; i += size) {
//     let chunk = arr.slice(i, i + size);
//     result.push(chunk);
//   }
//   return result
// }
// console.log(splitArray(array , size))

// let array = [1,2,null,4,5,6,null]
// let result
// for(let i = 0 ; i<array.length;i++){
//     if(array[i]==null){
//         result=array.splice(i,1)
//     }
// }

// console.log(array)
// console.log(result)
// */
// let array = [1,2,0,5,"a",null,undefined,10,""]

// // for(let i = array.length-1 ; i>=0;i--){
// //     if(array[i]===false ){
// //         array.splice(i,1)
// //     }else if (array[i]===null){
// //         array.splice(i,1)
// //     }else if(array[i]=== undefined ){
// //         array.splice(i,1)
// //     }else if (array[i]===""){

//     //     splice(i,1)
//     // }else if(array[i]==0){
//     //     splice(i,1)
//     // }
// //}

// console.log(array)

// // more optimized way 
// for(let i = array.length-1 ; i>=0;i--){
//     if(!array[i]){
//         array.splice(i,1)
//     }
// }

// // adding an element using splice 
// array.splice(array.length,0,[1,2,3,4]) 


// console.log(array)

// let colors = ["red","blue","green"]
// colors.splice(-1,0,"yellow")
// console.log(colors)

// let arr = ["apple","banana","kiwi","orange"]

// // includes()

// console.log( arr.includes("apple"))
// console.log(arr)

//concat()
let arr = ["apple","banana","kiwi","orange"]
let arr1 = [1,2,3,4]
//let result = arr1.concat(arr)
let result  = arr1.concat(arr,arr1)
console.log(result)

// reverse()
arr.reverse()
console.log(arr)

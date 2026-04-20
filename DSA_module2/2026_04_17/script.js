//task 1 : find the largest element in a 2d matrix 

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let count = 0 ;
// for(let i = 0 ; i< arr.length ; i++){
//     for(let j=0 ;j < arr[i].length;j++){
//         if(arr[i][j] > count){
//             count = arr[i][j]
//         }
//     }
// }console.log(`Largest Element:-  ${count}`)

// let arr =  [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let transposematrix = []
// for (let j = 0 ; j < arr[0].length;j++){
//     let common =[]
//     for(let i = 0 ; i < arr.length ; i++){
//         common.push(arr[i][j])
//     }transposematrix.push(common)
// }console.log(transposematrix)


// // task 3 : -
// //do a snake like traversal of a matrix 
// // ouput: - 123654789

// console.log("Snake game")
// let left = ""
// let right = ""
// for(let i = 0 ; i < arr.length ;i++){
//     if(i%2==0){
//     for(let j= 0 ; j < arr.length ; j++){
//         console.log(arr[i][j])
//     }}
//     else{
//         for(let j=arr.length-1 ; j > 0 ; j--){
//         console.log(arr[i][j])
//     }
//     }
// }console.log(left)

// task 4 spiral traversal 

let arr = [
    [1,2,3,1],
    [4,5,6,1],
    [7,8,9,1],
    [10,11,12,13]
]

let top = 0
let right = arr[0].length - 1
let down = arr.length - 1 
let left = 0 
let result = []

while(top <= down && left <= right){
    // left to right 
    for(let i = left ; i <= right ; i++){
        result.push(arr[top][i])
        
    }top++  // next row 
    
    // top to down 
    for(let i = top ; i <= down ; i++){
        result.push(arr[i][right])
        
    }
    right-- 

    // right to left 
    for(let i = right ; i >=left ; i--){
        result.push(arr[down][i])
    }down-- 
    // bottom to top 
    for(let i = down ; i >= top ; i--){
        result.push(arr[i][left])
    }left++
}console.log(result)


let arr1 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11],
    [12,13,14]
]

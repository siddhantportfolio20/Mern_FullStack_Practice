// // Insertion Sort 

// let arr = [5,4,6,8]

// function insertionSort(arr){
//     for(let i = 1 ; i < arr.length ;i++){
//         let key = arr[i]
//         let j = i - 1 
//         while(j >= 0 && arr[j] > key){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] =key
//     }
//     return arr
// }
// console.log(insertionSort(arr))

// // Recursion 

// // 1. Print 1 to N
// // Input: 5
// // Output: 1 2 3 4 5

// // 👉 Learn: base case + print before/after recursion

// let n = 5 

// function print1ToN(n){
//     if(n <= 0){
//         return 0 
//     }
    
//     print1ToN(n-1)
//     console.log(n)
// }
// print1ToN(n)


// function printNTo1(n){
//     if(n <= 0){
//         return 0 
//     }
//     console.log(n)
//     print1ToN(n-1)
    
// }
// printNTo1(n)
// console.log("------------------------------------------------------")
// // 3. Sum of N numbers
// // Input: 5
// // Output: 15

// // 👉 Learn: return building

// function sumOfN(n){
//     if(n <= 0 ){
//         return 0
//     }
//     console.log(n)
    
//     let result   = n + sumOfN(n-1)
//     console.log(result)
//     return result
// }

// sumOfN(n)
// console.log("---------------------")
// let i = 1
// function try1(i){
//     if(i >= 5){
//         return i
//     }

//     console.log(i)
//     return try1(i+1)
// }
// console.log(try1(i))


// 1. Sum of Digits of a Number
// Problem

// Given a number n, return the sum of its digits using recursion.

// Example
// Input: 1234
// Output: 10

// let input = 1234

// function add(n){
//     if(n <=0 ) return 0

//     let arr = String(n).split("").map((values)=>values)
//     let sum = 0 
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += Number(arr[i])
//     }
//     return sum
// }
// console.log(add(input))



// 2. Check Palindrome String Using Recursion
// Problem

// Check whether a string is palindrome or not using recursion.

// A palindrome reads same from both sides.

// Example
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false


// let input = "madam"

// function pali(str,left=0,right =str.length -1){
//     if(left >= right){
//         return true
//     }
//     if(str[left]!==str[right]) return false


//     return pali(str,left + 1,right - 1)
    
// }
// console.log(pali(input))



// Quick Sort 
let arr = [4,5,62,4,12,3,5]

// function quickSort(arr){
//     if(arr.length <= 1) return arr;

//     let pivot = arr[0]
//     let left = []
//     let right = []

//     for(let i = 1;i < arr.length  ; i++){
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//         return [
//         ...quickSort(left),
//         pivot,
//         ...quickSort(right)
//     ];
// }
// console.log(quickSort(arr))




// function quickSort(arr){

//     if(arr.length <= 1) return arr;

//     let pivot = arr[0];

//     let left = [];
//     let right = [];

//     for(let i = 1; i < arr.length; i++){

//         if(arr[i] < pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }

//     return [
//         ...quickSort(left),
//         pivot,
//         ...quickSort(right)
//     ];
// }

// console.log(quickSort(arr));


// max of array using recursion 
let array = [3,4,6,7,9,10,5]
function maxArr(arr){
    if(arr.length <= 1){
        return arr
    }
    let first = arr[0]
    
}

// reduce 
let input =  [1, 2, 3, 4]
// Output: 10

let res = input.reduce((sum,value)=> sum + value,0)
console.log(res)


// let n = 5
// for (let i = 1 ; i<= n ;i++){
//     let row =""
//     for(let s=1;s < n-i;s++){
//         row+=" "
//     }
//     for(let j=1;j<= 2*i-1;j++){
//         if(j==1 || j == 2*i-1 || i == n){
//             row+= "*"
//         }else{
//             row+=" "
//         }

//     }console.log(row)
// }

// task 2 
//**** 
//*  *
//*  *
//**** 
let n = 5 

for(let i = 0 ; i <= n ;i++){
    let row = ""

        for(let j = 0 ; j <=n ;j++){
            if(j==0 || j==n || i == 0|| i==n){
                row+="*"
            }else{
                row+=" "
            }
        }console.log(row)
    }


for(let i = 1 ; i <= n; i++){
    let row = ""
    for(let s= 1 ; s <= n-i;s++){
        row+= " "
    }
    for(let j = 1 ; j <= 2*i - 1 ; j++ ){
        row+="*"
    }
    console.log(row)
}
// // let sprial = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9]
// // ]

// // Bubble Sort 
// // Easy Sum 

// let arr = [5, 1, 4, 2, 8]

// function bubbleSort(arr){
    
//     for(let i = 0 ; i < arr.length -1 ; i++){
//         for(let j= 0; j < arr.length ; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

// // Medimum 

// let arr2     = [1, 2, 3, 4, 5]

// function medimumBubbleSort(arr){
    
//     for(let i = 0 ; i < arr.length ; i++){
//     let swapped = false
//         for(let j = 0 ; j < arr.length - 1 ; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//                 swapped = true
//             }            
//         }
//             if(!swapped){
//             break;
//         }
//     }return arr

// }

// console.log(medimumBubbleSort(arr2))

// // Hard 
// // find the 3rd largest element using Bubble sort 
// let arr3 = [7, 2, 9, 4, 1, 5]


// function hardBubbleSort(arr){
    
//     for(let i = 0 ; i < arr.length -1 ; i++){
//         for(let j= 0; j < arr.length ; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr[arr.length - 3]
// }
// console.log(hardBubbleSort(arr3))


// Insertion Sort 

let arr = [5, 3, 4, 1, 2]

// for(let i = 1 ; i<arr.length;i++){
//     key = arr[i]
//     j = 0
//     while(j >= 0 && array[j] > key){
//         array[j + 1] = array[j]
//         j = j - 1      
//     }
//     array[j + 1] = key
// }

// for(let i = 1; i < arr.length; i++) {

//     let key = arr[i]
//     let j = i - 1

//     while(j >= 0 && arr[j] > key) {

//         arr[j + 1] = arr[j]
//         j = j - 1
//     }

//     arr[j + 1] = key
// }


let arr = [-6,20,8,-2,4]

// Note algo if the the pivot is mid element
// function quickSort(arr){
//     if(arr.length < 2 ){
//         return arr
//     }
    
//     // Note :- when you change your pivot element yopur also have to change your for loops iteration 
//     let pivot = arr[Math.floor(arr.length/2)]
//     let left = []
//     let right = []
//     // for loop u dont need to itrate till the pivot element you can iterate  until the last element 
//     for(let i = 0 ; i < arr.length ;i++){
//         if(i == Math.floor(arr.length/2)) continue
//         if(pivot > arr[i]){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }


// console.log(quickSort(arr))

// Note if pivot is 1st element

// function quickSort(arr){
//     if(arr.length < 2 ){
//         return arr
//     }
    
//     // Note :- when you change your pivot element yopur also have to change your for loops iteration 
//     let pivot = arr[0]
//     let left = []
//     let right = []
//     // for loop u dont need to itrate till the pivot element you can iterate  until the last element 
//     for(let i = 1 ; i < arr.length ;i++){
        
//         if(pivot > arr[i]){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr))


// Note : when the pivot element is  last

function quickSort(arr){
    if(arr.length < 2 ){
        return arr
    }
    
    // Note :- when you change your pivot element yopur also have to change your for loops iteration 
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    // for loop u dont need to itrate till the pivot element you can iterate  until the last element 
    for(let i = 0 ; i < arr.length-1 ;i++){
        
        if(pivot > arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))


// The time complexity 
// for worst case = when pivot element is last O(n^2)
// this happens all the elements are already sorted -> because we end up partitioning an empty array and a full array 

// Avg case / Best case :- O(nlogn) 

// DrawBack :- Space complexity O(n)



// one more approch for Quick sort Inplace 

// ================== INPALCE QUIICK SORT



// // ================ linearSearch


// let arr = [1,2,3,4]

// let target = 3
// function linearSearch(arr,target){
//     for(let i = 0 ; i< arr.length ; i++){
//         if(arr[i] == target){
//             return true
//         }
//     }return false
// }
// console.log(linearSearch(arr,target))


// Binary Search 
// console.log("BinarySearch")
// function BinarySearch(arr,target){
//     let left = 0
//     let right = arr.length - 1 
    

//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid]==target){
//             return true
//         }else if (arr[mid] < target){
//             left = mid+1
//         }else if(arr[mid] > target){
//             right = mid-1
//         }
//     }
//     return false
// }

// console.log(BinarySearch(arr,target))

// time complexity is O(log n)

let arr = [1,2,5,5,5,6,7,8]

let target = 5
function firstOccuranceElement(arr, target){
    let left = 0
    let right = arr.length -1
    let result = 0
    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(arr[mid] == target){
            result = mid
            right = mid -1 
        }
        else if(arr[mid] < target){

            left = mid + 1 
        }else if (arr[mid] > target){
            right = mid - 1 
        }
    }return result
}
console.log(firstOccuranceElement(arr,target))


// if the target is not present find the left most index where it should be inserted in the array 
let arr1 = [1,2,3,5,6,7]
let target = 4 
// ouptu ==> 3 this is the index where the element should be inserted 


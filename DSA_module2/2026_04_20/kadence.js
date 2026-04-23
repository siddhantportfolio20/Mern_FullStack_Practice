let arr = [-2,-3,4,-1,-2,1,5,-3]

function maxSubArray(arr){
    let maxSoFar = arr[0] // tracks the maximum sum found so far 
    let maxEndingHere = arr[0] // tracks the max sum of subarray ending at current index 

    // looping through the array starting from 1 
    for(let i =1 ; i < arr.length ;i++){
        
        // take maximum of (current vs previous ending sum + current)
        // the sum of element will always be greater than arr[i]
        // maxEndingHere + arr[i] will always be greater than arr[i] if both are +ve
        // if arr[i] becomes -ve the sum is less than maxEndinf and there is no point in stroing that value
        maxEndingHere = Math.max(arr[i],arr[i]+maxEndingHere)

        // updating global max if current ending sum is larger 
        maxSoFar = Math.max(maxEndingHere , maxSoFar)
    }
    return maxSoFar

}console.log(maxSubArray(arr))


// Note :-  the sum of element will always be greater than arr[i]


// Task find if the target element exsits in the array 
// the target is the sum of any 2 elements in the array

let arr1 = [2,6,5,8,11]
let target = 10
function findTarget(arr,target){
    for(let i = 0;i<arr.length ; i++){
        for(let j = i ; j < arr.length;j++){
            if(arr[i]+arr[j]=== target){
                return true 
            }else {
                return false
            }
        }
    }
}console.log(findTarget(arr,target))
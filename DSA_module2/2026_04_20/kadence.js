let arr = [-2,-3,4,-1,-2,1,5,-3]

function maxSubArray(arr){
    let maxSoFar = arr[0] // tracks the maximum sum found so far 
    let maxEndingHere = arr[0] // tracks the max sum of subarray ending at current index 

    // looping through the array starting from 1 
    for(let i =1 ; i < arr.length ;i++){
        
        // take maximum of (current vs previous ending sum + current)
        maxEndingHere = Math.max(arr[i],arr[i]+maxEndingHere)

        // updating global max if current ending sum is larger 
        maxSoFar = Math.max(maxEndingHere , maxSoFar)
    }
    return maxSoFar

}console.log(maxSubArray(arr))
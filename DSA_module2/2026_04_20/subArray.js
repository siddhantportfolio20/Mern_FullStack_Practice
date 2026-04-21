// given a subarray return sum 

function hasSubArray(arr , n){
    
    for(let i = 0 ; i < arr.length;i++){
    let sum = 0
        for(let j=i ; j< arr.length ;j++){
            sum+=arr[j]
            if(sum==n){
                console.log(sum)
            return true }
        }
    }
    return false
}
console.log( hasSubArray([1,2,3,4],5))


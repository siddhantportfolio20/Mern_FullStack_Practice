let arr = [-2,-3,4,-1,-2,1,5,-3]

let max = -Infinity

for(let i = 0 ; i < arr.length ; i++){
    for(let j = i ; j < arr.length ; j++){
        let sum = 0 
        for(let k = i ; k<j ; k++){
            sum+=arr[k]
        }max =Math.max(max ,sum)
    }
}console.log(max)



// ============== task 
let arr1 = [2,6,5,8,11]
let target = 10
function findTarget(arr,target){
    for(let i = 0;i<arr.length ; i++){
        for(let j = i ; j < arr.length;j++){
            if( arr[i]+arr[j] === target){
                return true 
            }
        }
    }return false
}console.log(findTarget(arr,target))


// Two sum problem 

let twoSum = (arr,target)=>{
    arr1.sort(ascending)
    function ascending(a,b){
        return a-b
    }
    let left = 0
    let right = arr.length-1
    while(left< right){
        let sum = arr[left] + arr[right]
        if(sum == target){
            return true
        }else if(sum < target){
            left++
        }else{
            right--
        }
    }return false
}
console.log(twoSum(arr1,target))



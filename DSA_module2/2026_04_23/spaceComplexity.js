console.log("Space Complexity")
// constant Space Complexity O(1)
// if the algo does not need extra memory or the memory does not depend on the input size
// the scpae complexity is constant eg sorting an array in place w/o using extra arrays 

function multply(a,b){
    return a*b
}
console.log(multply(2,3))

// Linear SC

function copyArr(arr){
    const newArr = []
    for(let i=0 ; i < arr.length ; i++){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(copyArr([1,2,3,4,5]))


function sumArray(arr){
    let sum = 0
    for(let i=0; i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
sumArray([1,2,3,4])

// the time Complexity is O(n) and Space Complexity is O(1)
// HW: create nxm matrix using loops eg[[1,2,3],[4,5,6],[7,8,9]]

// O(logn) -> when the extra space sgrows but not at the same rate 
// eg recursiveBinary


function findValue(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true
        }
    }
    return false
}

console.log(findValue([1,2,3,4]))

// if target is 1 this will be best case O(1)
// if target is 5 or not present in the arr it is called as worst case O(n)

// Note in object : 
// insertion , deletion , access-> O(n)
// object.keys(), object.values(), object.entries(), search -> O(n)

// Note for TC which every algo or operatins affects the arrays or object or string the or takes itrations comes under n 


// Note : arr.sort() uses Timsort algo which is a hybrid of merge and insertion sort 
// Best Case: O(n) -> if array is alread sortd 
// worst case : O(nlogn)



function halfLoops(n){
    let i =1;
    while(i<n){
        i*=2
    }
}

// Note : here TC will be O(logn) because its not increasing linearly

// for string concat 
function buildString(arr){
    let result = ""
    for(let i = 0 ; i< arr.length; i++){
        result+=arr[i]
    }
}
// O(n^2)
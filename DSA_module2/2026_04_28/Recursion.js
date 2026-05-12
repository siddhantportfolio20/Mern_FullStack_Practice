function countDown(n){
    // Base case Very Important
    if(n==0){
        return
    }
    console.log(n)
    // Recrusive function
    countDown(n-1)

    // backtracking 
    console.log("hello",n)
}
countDown(5)


// function sumofN(n){
    
//     if(n==1){
//         return 1
//     }
//     return n + sumofN(n-1)
// }
// console.log(sumofN(5))

function power(base , exponent){
    if(exponent == 0){
        return 1
    }
    return base * power(base , exponent-1)
}
console.log(power(2,4))

//task :- find the sum of elements using recursion 

let arr = [1,2,3,4,5]

function sumofArray(arr,){
        if (arr.length == 0){
            return 0
        }
        return arr[arr.length-1]+sumofArray(arr,arr.length-1)
}
console.log(sumofArray(arr))

function sumOfArray(arr) {
    if (arr.length === 0) return 0;   // base case
    
    let last = arr.pop();             // take one element
    return last + sumOfArray(arr);    // recursive call
}

console.log(sumOfArray(arr)); // 15
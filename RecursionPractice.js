// extract all the odd element of the array
// arr = [1,2,3,4,5,6]


// let arr = [1,2,3,4,5,6]
// let arr2 = []
// function recursion(arr,i){

//     if( i == arr.length){
//         return 
//     }
//     if(arr[i]%2 !== 0){
//         arr2.push(arr[i])
//     }

//     recursion(arr,i+1)
    
// }
// recursion(arr,0)
// console.log(arr2)


// Helper function :- 

// let arr = [1,2,3,4,5]

// function Solution(arr){

//     let arr2 = []
//     // here the recursive function becomes a helper function because 
//     // it takes help from the outer function(i.e it uses elements fromt the outer function)
//     function helper(arr,i){

//         if( i == arr.length){
//             return 
//         }
//         if(arr[i]%2 !== 0){
//             arr2.push(arr[i])
//         }

//         helper(arr,i+1)
    
//     }
//     helper(arr,0)
//     return arr2
// }
// console.log(Solution(arr))


// Note :- when your recursive function is independent of outside variable and only dependent on the input that is 
//         it becomes a pure recursion function 

// flatten the below array
// for example input[1,[2,[3,4],5]]

// let input = [1,[2,[3,4],5,[6,7]]]

// function complex(arr,i){
// let result = []
//     for(let i = 0; i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result.push(...complex(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
    
// }
// console.log(complex(input,0))

function fib(n){
    if(n<2) return n
    return fib(n-1) + fib(n-2)
}
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(45))
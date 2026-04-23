function maxSumSlidingWindow(arr,k){
    if(arr.length < k){
        return "Invalid k"
    }
    let windowSum = 0
    // finding the su of first window 
    for(let i=0;i<k;i++){
        windowSum+=arr[i]

    }
    let maxSum = windowSum

    for(let i = k; i< arr.length ; i++){
        windowSum+= arr[i]-arr[i-k]
        maxSum = Math.max(maxSum,windowSum)
    }return maxSum
}console.log(maxSumSlidingWindow([5,2,-1,0,3],3))


// find all possible palidromes in the below string 
// ouptut = ["aba","aa"]
let str = "abba"

// function palidromes(str){
//     let ouptut = []
//     let left = 0 
//     let right = str.length -1 
//     while ( left <  right){
//         if(str[left]===str[right]){
//             ouptut.push(str[left])
//             ouptut.push(str[right])
//         }left++
//         right--

// }
// }console.log(palidromes(str))

// function palindrom(str){
//     let ouptut = []
//     for(let i = 0 ; i < str.length ; i++){
//         for(let j= i+2 ; j < str.length ; j++){
//             let sub = str.slice(i,j)
//             let reversed = sub.split("").reverse().join("")
//             if(sub == reversed){
//                 ouptut.push(sub)
//             } 
//         }
//     }return ouptut
// }console.log(palindrom(str))


function palindrome(str){
    let result = []

    function expand(left, right){
        while(left >= 0 && right < str.length && str[left] === str[right]){
            result.push(str.slice(left, right + 1))
            left--
            right++
        }
    }

    for(let i = 0; i < str.length; i++){
        // odd length
        expand(i, i)

        // even length
        expand(i, i + 1)
    }

    return result
}

console.log(palindrome("abba"))
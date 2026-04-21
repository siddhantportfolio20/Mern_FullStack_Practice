//task 1 : Do boundary travesral of a matrix 
// input :- 


// 5 4 6 3 
// 1 4 3 5 
// 5 1 9 6

// ouput :- 5463569151

let arr = [
    [5,4,6,3],
    [1,4,3,5],
    [5,1,9,6]
]
//(top <= down && left <= right)

let top = 0 
let right = arr[0].length -1 
let down = arr.length -1 
let left = 0
let res = []

for(let i = left ; i <= right ; i++){
    res.push(arr[top][i])
}top++

for(let i = top ; i<=down;i++){
    res.push(arr[i][right])
}right--

//right to left 
    for(let i = right ; i >=left ; i--){
        res.push(arr[down][i])
    }down-- 
    // bottom to top 
    for(let i = down ; i >= top ; i--){
        res.push(arr[i][left])
    }left++
console.log(res)

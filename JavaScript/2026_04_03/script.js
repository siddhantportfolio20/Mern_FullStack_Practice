let arr = [1,2,[3,4]];
console.log(arr.flat())

let arr1 =[1,[2,[3,[4]]]]
console.log(arr1.flat())
console.log(arr1.flat(3))

// Infinity to flatten the while array if you dont knnow the depth 
console.log(arr1.flat(Infinity))
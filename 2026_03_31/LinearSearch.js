// create a function search that takes an array and a target as input 
// task is to print yes if the element exists in the array and no if it does not 
// do not use array methods 
// input --> arr = [1,2,3,4] target = 4 & [1,2,3,4] target = 10


let arr = [1,2,3,4,5]
let target = 3

function search(arr,target){
    for (let i = 0;i<arr.length;i++){
        if(arr[i] === target){
            return "Yes"
        }
    }return "No"
}
console.log(search(arr,target))

// task1 :- make a countOccurene function that takes an array and target as input and return the number of occurances of the element 

let arr2 = [1,2,3,4,5,2,3,6]
let tar = 2
let count=0;
function countOccurene(arr,target){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
        count+=1
        }
        
    } if(count === 0){
        return -1
    }else{
        return count
    }
}
console.log(countOccurene(arr2,tar))


// task2 :-make findMax function that takes an array as input 
// ans returns the largest element in the array


function findMax(arr){
    let largestElement= arr[0];
    for(let i =0;i<arr.length ;i++){
        if(arr[i]>largestElement){
            largestElement = arr[i]
        }
    }return largestElement
}
console.log(findMax(arr2))




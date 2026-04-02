//Begining :- adding or removing element at the begining we use unshift & shift 
//End :- adding or removing element at the end we use push & pop 
/*
let fruit = ["apple","banana","mango"]

fruit.push("chikoo")
console.log(fruit)

let returnedValue = fruit.push("orange")

console.log("returnedValue", returnedValue)
console.log(fruit)

let arr =[1,2,3,4,5]
arr.push(6,7,8,9)
console.log(arr)


//Question :-

let fruit1 = ["apple","banana","mango","chikoo"]
let fruit2=[];

for(let i=0; i< fruit1.length;i++){
    fruit2.push(fruit1[i])
}

console.log(fruit2)

//2 write a function that takes an empty array and adds even number from 1 to 10
let arr=[]; 
let result;   

function evenNumbers(array){
    for(let i=0 ; i<10;i++){
        if(i%2==0){
         array.push(i)
        }
    }console.log(array)
}
evenNumbers(arr)

//pop()

let arr1=[1,2,3,4,5];
let result1= arr1.pop()
//arr1.pop() 
//arr1.pop()
//arr1.pop()
//arr1.pop()
//arr1.pop()
//arr1.pop()//[]
console.log(arr1)
console.log(result1) // 5
// even if we use multiple pop() it will not return error it will give an empty array 
// for tracking the elements that we are removing we can use a variable to store it 

          

// task you are given an array [1,2,3,4,5] create 2 functions 
//1st function is called as removeLastElement -> removes last element of the array and works only if there are elements in the array 

// 2 is undo function which wundos the revious action 

let store;
let arr = [1,2,3,4,5]
function removerLastElement(arr){
    if(arr.length < 0){
        console.log("enmpyt array")
    }else{
        store = arr.pop()
    }console.log(arr)
}

function undo(){
    if(store){
    arr.push(store)
    console.log(arr)
    }
    store = null
}
removerLastElement(arr)
removerLastElement(arr)
undo(arr)
undo(arr)
*/
// shift 
let arr= [1,2,3,4,5,6]
arr.shift();
let result = arr.shift()
console.log(arr)
console.log(result)

// unshift()

arr.unshift(0)
console.log(arr)
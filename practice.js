// // let presentation =0;
// // if (presentation ==10){
// //     console.log("u will get reward");
// // }
// // else{
// //     console.log("nothing ")
// // }

// let marks = 10;
// let result = (presentation ==10 ) ? "u will get reward " : "not reward"
// console.log(result);

// Switch case 
/*
let marks = "sidd" 
switch(marks){
//     case "sou":
//         console.log("1")
//         break
//     case "sidd":
//         console.log("10")
//         break

//     case "sdd":
//         console.log("12");

//     case "ags":
//         console.log("13")
//         break
//     }
// */
// // short circuit 

// let x = 0 || 20
// console.log(x)
// console.log(typeof NaN)
// let a = null
// console.log(typeof a)


// let vowels = "aeiou";
// let aa = "hello";
// let count = 0;

// for (let i = 0; i < aa.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (aa[i] === vowels[j]) {
//             count++;
//         }
//     }
// }

// console.log(count);
// let reversehell=[]

// for (let i = aa.length-1 ; i >= 0 ; i--){
//     reversehell.push(aa[i])
// }console.log(reversehell.join(""))

// console.log(aa.length)4

// let a = 20
// let b = a
// b = 10
// console.log(a)
// console.log(b)

// let arr = [1,2,3]
// let arr2 = structuredClone(arr)
// arr2[1] = 5 

// console.log(arr)
// console.log(arr2)

// let n ; 
// console.log(typeof(n))


// let a = 0.1
// let b = 0.2
// let c = 0.3
// let d = a + b 
// console.log(d)
// console.log(a)
// console.log()


// console.log({}=={})

// console.log([1,2]==[1,2])

// let a = []
// let b = []
// console.log(a == b)
// console.log(a === b)

// let obj1 = { a: 1, b: { c: 2 } }
// let obj2 = { ...obj1 }
// obj2.a = 2
// obj2.b.c = 99

// console.log(obj1)
// console.log(obj2)

// console.log([] + [])
// console.log([] + {})
// console.log({} + [])

// let a = 2 
// let b = 3

// b=+2
// console.log(b)
// console.log()

// let c = 0;
// console.log(2*++c)



//// ==================================  reasign and redecleare 


// const b = [1,2,3,4]
// b[0]=[1,2,3]
// console.log(b)

//====================== Question ========================

// Q1 
// Write a function that takes : 
// totalFoodCost , discountPercent , tipPercent. as input
// it returns an object {discountedTotal , tipAmount , finalTotal}
// hint : 
// discountedTotal is the discount applied on the total amount 
// tipPercentage is applied on discountedTotal 

// input :- calculateBill(200,10,15)
// output :- {
// discountedTotal : 180
// tipAmount : 27,
// finalTotal : 207
//}

// function calculateBill(totalFoodCost , discountPercent,tipPercent){
//     let obj = {}
//     let discountedValue = totalFoodCost * discountPercent/ 100
//     let discountedTotal = totalFoodCost - discountedValue
        
//     obj.discountedTotal = discountedTotal
        
//     let tipAmount = discountedTotal * tipPercent / 100 
        
//     obj.tipAmount = tipAmount
        

//     let finalTotal = tipAmount + discountedTotal
//     obj.finalTotal = finalTotal
//     console.log(obj)
//     }
// calculateBill(200,10,15)


// Q2 :-  Write a function fizzBuzzRange(start,end) that prints numbers from start to end but 
// replace , multiples of 3 with fizz , 5 with "Buzz" , both with "FizzBuzz"
// input -> fizzBuzzRange(10,20)
// output -> Buzz 11 Fuzz 13 14 FizzBuzz 16 17 Fizz 19 Buzz 


// function fizzBuzzRange(start,end){
//     let result = []
//     for(let i = start ; i <= end ; i++){
//         if (i % 3 ==0){
//             result.push("Fizz")
//         }
//         else if(i%5==0){
//             result.push("Buzz")
//         }else if(i % 3 == 0 && i % 5 == 0){
//             result.push("FizzBuzz")
//         }
//         else{
//             result.push(i)
//         }
//     }console.log(result)
// }
// fizzBuzzRange(10,20)



// Q3 :- 
// longestWord(["cat","elephant", "dog","butterfly"])

// function longestWord(arr){
//     let result = ""

//     for(let i = 0 ; i < arr.length ; i++){
        
//         if(arr[i].length > result.length){
//             result = arr[i]
//         }
//     }console.log(result)
// }
// longestWord(["cat","elephant", "dog","butterfly"])


// // Q4 :- mergeWithoutDuplicates([1,2,3],[2,3,4])
// // should return:[1,2,3,4]

// function mergeWithoutDuplicates(arr,arr2){
//     let arr3 = [...arr,...arr2]
//     let result =[]
//     for(let i = 0 ; i<arr3.length ; i++){
//         if(!result.includes(arr3[i])){
//             result.push(arr3[i])
//         }
//     }console.log(result)
// }

// mergeWithoutDuplicates([1,2,3],[2,3,4])

// function calculateSalary(baseSalary, bonusPercent, taxPercent){
//     let obj = {}
//     let bonusAmount = baseSalary * bonusPercent/100
//     obj.bonusAmount = bonusAmount
//     let total = bonusAmount + baseSalary
//     let taxAmount = total * taxPercent/100
//     obj.taxAmount =taxAmount
//     let finalSalary = total - taxAmount
//     obj.finalSalary = finalSalary
//     console.log(obj)
// }

// calculateSalary(50000, 10, 20)

// function evenOddRange(start,end){
//     let result = []
//     for (let i=start;i<=end ;i++){
//         if(i % 2 ===0){
//             result.push("even")
//         }else if(i % 2!==0){
//             result.push("odd")
//         }else{
//             result.push("zero")
//         }
//     }return result 
// }
// console.log(evenOddRange(3, 7))

// let arr = [10,20,30,40,50]

// console.log(arr.slice(1,3))

// let fruits = ["apple", "banana", "mango"]
// console.log(fruits.includes("banana"))

// console.log(fruits.indexOf("mango"))

// let arr2 = [1,2,3,4]
// console.log(arr2.reverse())

// fruits.push("orange")
// console.log(fruits)

// console.log(arr.pop())

// let arr3 = [2, 3];
// arr3.unshift(1);

// console.log(arr3); // [1, 2, 3]

// console.log(arr2.concat(arr3))

// let index = fruits.indexOf("banana")
// let res =fruits.splice(index,1,"mango")
// console.log(fruits)

// let index30 = arr.indexOf(30)
// arr.splice(index30 , 2)
// console.log(arr)

// let arr4 = [10,20]
// let arr5 = [30,40]
// console.log(arr4.concat(arr5).reverse())

// let alpha = ["a","b","c","d"]
// let indexalpha = alpha.indexOf("b")
// alpha.splice(indexalpha,1,"x","y")
// console.log(alpha)

// Given two array check if they have any common elements 
// let a =[1,2,3]
// let b =[3,4,5]

// for(let i = 0 ; i< a.length ;i++){
//     if(a.includes(b[i])){console.log(b[i])}
// }

// let arr6 = [1,2,3,4,5]

// let remove = arr6.shift()
// arr6.push(remove)
// console.log(arr6)

let arr= [1,2,3,4,5,6]

let number = arr %2 === 0
let index = arr.indexOf(number)
arr.splice(index,1)
console.log(arr)


let num = 5.247845
console.log(".toFixed")
console.log(num.toFixed(1))
console.log(num.toFixed(2))
console.log(num.toFixed(3))
console.log(num.toFixed(4))
console.log(num.toFixed(5))
console.log(num.toFixed(6))
console.log(num.toFixed(7))
console.log(num.toFixed(8))

let a = " "
let b = "1"

console.log(Number(a))

console.log("parseInt")
console.log(parseInt("44"))
console.log(parseInt("44.45"))
console.log(parseInt("-44.45"))
console.log(parseInt(34))

console.log(parseFloat("34"))
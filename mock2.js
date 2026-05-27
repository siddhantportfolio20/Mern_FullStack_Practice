// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// let n = 5
// for(let i = 0 ; i <= n ;i++ ){
//     let row=""
//     for(let j = 0;j < i ;j++){
//         row+="*"
//     }console.log(row)
// }

// for(let j = n ; j > 0 ;j--){
//     let row=""
//     for(let i = 0;i < j ;i++){
//         row+="*"
//     }console.log(row)
// }


// Count digits :- 

let n = 5

// function countDigits(n){
//     if(n <=0){
//         return 0
//     }

//     return 1+countDigits(Math.floor(n/10))
// }
// console.log(countDigits(n))

// function factorial(n){
//     if(n<1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(n))

// const products = [

//  {id:1,name:"Laptop",category:"Electronics",price:65000,rating:4.5,tags:["Tech","Portable"]},



//  {id:2,name:"Shoes",category:"Fashion",price:3000,rating:4.1,tags:["Sports","Casual"]},



//  {id:3,name:"Phone",category:"Electronics",price:45000,rating:4.8,tags:["Tech","Android"]},



//  {id:4,name:"Watch",category:"Accessories",price:5000,rating:3.9,tags:["Fashion","Luxury"]},



//  {id:5,name:"Headphones",category:"Electronics",price:4000,rating:4.6,tags:["Tech","Music"]},

//  {id:6,name:"Bag",category:"Fashion",price:2500,rating:4.2,tags:["Travel","Casual"]}

// ];

// let res = products.filter((values)=> values.category == "Electronics" && values.price >= 4000 && values.tags.includes("Music"))

// console.log(res)



const matrix1 = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];

for(let i = 0 ; i < matrix1.length;i++){
    
    if(i%2 == 0){
        for(let j = 0 ; j < matrix1.length ; j++){
            console.log(matrix1[i][j])
        }
    }else{
        for(let j = matrix1.length -1; j >= 0  ; j--){
            console.log(matrix1[i][j])
        }
    }
    
}

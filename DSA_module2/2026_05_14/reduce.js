let arr = [1,2,3,4,5]
// let result = arr.reduce((sum,i) => {
//     console.log("sum",sum) // sum has the sumed value of the array
//     console.log("i", i) // i has single values of the array 
 
//     return sum + i

// } ,0 )

// console.log(result)

// reduce() -> it is used when you want to combine all array elements into a single array 
// Note :- if acc value is not initialixed it by default will take the 1st value of the arrray ie. arr[0]

// let mul = arr.reduce((mul , i) => {
//     console.log(mul)
    
//     return mul * i} )
// console.log("multiplication :- " , mul)

// find the total price 

const cart = [
    {item : "shirt" , price: 700},
    {item : "jeans", price : 1500},
    {item : "shoes" , price : 2500}
]


let total = cart.reduce((price , i) => price + i.price , 0)
console.log(total)


let fruits = ["apple",'banana',"apple","orange","banana","apple"]


// method 1 

// let freq = new Map()

// for(i of fruits){
//     freq.set(i , (freq.get(i) || 0) + 1)    
// }
// console.log(freq)


// method 2 ;- 

// let result = {}

// for(let i = 0 ; i< fruits.length ; i++){
//     let word = fruits[i]
//     if(result[word]){
//         result[word] ++
//     }
//     else{
//         result[word] = 1
//     }

// method 3 :- 

//     result[word] = (result[word] || 0) + 1
// }


let freq = fruits.reduce((count , i) => {
    
    if(count[i]){
        count[i] += 1
    }else{
        count[i] =1
    }
    return count
},{})

console.log(freq)

let words = ["hii","siddhant","this","side"]

let Output = words.reduce((join , i) => join + " " +i , "")
console.log(Output)


const products = [
 {id:1,name:"Laptop",category:"Electronics",price:65000,rating:4.5,tags:["Tech","Portable"]},

 {id:2,name:"Shoes",category:"Fashion",price:3000,rating:4.1,tags:["Sports","Casual"]},

 {id:3,name:"Phone",category:"Electronics",price:45000,rating:4.8,tags:["Tech","Android"]},

 {id:4,name:"Watch",category:"Accessories",price:5000,rating:3.9,tags:["Fashion","Luxury"]},

 {id:5,name:"Headphones",category:"Electronics",price:4000,rating:4.6,tags:["Tech","Music"]},

 {id:6,name:"Bag",category:"Fashion",price:2500,rating:4.2,tags:["Travel","Casual"]}
];

// let result = products.reduce((join ,  i)=> {
    
//     if(join[i].category){
//         price +=join[i].price
//     }
// },0)
// console.log(result)

let result = products.filter(item => item.category== "Electronics").reduce((sum,item)=> sum+item.price,0)

console.log(result)
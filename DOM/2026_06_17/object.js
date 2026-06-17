// // ------------ this keywords


// // ----------- working of " this " inside object 
// let obj = {
//     name: "Siddhant",
//     a : 3,
//     b : 4,
//     greet: function(){
//         console.log("hello " + this.name);
//     },
//     sum: function(){
//         console.log(this.a + this.b);
//     },
//     mul(){
//         console.log(this.a * this.b);
//     }

// }
// obj.greet()
// obj.sum()
// obj.mul()
// // ouput : hello Siddhant


// // ------------------ Working of this outside of an object 
// // function fun(){
// //     console.log(this);
// // }
// // fun()
// // ouput: [object Window]


// // ----------- Working of "this " inside nested object

// let obj2 = {
//     name: "Siddhant",
//     obj1:{
//         name: "Sourish",
//         fun1(){
//             console.log(this.name);
//         }
//     }
// }

// // this only targets the parent name not the outer name 
// obj2.obj1.fun1() // Sourish 

// -------------- funciton outside but using this for targeting elements inside object 
// ---- using single funciton in multiple object
function func(){
    console.log("hello " + this.name);
}

let obj1 ={
    name:"Siddhant",
    greet:func
}

let obj2 = {
    name:"Sourish",
    greet:func
}

obj1.greet()
obj2.greet()



// ------------------- call bind apply 
// In Js call bind apply are built in methods used to 
// explicitely set the execution ie. sets the "this " inside a function 
// in simple words --> they allow us to borrow the this of an object to be used inside a function 

const person1 = {
    name: "Siddhant"
    ,age:23
}
const person2 ={
    name : "Sourish"
    , age:12
}

function introduce(city,country){
    return `${this.name} is ${this.age} years old from ${city}, ${country}`
}

// call()
// call() invokes (calls) a function immediately and allows you to set the value of this.
console.log(introduce.call(person1,"Pune","India"));

let arr = [["Goa","Pune"],"India"]
// apply()
//apply() is similar to call(), but arguments are passed as an array.
console.log(introduce.apply(person2,arr));


//bind()
//bind() does not execute immediately. It creates a new function with a fixed this value.
const introducePerson1 = introduce.bind(person1)
console.log(introducePerson1("Pune","India"));


// --------- Reallife example of call apply and bind 

const counter = {
    count:0
    ,
    increment(){
        this.count++
        console.log(this.count);
    }
}
let func1 = counter.increment.bind(counter)
func1();
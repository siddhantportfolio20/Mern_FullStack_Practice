// const user = {
//     name: "Seema"
// ,   hobbies: ["reading","coding","gaming"]

// // Function declaration 
//     // showHobbies:function(){
//     //     this.hobbies.forEach(function(hobby){
//     //         console.log(this);
//     //         console.log(this.name + " likes " + hobby);
//     //     })
//     // }
// // Arrow Function 

//     ,showHobbies(){
//         this.hobbies.forEach(item =>{
//             console.log(this.name + " likes " + item);
//         })
//     }
// }
// // Note : When you pass callback function as a function declaration (means function hobby(){}) 
// // this will be your window object
// // but you can fix it using an arrow function 
// // Arrow function do not have their own " this " they borrow it form the enclosing scope
// user.showHobbies()

// //------------------------ Constructor Function ------------------

// // A constructor Function is a special function that serves as a blueprint for creating multiple object 
// // with similar properties and behaviors 

// // Constructor Function have the first letter as capital 
// // the new keyword helps in vreating a new instance for the Constructor Function 

// // if we want to make any new object from a blue print of a function we use new keyword 

// function Person(name , age , city){
//     this.name = name,
//     this.age = age,
//     this.city = city
// }

// const person1 = new Person("Siddhant",23,"Pune")
// const person2 = new Person("Sourish",16,"Pune")
// const person3 = new Person("Atharva",23,"Pune")
// const person4 = new Person("Sai",23,"Pune")
// console.log(person3,person4,person1,person2);


// function User(username , email , role="user"){
//     this.username = username || "Guest"
//     this.email = email
//     this.role = role
//     this.isActive = true
//     this.accountCreated = Date.now()
// }
// // Date.now() = shows time 
// let user1 = new User("nova","nova@gmail.com","admin")

// console.log(user1);

// HomeWork Date


// function Calculator(brand){
//     this.brand = brand
//     this.currentValue = 0

//     // instance method 
//     this.add = function(num){
//         this.currentValue = this.currentValue + num
//         return this.currentValue
//     }
//     this.reset = function(){
//         this.currentValue = 0
//     }
// }
// let cal1 = new Calculator("casio")
// console.log("adding 5 in currentValue " +cal1.add(5));
// console.log("adding 5 in currentValue " +cal1.add(5));
// cal1.reset()
// console.log("Reseting the currentValue " +cal1.add(6));


// ------------------- Task create  a constructor function Rectangle which takes length and width as input 
// it has 3 methods 
// 1. getArea() --> returns the area of rectangle 
// 2. getPerimeter() --> return the perimeter of the rectangle
// 3. isSquare() -- > returns true if its a square and false if its not 


// function Rectangle(length, width) {
//     this.length = length;
//     this.width = width;

//     this.getArea = function() {
//         return this.length * this.width;
//     };

//     this.getPerimeter = function() {
//         return 2 * (this.length + this.width);
//     };

//     this.isSquare = function() {
//         return this.length === this.width;
//     };
// }


// const rect1 = new Rectangle(10, 5);

// console.log(rect1.getArea());       // 50
// console.log(rect1.getPerimeter());  // 30
// console.log(rect1.isSquare());      // false

// const rect2 = new Rectangle(4, 4);

// console.log(rect2.getArea());       // 16
// console.log(rect2.getPerimeter());  // 16
// console.log(rect2.isSquare());      // true


// -------------------------- ProtoType ---------------------

// each object instance created using constructor function gets its own instance copy of every method
// this can be memory- insufficient if you create 100's of objects 
// Prototype allows us to share methods accross all instances without duplicating them 

function Car(brand , model){
    this.brand = brand 
    this.model = model 
}

Car.prototype.displayInfo= ()=> {
    return this.brand + " " + this.model
}

let car1 = new Car("BMW","M1")
let car2 = new Car("BMW","M2")
let car3 = new Car("BMW","M3")
let car4 = new Car("BMW","M4")
console.log(car1,car2,car3,car4);

//
function Animal(name){
    this.name = name
    this.species = "Generic Animal"
}
Animal.prototype.makeSound = function(){
    return this.name + " makes a Sound"

}

Animal.prototype.setAge = function(value){
    this.age = value
}

const dog  = new Animal("buddy")

console.log(dog.makeSound());
dog.setAge(5);
console.log(dog.age);
console.log(dog);
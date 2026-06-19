// // Classes in Js are templates for creating objects 
// // they encapsulate data and behaviour into a single structure
// class User{
//     constructor(username,email){
//         this.username = username
//         this.email = email
//     }
//     greet(){
//         console.log(`hello ${this.username}`);
//     }
// }

// const user1 = new User("siddhant102018","siddhantwork78@gmail.com")

// console.log(user1);
// console.log(user1.username);
// console.log(user1.email);
// user1.greet();

// // Note : the methods created inside your CLass automatically are assigned inside thhe Prototype 

// class Student{
    
//     section = "C"
//     constructor(name , age,marks){
//         this.name = name
//         this.age = age
        
//         this.marks = marks 
//         if(marks >= 90){
//             this.grade = "A"
//         }else if(marks >= 80){
//             this.grade = "B"
//         }
//         else if(marks >= 61){
//             this.grade = "C"
//         }else{
//             this.grade = "F"
//         }
//     }

//     display(){
//         console.log(`Name: ${this.name} , Age: ${this.age} , Grade: ${this.grade}`);
//     }

// }

// let student1 = new Student("Siddhant",23,85)

// console.log(student1);
// student1.display()

// Getter and Setter 
// Used for controlling the object 

// class Validation{
//     constructor(name,age){
//         this._name = name
//         this._age = age
//     }
//     get age(){
//         return this._age
//     }
//     set age(value){
//         if(value > 100 || value < 0) console.log("Invalide Age");
//         else this._age = value    
//     }
// }

// const user1 = new Validation("siddhant",20)

// console.log(user1._age);
// console.log(user1.age);
// user1.age = 500 // Invalid
// user1.age = 25 

// console.log(user1);

// // Geetters and Setter are speciall methods that allow 
// // controlled accesss to properties . Getter retrieve values 
// // setter modify them
// // they are accessed like properties and not methods 

// //staticMethods 

// Static methoods belong to the class itself , not to the instance 
// they are called on the class and not on object

// class User{
//     constructor(name , role){
//         this.name = name
//         this.role = role
//     }
//     static createAdmin(name){
//         return new User(name , "Admin")
//     }
//     static createGuest(name){
//         return new User(name,"Guest")
//     }

// }
// const person1 = User.createAdmin("Siddhant")
// const person2 = User.createGuest("Sourish")

// console.log(person1);
// console.log(person2);

// class BankAccount{
//     #balance;
//     constructor(name,initialBalance){
//         this.name = name
//         this.#balance = initialBalance
//     }
//     deposite(amt){
//         this.#balance +=amt
//     }
//     getBalance(){
//         return this.#balance
//     }
// }
// let user1 = new BankAccount("Siddhant",10000)
// user1.deposite(5000)
// console.log(user1);
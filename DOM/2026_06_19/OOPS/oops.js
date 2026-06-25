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



// //----------------------- Encapsulationn --------------------------------
// // encapsulation is hiding internal implementation detials and exposing only necessary interfaces 
// // .Private fields enforce true encapsultaion by making fields genuinely inaccessible from outside

// // Public vs Private 

// class DataComparison{
//     #privateData = "I am private Data"
//     publicData = "I am public Data"

//     #privateMethod(){
//         console.log("I am private Method ");
//     }
//     publicMethod(){
//         console.log("I am public Method");
//         this.#privateMethod()
//     }
//     testAccess(){
//         this.#privateMethod()
//         this.publicMethod()
//         console.log(this.#privateData);
//         console.log(this.publicData);
//     }
// }

// const obj = new DataComparison()
// // console.log(obj.#privateData);// Private field '#privateData' must be declared in an enclosing class
// // obj.publicMethod()
// // obj.#privateMethod()// Private field '#privateData' must be declared in an enclosing class
// obj.testAccess()

// // Not Imp but you should kknow this 

// class Card{
//     constructor(title, content){
//         this.title = title;
//         this.content = content;
//     }
//     render(parentId){
//         this.element = document.createElement("div")
//         this.element.className = "card"
//         this.element.innerHTML = `<h3>${this.title}</h3> <p>${this.content}</p>`
//         const parent = document.getElementById(parentId)
//         parent.appendChild(this.element)
//     }
//     remove(){
//         this.element.remove()
//     }
// }

// const card1 = new Card("Title 1", "lkasjdljsdf;jl;sfajdfkdjsdjfa;jk")
// const card2 = new Card("Title 2","ashdffkjhasdkjlhsfdljkhfjsdbf")
// card1.render("container")
// card2.render("container")


// // ------------------------- Inheritance -------------------------------------
// Allows classes to reuse code from the parent classes by inheriting their properties 

// class Animal{
//     constructor(name){
//         console.log("Animal Constructor (Parent)");
//         this.name = name;

//     }
//     speak(){
//         console.log(`${this.name} makes a sound`);
//     }
    
// }
// class Dog extends Animal{
//     constructor(){
//         super() // Super Keyword
//         console.log("Dog Constructor (child)");
//     }
    
//     bark(){
//         console.log(`${this.name} barks`);
//     }
// }
// const dog = new Dog("buddy")
// dog.bark()
// dog.speak()

// // super() : the super() keyword calls the parent constructor and must be
// //  called before accessing this in child class 

// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age
//     }       

// }
// class Student extends Person {
//     constructor(name,age,gender){
//         super(name , age)
//         this.gender
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }
// class Showmarks extends Student{
//     constructor(name,age,gender,marks){
//         super(name,age,gender)
//         this.marks = marks
//     }
//     getmarks(){
//         console.log(`${this.name} this is your marks : ${this.marks}`);
//     }
// }
// const student1 = new Showmarks("Siddhant",23,"Male",90)
// student1.study()
// student1.getmarks()


// // another example for child accessing students methods 

// class Phone{
//     #price
//     constructor(brand,price) {
//         this.brand = brand
//         this.#price = price
//     }
//     call(){
//         console.log("Is calling");
//     }
//     // getting the acces for price in child class 
//     getPrice(){
//         return this.#price
//     }

// }
// class SmartPhone extends Phone{
//     constructor(brand,price){
//         super(brand,price)
//     }
//     takePhoto(){
//         console.log(`${this.brand} takes Photo`);
//         console.log(`price of the phone is ${this.getPrice()}`);
//     }
// }

// const phone1 = new SmartPhone("samsung",150000)
// phone1.call()
// phone1.takePhoto()


// //-------------------------------- Abstraction ----------------------
// // Abstraction hides commplex implementation detials and exposes the 
// // necessary functionality


// class CofeeMachine{
//     #boilwater(){
//         console.log("water is boiling");
//     }
//     #brew(){
//         console.log("Brewing");
//     }
//     makeCofee(){
//         this.#boilwater()
//         this.#brew()
//         console.log("Coffee is ready");
//     }
// }

// const machine = new CofeeMachine()
// machine.makeCofee() // here we only gave the access on making the coffe not boiling the water 
// // in abstraction there is no security only final ouput matters 

// // ------------------------- Polymorphism --------------------
// // Polymorphism : Method Overriding
// // Allows objects of differnet classes to be treated as obj's of a common parent class while maintaining their specefic behaviour 
// class Animal{
//     makeSound(){
//         console.log(" Some Sound");
//     }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("Woof");
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log("Meow");
//     }
// }

// const dog = new Dog()
// dog.makeSound() // Woof
// let cat = new Cat()
// cat.makeSound() // Meow 

// // EG : 2 
// class Vehicle{
//     start(){
//         console.log("Engine is starting");
//     }
// }
// class Car extends Vehicle{
//     start(){
//         super.start()
//         console.log("Car is running");
//     }
// }
// let car = new Car()
// car.start()

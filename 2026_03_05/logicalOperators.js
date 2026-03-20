console.log("")
console.log("**************************** Or operator ****************************")

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

let a = -7
let b = 2
let c = 1
let r = a || b || c // here it will return a  

console.log(r)


//eg :- if manager as to give a form where if the user does not give any value it will be anonymus

let firstName ="";
let lastName = ""
let userName = "";

let result = firstName || lastName || userName || "Anonymus"
console.log(result)

console.log("")
console.log("**************************** And operator ****************************")
// AND

console.log(true && true) // true 
console.log(true && false)// false
console.log(false && true)// false
console.log(false && false)// false

// eg :- checking 

let age = 20
let isFemale = true

if(age>18){
    if (isFemale){
        console.log("its an adult female")
    }
}

if(age > 18 && isFemale){
    console.log("its an adult female")
}
console.log("")
console.log("**************************** Not operator *****************************")
// Not 

isFemale = !isFemale
console.log(isFemale)

// Nullish operator 
console.log("")
console.log("**************************** Nullish operators **************************")

let A = 1
let B = 2;

console.log(A ?? B)// 1

let C
let D = 2 

console.log(C??D) //2

let f
let U
let L
let results = f ?? U ?? L ?? "Anonymus"

console.log(results)

let height = 0
console.log("or operator :- " ,height || 100)
console.log("Nullish operator :- " ,height ?? 100)
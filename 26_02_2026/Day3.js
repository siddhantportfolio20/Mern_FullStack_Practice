//Arithematic operators 
console.log("Arithematic operations ")
let a = 1;
let b = 2;

console.log(`Addition = ${a+b}`)
console.log(a/b)
console.log(a-b)
console.log(a*b)


// -----------------------------------------------------------
let c =1 
// unary operators 
console.log("Unary operators ")
c = -c 

console.log(c) // -1

let s = 16**(1/2) 
console.log(s)//4   Note : this in math is root 16 another form of writing 

console.log("Addition operator behaviour")
let str1 = "hello"
let str2 = "world" 
let name = "Siddhant "
let ages = 21
console.log(str1 + " " + str2 )
console.log("My name is "+name+ "and my age is "+ ages)

console.log("1"+1)

//Type convo
let age = "21"
console.log("TYPE CONVO")
console.log(Number(age)) // integer
console.log(+age) // integer
console.log(age) // string

let x = "1"
let y = "2"
console.log("+x + +y ==")
console.log(+x + +y)

let g = "1 2 3"
let v = "23"
console.log(+(g,v))

// Extra info 
console.log("Extra Info ")
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number("")) // 0
console.log(Number(undefined)) // NAN
console.log(Number(null)) // 0

console.log("New")
let w = 1
let e= 2
let r = 3 - (w==e +1)
console.log(w) // 1
console.log(r) //3 


// modify in place 

w = w+2
console.log(w)
w = w+5
console.log(w)
w += 2 +5
console.log(w)
w +=2 
console.log(w)
let n = 2
 n = n*3 +5
console.log(n)
let h = 2
h *= 3 +5
console.log(h)

/*
let aa = 5;
// here the previous value is returned and then the balur is added 
let bb   = ad++ // 5 

// value is added and then returned
let cc = ++ad // 6
*/
// Questions :-
 
let total = 700;
let discount = 15 ;
// calculate the discount amount 
let discountprice = discount*total/100
console.log(total-discountprice)

let fereniet = 100
// calculate fereniet to celsius 

let Celsius = 5/9 *(fereniet - 32)
 console.log(Celsius)

let salary = 50000
let increment = 15
let deduction = 10

let finalsalary = salary + (increment * salary / 100) - (deduction * salary / 100)


console.log(finalsalary)
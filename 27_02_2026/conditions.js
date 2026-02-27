// less than and greater than

console.log(2>3)
console.log(3>=2)

console.log(3=="3")// true
console.log(3==="3")// false 

console.log(1 == true) // true 
console.log(null == undefined) // true
console.log(""== 0) // true

//not equal to 
console.log(3!=5)// true 
console.log(5!=5)//false
console.log(5!="5")// false
console.log(5!=="5")// true

//string comparison 

console.log("z","a") // true
console.log("Glow","Glee") //true
console.log("Bee">"Be") //true
console.log("Bee">"bee")// false explanation :- B comes before in Ascii values 

// comparison in different types 
// when comparing 2 values if any one value is a number JS will convert the other to a number 
// the string 2 gets connverted into number and then the comparison occurs 
console.log("2">1) //true 

// true is converted into a number which is 1
console.log(true == 1) //true

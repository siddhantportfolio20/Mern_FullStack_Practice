// Conditional questions :-

//Q1 :-  You are given a number n and you have to print if it is positive or negative or zero

let n = -3
if (n >0){
    console.log("The number is positive")
}
else if(n < 0){
    console.log("The number is negative")
}
else{
    console.log("the number is zero")
}


let s = 2.34

if (Math.floor(s)%2 ==0){
    console.log("even")
}
else{
    console.log("odd")
}


//Q3 you are given 3 numbers a,b,c now you have to print which one is greater ?? 

// eg : if a is greater than b and c print a is largest

let a = 3
let b = 41
let c = 5

if (a>b){
    if (a>c){    
    console.log("A is greater")
    }}
if (b>c){
    if (b>a){
    console.log("B is greater ")
}}
else if (c>b){
    if(c>a){
    console.log("C is greater ")
}}

// approch 

if (a>b){
    if(a>c){
        console.log("A is the largest")
    }
    else{
        console.log("C is the largest")
    }
}else{
    if(b>c){
        console.log("B is the largest")
    }
    else{
        console.log("C is the largest")
    }
}


// using logical operators 

if (a>b && a>c){
    console.log("A is greater")
}else if (b>a && b>c){
    console.log("B is greater")
}
else{
    console.log("c is greater")
}

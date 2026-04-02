 // console.log("String")


// // if you want to display the string in a particular format use backticks 
// // using "" or '' will not work here 
// let fruits = `fruits :- 
//     * apple 
//     * banana
//     * "kiwi"
// `
// console.log(fruits)


// let fruits1 = "fruits \n  *apple \n *banana \n *kiwi"
// console.log(fruits1)


// let str1 = "hello\nworld"
// let str2 = `hello
// world`

//if(str1 == str2 ) console.log("they are same ")

// to print backslack we use \\ double backslash 

//eg : -  clg("backslack :- \\ ")

console.log("Hii i\'m  jose Mourinho")
console.log("Hii i\'m  \"jose Mourinho\"")



// ------------------------------------------- tab ------------------------------
// console.log("Hi \t I\'m \t jose Mourinho")


let str = "Hello"

// console.log(str[0])// h
// console.log(str[str.length - 1]) // 0

// console.log(str.at(0))
// ----------- Note :- you cannot use -ve index in str[] but you can use it in str.at()

// for (let char of str){
//     console.log(char)
// }

/////////// string are un mutable /////////////

let arr = ["h","e","l","l","o"]

// arr[0] = "H"
// str[0] = 'H'

/////////// upercase /////////////////////

console.log(str.toUpperCase())

console.log(str[0].toUpperCase().concat(str.slice(1)))

let STR = " HELLO "

console.log(STR.toLowerCase())


// Task 1 :- you are given a string convert it into camel case implement the function to do this 

// function camelCase(str){
//     console.log(str[0].toUpperCase().concat(str.slice(1).toLowerCase()))
// }
// camelCase("jAVAsCript") 


// ------------------------------  Indexof =================================================

// this gives the starting index of the word 
// syntax = str.indexOf(substring,index or number (optional))
let str2 = "Widget with id"

// console.log(str2.indexOf("Widget"))// 0
// console.log(str2.indexOf("with"))// 7
// console.log(str2.indexOf("id",2))// 12
// console.log(str2.indexOf("id"))// 1


 // ===================================== indcludes =================================
// console.log(str2.includes("id")) // true 
// console.log(str2.includes("widget")) // false  

// ====================== startsWith , endsWith ==========================

// console.log(str2.startsWith("Wid"))
// console.log(str2.endsWith("id"))


// ===================== Substring ===================================
// same as slice only advantage is it take 2 as first not 6 
// in substring if the 1st index is greater than the 2nd index
// it will interchange them to give the right answer 
// substring does not support negative index 

// console.log(str.substring(6,2))

//============================== 3. substr =======================
// syntax -> str3.substr(index, substring length )

let str3 = "stringify"

console.log(str3.substr(2,5)) // ringi

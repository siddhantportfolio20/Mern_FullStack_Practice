// let char = "ABC"
// console.log(char.charCodeAt(1))

// let aschiCode = 66
// console.log(String.fromCharCode(aschiCode))

// // replace and replace all 

// let message = "Javascript is fun . Javascript is powerful"

// console.log(message.replace("Javascript","js")) //js is fun . Javascript is powerful

// console.log(message.replaceAll("Javascript","js")) // js is fun . js is powerful

// let input = "hi.I.am.siddhant,.nice.to.meet.you"

// console.log(input.replaceAll("."," "))


// ////// split and join ""

// // 1.> split takes string as an input and array as an ouput 
// // 2.> splits the string according to the given characters 
// console.log(input.split("."))
// let joinResult = input.split(".")
// console.log()

// //// 1> join takes array as an input and string as an output 

// console.log(joinResult.join(" "))


/// ================= Question =====================

// task create a acronym generator 
// eg input national aeronautics space adminstration 
// output :- NASA

// let str = "national aeronautics space adminstration"

// function acronym(string){
//     let result = ""    
//     let words = string.split(" ")
//     for (let i = 0 ; i < words.length;i++){
//         let word = words[i]
//         let capitallizer = word[0].toUpperCase()
//         result = result + capitallizer 
//     }return result
// }
// console.log(acronym(str))


///////// trim() ////////////

let name = " siddhant  "

// Removes spaces from both the sides. 
console.log(name.trim())
// Removes space from front or start 
console.log(name.trimStart())
// Removes space from end or back 
console.log(name.trimEnd())


////////// padding //////////////
//// used for masking values 
//// syntax str.padStart(length of the string, char you want to mask)

let code = "56"

console.log(code.padStart(10,"*"))
console.log(code.padEnd(10,"*"))


////// Questions ////////

// //// Task 1 
// // print the reverse of a string 

// let a = "hello"
// let reversehell = []
    
// function reverse(a){
//     for (let i = a.length-1 ; i >= 0 ; i--){
//         reversehell.push(a[i])
//     }
//     return reversehell.join("")
// }
// console.log((reverse(a)))

// Method 2 

// console.log(a.split("").reverse().join(""))

// task 2: for a given string count the number of vowels 



// function findVowels(a){
//     let vowels = "aeiou"
//     let count = 0
//     for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (a[i] === vowels[j]) {
//             count++;
//         }
//     }
// }return count
// }
// let result = findVowels(a)
// console.log(result)


let a = "malayalam"

    
function reverse(a){

    let reverses = (a.split("").reverse().join(""))
    if (reverses === a ){
        return "is palidrom"
    }else{
        return "is not a palidrom"
    }
}
console.log(reverse(a))


// task 4 :- convert in camelCase


let str = "national aeronautics space adminstration"

function acronym(string){
    let result = ""    
    let words = string.split(" ")
    for (let i = 0 ; i < words.length;i++){
        let word = words[0].toLowerCase()
        let capitallizer_first = word[0].toUpperCase()
        result = result + capitallizer 
    }return result
}
console.log(acronym(str))
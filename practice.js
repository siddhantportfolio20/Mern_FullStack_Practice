// // let presentation =0;
// // if (presentation ==10){
// //     console.log("u will get reward");
// // }
// // else{
// //     console.log("nothing ")
// // }

// let marks = 10;
// let result = (presentation ==10 ) ? "u will get reward " : "not reward"
// console.log(result);

// Switch case 
/*
let marks = "sidd" 
switch(marks){
    case "sou":
        console.log("1")
        break
    case "sidd":
        console.log("10")
        break

    case "sdd":
        console.log("12");

    case "ags":
        console.log("13")
        break
    }
*/
// short circuit 

let x = 0 || 20
console.log(x)
console.log(typeof NaN)
let a = null
console.log(typeof a)


let vowels = "aeiou";
let aa = "hello";
let count = 0;

for (let i = 0; i < aa.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (aa[i] === vowels[j]) {
            count++;
        }
    }
}

console.log(count);
let reversehell=[]

for (let i = aa.length-1 ; i >= 0 ; i--){
    reversehell.push(aa[i])
}console.log(reversehell.join(""))

console.log(aa.length)
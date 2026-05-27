// console.log("Sorting")
// let arr= [1,2,15]
// arr.sort() 
// // {{{{ this compares as a strinng and the ouput will be arr= [1,15,2] because it compares as a string 
// // so for sortin we use another thing 
// // if you only write arr.sort() it will convert the numbers into string and compare them 
// // ie. sort() by default does string comparison }}}} 

// // ascending order 
// function compare(a,b){
//     if(a>b) return 1
//     if(a==b) return 0
//     if(a<b) return -1
// }


// arr.sort(compare)
// console.log(arr)

// // for one line sort solution 

// let arr2 = [1,-2,15,2,0]
// arr2.sort(function(a,b){
//     return a - b // for ascending order 
// })
// // for descending order we use b - a



// let students = [
//     {name : "Pranav", marks: 50},
//     {name : "Siddhant", marks: 100},
//     {name : "Sourish", marks: 5},
//     {name : "Atharva", marks: 80},
//     {name : "Harsh", marks: 45}
// ]

// students.sort(function(a,b){
//     return a.marks - b.marks
// })
// console.log(students)

// students.sort(function(a,b){
//     return a.name - b.name
// })
// console.log(students)


let students = [
  { name: "pranav", marks: 50, skills: { arr: ["js", "html", "python"] } },
  { name: "sourav", marks: 100, skills: { arr: ["js", "python"] } },
  { name: "ansh", marks: 5, skills: { arr: ["js"] } },
  { name: "pragya", marks: 80, skills: { arr: ["js", "html", "python", "c++"] }},
  { name: "swathi", marks: 45, skills: { arr: ["js", "html", "python"] } },
];


students.sort(function(a,b){
    return a.skills.arr.length - b.skills.arr.length
})
console.log(students)
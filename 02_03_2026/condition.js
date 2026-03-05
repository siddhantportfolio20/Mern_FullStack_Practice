let year = "1947";
if (year > 1947) {
  console.log("wrong greater");
} else if (year < 1947) {
  console.log("wrong less");
} else {
  console.log("you won");
}

let age = 21;
/*
if (age) {
  if (age >= 18) {
    console.log("Vote");
  } else {
    console.log("no Vote");
  }
} else {
  console.log("no input");
}
//if (age>=18) console.log("Not recommened if statement")
// please use the below if you only want to execute a single line of block code
*/
// Reactjs
(age >= 18) ? console.log("Vote") : console.log("no Vote")

let message = (age) ? (age >= 18) ? "Vote" : "No Vote" : "user has not enterred valid input"  
console.log(message)


let result = 
score >= 90 ? "Grade A" : score >= 80 ? "grade B" : score >= 70 ? "Grade C" : ""


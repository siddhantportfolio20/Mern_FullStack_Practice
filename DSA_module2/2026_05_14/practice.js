const employees = [
  { id: 1, name: "Ananya", dept: "Engineering", salary: 75000, age: 28, skills: ["JS", "React", "Node"] },
  { id: 2, name: "Rohan", dept: "Design", salary: 52000, age: 34, skills: ["Figma", "CSS", "HTML"] },
  { id: 3, name: "Priya", dept: "Engineering", salary: 95000, age: 31, skills: ["JS", "Python", "AWS"] },
  { id: 4, name: "Karan", dept: "HR", salary: 48000, age: 26, skills: ["Excel", "Communication"] },
  { id: 5, name: "Meera", dept: "Design", salary: 61000, age: 29, skills: ["Figma", "Illustrator", "CSS"] },
  { id: 6, name: "Dev", dept: "Engineering", salary: 82000, age: 38, skills: ["Java", "AWS", "Docker"] },
];

// // q1 :- Get all employee names as an array 

// let employeeName = employees.map((item)=> item.name)
// console.log(employeeName)

// // Q2 :- filter employee who belong to the "Engineering" department. 

// let deptEngineering = employees.filter(item => item.dept == "Engineering").map((items) => items.name)

// console.log(deptEngineering)

// // Q3 :- Calculate the total salary of all employees 

// let totalSalary = employees.reduce((total , i) => total + i.salary , 0)
// console.log("Total salary :- " ,totalSalary)

// // Q4 :- find the employee with highest salary

// let highestSalary = employees.reduce((highest , i) => {
//     if(highest.salary < i.salary){
//         highest = i
//     }
//     return highest
// }, )

// console.log("highest salary" ,highestSalary.name)

// // Q5 :- Sort employee by salary in descending order (do not mutate the original)

// // let descendingOrder = employees.sort((a,b) => b.salary - a.salary)

// // console.log(descendingOrder)

// // Q6 :- Count how many Engineering employee earns more than 70000 

// let earns = employees.reduce((item , i) => {
//     if(i.salary > 70000){
//         item++
//     }
//     return item
// }, 0)
// console.log(earns)

// Q7 :- Get a list of unique departments 

// let department = employees.reduce((item ,i) => {
    
//     if(!item.includes(i.dept)){
//         item.push(i.dept)
//     }

//     return item
// },[])
// console.log(department)


// // Q8 :- find the average salary 

let result = employees.reduce((acc, i) => {

    acc[i.dept] = acc[i.dept] || { total: 0, count: 0 }

    acc[i.dept].total += i.salary
    acc[i.dept].count += 1

    acc[i.dept].avg = acc[i.dept].total / acc[i.dept].count

    return acc

}, {})

console.log(result)

// // Q9 :- Get employees who know "CSS" as a skill.

// let css = employees.reduce((item,i)=> {
//     if(i.skills.includes("CSS")){
//         item.push(i.name)
//     }
//     return item
// },[])

// console.log(css)


// Q10 :- Add a seniorityLevel property to each employee: "Senior" if age >= 30, else "Junior"

// let seniorityLevel = employees.reduce((item ,i) => {
//     if(i.age >= 30){
//         i.seniority = "Senior"
        
//     }
//     else{
        
//         i.seniority ="Junior"
        
//     }
//     item.push(i)
//     return item 
// },[])

// console.log(seniorityLevel)
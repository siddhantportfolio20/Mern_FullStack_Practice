// Task 
// const btn = document.querySelector(".btn")
// const div = document.querySelector("div")
// const close = document.querySelector(".close")

// btn.addEventListener("click",()=>{
//     div.style.display = "block"
// })

// close.addEventListener("click",()=>{
//     div.style.display = "none"
// })

// const radioBtns = document.querySelector("input[name='gender']")

// const submit = document.querySelector(".submit")


// submit.addEventListener("click",(e)=>{
//     e.preventDefault()
//     // // checkBox
//     let checkedElement =[]
//     const checkBtns = document.querySelectorAll('input[name="hobby"]')
//     console.log(checkBtns);
//     checkBtns.forEach(element => {
//         if(element.checked){
//             checkedElement.push(element.value)
//         }
//     });
//     console.log(checkedElement);

//     // radio check
//     const selectedRadioBtn = document.querySelector("input[name='gender']:checked")
//     console.log(selectedRadioBtn.value);


//     // Select option
//     const select = document.getElementById("players")
//     console.log(select.options);
//     let selectedValues = Array.from(select.options)
//     .filter(item => item.selected)
//     .map(item => item.value)
//     console.log(selectedValues);
// })

// Email errors onblur and obfocus

// const input = document.getElementById("input")
// const errors = document.getElementById("error")

// input.onblur = () => {
//     if(!input.value.includes("@"))error.innerHTML = "Please enter valid email"
// }
// input.onfocus = () =>{
//     error.innerHTML=""
// }

// change (blur)
// const input = document.getElementById("input")
// input.addEventListener('change',()=>{
//     console.log("hello");
// })
// const h3 = document.querySelector("h3")
// input.addEventListener("input",(e)=>{
//     console.log(e.target.value);
//     h3.textContent = e.target.value
// })

//-------------------- Important MockQuestion ----------------------



let submit = document.querySelector("button")
let form = document.querySelector("form")
let arr = []
submit.addEventListener("click",(e)=>{
    let name1 = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.querySelector("input[name='gender']")
    let skills = document.querySelectorAll(".skill")
    const course = document.querySelector("#course")
    e.preventDefault()
    let student = {}
    student.name = name1.value
    student.age = age.value
    student.gender = gender.value
    const allSkill = []
    skills.forEach(item =>{
        if(item.checked){
            allSkill.push(item.value)
        }
    })
    student.skills = allSkill    
    student.course = course.value

    arr.push(student)
    console.log(arr);
    form.reset()
    
})
import isAdult from "./displayUi.js"; 

const name1 = document.querySelector("#name")
const age = document.querySelector("#age")
const ul = document.getElementById("display")
const submit = document.getElementById("submit")

let user = []
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj ={
        name: name1.value
        ,age: age.value
    }
    let flag = isAdult(obj.age)
    if(flag) return 
    user.push(obj)
    ul.innerHtml = ""
    users.map((item)=>{
        let li = document.createElement("li")
        li.textContent = item.name
        ul.appendChild(li)
    })      
})
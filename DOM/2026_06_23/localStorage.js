// // Local Storage
// // 1) its a browser storage given to a website that allows persistant key value pairs with no expiration time 
// // 2) data survives when browser restarts and is accessible accross all 
// // 3) tabs/windows of the same origin 


// // chrome , firefoxm ,edge -> 10mb
// // safari -> 5mb
// // How to check the storage in local Storage
// if(navigator.storage && navigator.storage.estimate){
//     navigator.storage.estimate().then((est) => {
//         console.log(`Used: ${est.usage} of ${est.quota} bytes`);
//     })
// }

// // storing value in local storage
// localStorage.setItem("name","Siddhant")


// // fetching the value in local storeage
// let value = localStorage.getItem("name")
// console.log(value);


// // works same as objects overrides if same key 
// localStorage.setItem("name2","sourish")
// localStorage.setItem("name2","Harsh")

// let value2 = localStorage.getItem("name2")
// console.log(value2);


// //reset values in localStorage
// localStorage.setItem("name2","")

// //removing specific key
// localStorage.removeItem("name2")

// //clearing all the data 
// // localStorage.clear()



// localStorage.setItem("number",JSON.stringify(5))
// localStorage.setItem("array",JSON.stringify([1,2,3,4,5]))
// localStorage.setItem("object",JSON.stringify({name:"siddhant"}))


// // the below script Dom will only run when the document has been loaded
// document.addEventListener("DOMContentLoaded",()=>{
    
//     console.log(JSON.parse(localStorage.getItem("number")));
//     console.log(JSON.parse(localStorage.getItem("array")));
//     console.log(JSON.parse(localStorage.getItem("object")));
    
// // })
// let h1 = document.querySelector("h1")

// let increase = document.querySelector(".increase")
// let decrease = document.querySelector(".decrease")
// let counter = 0
// console.log(counter);
// let div = document.querySelector("div")
// let p = document.createElement("p")
// p.textContent = counter
// div.appendChild(p)
// h1.textContent = counter
// increase.addEventListener('click',()=>{
//     counter++
//     p.textContent = counter
//     h1.textContent = counter
//     localStorage.setItem("count",JSON.stringify(counter))
// })

// decrease.addEventListener('click',()=>{
//     counter--
//     p.textContent = counter
//     h1.textContent = counter
//     localStorage.setItem("count",JSON.stringify(counter))

// })
//     let value = JSON.parse(localStorage.getItem("count"))
//     console.log(value);
//     p.textContent = value

//     console.log(counter);


// // ---------------------- Session Storage ------------------------
// // persists : until tab/window is closed 
// // scope : single tab
// // storage limit : 5 - 10 mb
// // use case : temporary session data

// //Note: both local and session storage can survive a reload

// // sessionStorage.setItem("name","Siddhant")


// // ------------------------- task ------------------------------

let name1 = document.querySelector("input[name='name']")
let age = document.querySelector("input[name = 'age']")
let description = document.querySelector("input[name = 'description']")
let gender = document.querySelectorAll("input[name = gender]")
const h1 = document.querySelector("h1")
console.log(name1);
name1.addEventListener('input',(e)=>{
    h1.textContent = e.target.value
    localStorage.setItem("name",JSON.stringify(e.target.value))   
})

let nameValue = localStorage.getItem("name")
console.log(nameValue);
name1.value = nameValue
h1.textContent = nameValue


age.addEventListener('input',(e)=>{
    localStorage.setItem("age",JSON.stringify(e.target.value))
})
let ageName = JSON.parse(localStorage.getItem("age"))
console.log(ageName);
age.value = ageName

description.addEventListener('input',()=>{
    localStorage.setItem("description",JSON.stringify(description.value))
})
let getDescription = JSON.parse(localStorage.getItem("description"))
description.value = getDescription

console.log(description);

gender.addEventListener("input",()=>{
    console.log(gender.value);
    if(gender.value == "male"){
        localStorage.setItem("radio",JSON.stringify(gender.value))
    }else if(gender.value == "female"){
        localStorage.setItem("radio",JSON.stringify(gender.value))
    }
})
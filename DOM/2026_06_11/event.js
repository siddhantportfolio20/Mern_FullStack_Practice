// type of events 
// click 
// hover 
// mouseover / mouseout -> cursor enter or leaves an element eg:- hover
// mousedown / mouseup -> mouse button is pressed and released clicked and not clicked 
// keyup / keydown -> keyboard key is pressed and released 
// submit -> kind of submit button  when users submits forms 
// focus -> when user focuses on an elements 

// let btn = document.querySelector(".click-btn")
// let btn3 = document.querySelectorAll(".click-btn")[1]
// btn.addEventListener("click",click)// this is the right way we should only pass the function reference 

// btn.addEventListener("click",click())// here the function is called before the click is registered 

// function click(){
//     alert("Hii Neymar")
// }



// btn.addEventListener("click",()=>{
//     alert("Hello world from callback function ")
// })

// event object
// Defination :- An event object is an object automatically created by JavaScript whenever an event happens 
// (like a click, key press, mouse movement, form submission, etc.).

// btn.addEventListener("click",(e)=>{
//     alert(`${e} clicked`)
// })

// ------------- Task -------------------
// if you click on btn 1 it should show the alert "btn 1 clicked"
// if you click on btn 2 it should show the alert "btn 2 clicked"

// btn.addEventListener("click",btn1)

// function btn1(){
//     alert("btn 1 clicked")
// }
// btn3.addEventListener("click",btn2)
// function btn2(){
//     alert("btn 2 clicked")
// }

// making multiple button dynamic 
// let btn = document.querySelectorAll(".click-btn").forEach(item => item.addEventListener("mouseover",(e)=>{
//     let btnName = e.target.textContent
//     alert(`${btnName} is clicked`)
// }))



//------------- Note :- We can attack multiple function or events to addEventListener 

// remove Event listener

// let remove = document.querySelector(".click-btn")

// remove.addEventListener("click", btnClicked)

// function btnClicked(){
//     console.log("btn btnClicked");
// }
// remove.removeEventListener("click",btnClicked)



// ----------------------------  Event Bublling (false) --------------------------------------
// Defination ;- Event Bubbling is the process where an event starts from the element that 
// was clicked (or triggered) and then moves upward through its parent elements.



let form = document.querySelector('form')
let div = document.querySelector("div")
let p = document.querySelector('p')


// // function eventBubbling(){
// form.addEventListener("click",()=> alert("form is clicked"))
// div.addEventListener("click",()=> alert("div is clicked"))
// p.addEventListener("click",()=> alert("p is clicked"))
// // }

// ------------------------ Event Capturing (true) ---------------------------------------------
// Event Capturing is the process in which an event starts from the document (or parent elements) 
// and moves downward toward the element that triggered the event.


// form.addEventListener("click",()=> alert("form is clicked"),true)
// div.addEventListener("click",()=> alert("div is clicked"),true)
// p.addEventListener("click",()=> alert("p is clicked"))


// --------------------- Stop propagation
// for stoping both event capturing and event bubbling

// function eventBubbling(){
//     form.addEventListener("click",(e)=>{
//         e.stopPropagation()
//         alert("You are in Form")
//     })
//     div.addEventListener("click",(e)=>{
//         e.stopPropagation()
//         alert("You are in div")
//     })
//     p.addEventListener("click",(e)=>{
//         e.stopPropagation()
//         alert("You are in p")
//     })
        

// }

// eventBubbling()



// ----------------------- Task -------------------------
// when I click on add new item a new li element should be added in the list for example 

let ul = document.querySelector("ul")
let button = document.querySelector("button")
let count = 0

button.addEventListener("click",()=>{
    count++
    let li = document.createElement("li")
    li.textContent = `New item ${count}`
    ul.append(li)
    
})




// ------------------------- Event Delegation ---------------------

ul.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("done")
    }
})
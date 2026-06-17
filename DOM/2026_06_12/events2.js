// let btn = document.querySelector("#btn")
// btn.addEventListener("click",(e)=>{
//     if(e.altKey && e.shiftKey){
//         console.log("hello World");
//     }
// })


// let box =document.querySelector(".box")

// let man = "mouseout"

// box.addEventListener(man,()=>{
//     console.log("Man is leaving the house");
// })

// box.addEventListener("mouseover",()=>{
//     console.log("Man is entering the house");
// })


//----------- Dark and Light theme ----------------

let btn = document.querySelector("button")
let body = document.querySelector("body")
btn.addEventListener("click",()=>{

        if(btn.textContent == "Light"){

            btn.classList.toggle("Dark")
            btn.textContent ="Dark"
            body.style.background ="black"
        }else{
            btn.textContent ="Light"
            btn.classList.toggle("Light")
            body.style.background = "white"
        }


})
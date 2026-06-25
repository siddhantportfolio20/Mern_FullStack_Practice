// SetTimeout

// syntax :- setTimeout(Callback,time)

// console.log("start");// 1 execution 
// console.log(1);// 2 execution 
// setTimeout(()=>{
//     console.log("Heavy Operation");
// },1000)// 4 execution 

// console.log("end");// 3 exectuion 

// sync operations -> line by line execution of the code ie. blocks the next line until it finishes 
// Async operations -> runs in the background ie. its non-blocking in nature 
// Note : in Async operatins the output will always come after the other code 


// two type of using function inside settiemout if the function is outside

// function greet(name){
//     console.log(`hello ${name}`);
// }
// setTimeout(greet,2000)
// break
// setTimeout(()=>greet("siddhant"),2000)



// console.log("start");
// setTimeout(()=>{
//     console.log("time 1");
// },2000)
// setTimeout(()=>{
//     console.log("time 2");
// }, 100)
// setTimeout(()=>{
//     console.log("time 3 ");
// })
// console.log("end");

// // Output:- 
// // start
// // end
// // time 3 
// // time 2
// // time 1


// console.log("start");
// setTimeout(()=>{
//     console.log("time 1");
// },2000)
// setTimeout(()=>{
//     console.log("time 2");
// }, 2000)
// setTimeout(()=>{
//     console.log("time 3 ");
// },0)
// setTimeout(()=>{
//     console.log("time 4 ");
// },0)
// console.log("end");

// //Output:- 
// // start
// // end
// // time 3 
// // time 4 
// // time 1
// // time 2


// // setTimeout 
// let timerId = setTimeout(()=>{
//     console.log("hello");
// },1000)
// console.log(timerId);
// clearTimeout(timerId)

// setInterval(()=>{
//     console.log("hello");
// },1000)

// let counter = 0
// let timeInterval = setInterval(()=>{
//     counter++
//     console.log(counter);
//     if(counter == 5){
//         clearInterval(timeInterval)
//     }
// },1000)


// function updateClock(){
//     const now = new Date()
//     document.getElementById("clock").innerHTML= now.toLocaleTimeString()
// }
// let intervaId = setInterval(updateClock,1000)
// // setTimeout(()=>{
// //     clearInterval(intervaId)
// //     console.log("clock is stoped");
// //     document.getElementById("clock").textContent = "Game Over"
// // },10000)

let startbtn = document.querySelector("#startBtn")

let stopbtn = document.querySelector("#stopBtn")
let h1 = document.querySelector("#timer")
let counter = 0
h1.textContent = counter
let h1Stop=null;
startbtn.addEventListener("click",()=>{
    if(h1Stop == null){
        h1Stop = setInterval(()=>{
            counter++

            h1.textContent = counter
        },1000)
    }
})
stopbtn.addEventListener("click",()=>{
    clearInterval(h1Stop)
    h1Stop = null
})

let toggle = document.getElementById("toggle")

let toggleContainer = document.querySelector(".toggle-container")
console.log(toggleContainer);
toggle.addEventListener('click',()=>{
    toggleContainer.classList.toggle("d-none")
    clearInterval(h1Stop)
    h1Stop = null
})
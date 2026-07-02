// function a(){
//     console.log("b");
//     b()
//     console.log("1");
// }

// function b(){
//     console.log("b");
//     c()
//     console.log("2");
// }
// function c(){
//     console.log("b");

// }
// output :- a b c 2 1

// // --------------------- Event loops ---------------
// // checks if the call Stack is empty or not and then executes setTimeout
// // Task Queue
// // Microtask Queue
// // call Stack 

// console.log(1);
// setTimeout(function a(){
//     console.log("a");
// },1000)
// setTimeout(function b(){
//     console.log("b");
// },1000)
// setTimeout(function c(){
//     console.log("c");
// },1000)

// console.log(2);


// console.log(1);
// setTimeout(()=>{
//     console.log("a");
// })
// Promise.resolve().then(function b(){
//     console.log("b");
// })
// Promise.resolve().then(function c(){
//     console.log("2");
//     setTimeout(function d(){
//         console.log("d");
//     })
// })

// console.log(3);

// // output :- 1 3 b 2 a d


console.log(1);
Promise.resolve().then(function a(){
    console.log(2);
    setTimeout(function b(){
        console.log(3);
    })
})
setTimeout(()=>{
    console.log(4);
    Promise.resolve().then(function d(){
        console.log(5);
    })
})
console.log(6);



// ------------------- Theory --------------------------
// 1. JS runs strictly on a single thread (i.e perform 1 task at a time) but it is able to perform 
// async operations because of the runtime environement (browser or Node.js is multi threaded)
// Js does not handle time consuming tasks like network requests, timers , filesystem etc on its own thread,
// it delegates these tasks to hosting environment , which handles them in background

// 2. CallStack -> this tracks what func is currently executing . It handles sync code on the single main thread,
// following Lifo (last in first out ) structure

// 3. Web API's / Node.js API's -> these are background environment provided by the browse or Node.js they run seperate native threads 
// to handle tasks like fetch(), setTimeout()etc once the background API is completed its task it moves the attached callback functon 
// to its respective queue 

// 4. Task queue -> handles large peices of work eg setTimeout, setInterval , UI rendering events etc
// 5. Micro task queue -> handles smaller and urgent tasks that need to run immediately eg Promises 
// Micro task queue has more preference than Macro Task queue ->callbacks inside marco tasks  will wait 
// untill everything inside micro task queue has completed its execution 

// 6. EventLoop -> carries out the whole above process by checking continously if the call stack is empty or not 



// Starvation -> in the below code setTimeout will be inside that marcro task queue waiting / starving 
// for micro queue  to be empty but it wont in the below example as again keeps getting added 
// inside microtask queue 

// console.log(1);
// function again(){
//     Promise.resolve().then(again)
// }
// again()

// setTimeout(()=>{
//     console.log("timer");
// })

// console.log(2);
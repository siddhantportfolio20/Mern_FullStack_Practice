// Promise.all([
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(1)
//         },3000)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(2)
//         },2000)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     }),
// ]).then((item)=>console.log(item))// [ 1, 2, 3 ]

// Promise.all takes an array of promises as arg and returnns a new promise 
// the new promis resolve when alll the listed promises are resolved and the
// array of their results become its result

// Promise.all either gives me the results of all the fulfilled promises in an array 
// or the first rejected promises 


// "https://api.github.com/users/iliakan"

// multiple fetch requests 

// async function testing() {
//     try{
//         let res = await Promise.all([
//            fetch("https://api.github.com/users/iliakan"),
//             fetch("https://api.github.com/users/remy"),
//             fetch("https://api.github.com/users/jeresig")
//         ])
//         res.map(async (item)=>{
//             let data = await item.json();
//             console.log(data);
//         })
//     }catch(err){
//         console.log(err);
//     }

// }
// testing()

// async function testing() {
//     try{
//         let res = await Promise.all([
//            fetch("https://api.github.com/users/iliakan"),
//             fetch("https://api.github.com/users/remy"),
//             fetch("https://api.github.com/users/jeresig")
//         ])
//         const dataarray = await Promise.all(res.map(item=>item.json()))
//         console.log(dataarray);
//         // res.map(async (item)=>{
//         //     let data = await item.json();
//         //     console.log(data);
//         // })
//     }catch(err){
//         console.log(err);
//     }

// }
// testing()



// ------------ Promis.allSettled -------------------


// Promise.allSettled([
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             reject(1)
//         },3000)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(2)
//         },2000)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     }),
// ]).then((item)=>console.log(item))
// Output
// [
//   { status: 'rejected', reason: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'fulfilled', value: 3 }
// ]

// Promise.allSettled just waits for all promises to settle 
// regardless of its result 

// ------------------- Promise.race --------------

// Promise.race([
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             reject(1)
//         },3000)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(2)
//         },200)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     }),
// ]).then((item)=>console.log(item))// 2

// Promise.race gives me the first promise that settles 
// (i.e it does not care if the promise fullfilled or rejected)


// ------------------- Promise.any --------------

// Promise.any([
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             reject(1)
//         },3000)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(2)
//         },200)
//     }),
//     new Promise((res,reject)=>{
//         setTimeout(()=>{
//             res(3)
//         },1000)
//     }),
// ]).then((item)=>console.log(item))// 2

// Promise.any gives me the result of 
// 1st promise that resolves or fullfils


// Task

// Promise.race([
//     new Promise((res,reject)=>{
//         res(fetch("https://jsonplaceholder.typicode.com/posts"))    
        
            
//     }),
//     new Promise((res,reject)=>{
//         res(fetch("https://jsonplaceholder.typicode.com/comments"))
//     }),
//     new Promise((res,reject)=>{
//         res(fetch("https://jsonplaceholder.typicode.com/users"))
//     }),
// ]).then((item)=>console.log(item))


// Task:- Show user names

// const Api_Url = "https://jsonplaceholder.typicode.com/users"

// async function render(value,Api){
//     const res = await fetch(`${Api}?name_like=${value}`)

//     const data = await res.json()

//     data.map(item => console.log(item.name))
// }

// const input = document.getElementById("searchInput")
// input.addEventListener("input",(e)=>{
//     render(e.target.value,Api_Url)

// })

// Async Await


// function getCheese(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             const cheese = "cheese "

//             resolve(cheese)
//         },2000)
//     })
// }
// function makeDough(cheese){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             const dough = cheese +" dough"

//             resolve(dough)
//         },2000)
//     })

// }
// function getPizza(dough){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             const pizza = dough + " pizza"
  
//             resolve(pizza)
//         },2000)
//     })
// }

// // getCheese().then((cheese)=>{
// //     console.log("here is your cheese: ",cheese);
// //     return makeDough(cheese)
// // }).then((dough)=>{
// //     console.log("here is your dough: ",dough);
// //     return getPizza(dough)
// // }).then((pizza)=>{
// //     console.log("here is your pizza: ",pizza);
    
// // }).catch((err)=>{
// //     console.log("Something went wrong pizza is not ready");
// // }).finally(()=>{
// //     console.log("Pizza is ready");
// // })


// async function func() {
//     try{

//         const res1 = await getCheese();
//         console.log("here is your cheese: ",res1);
//         const res2 = await makeDough(res1);
//         console.log("here is your dough: ",res2);
//         const res3 = await getPizza(res2);
//         console.log("here is your Pizza: ",res3);
//     }
//     catch(error){
//         console.log("error: ",error);
//     }finally{
//         console.log("Promises is Executed");
//     }
// }
// func()


// the word async before a function means: a function always returns a promise.
// await workss only inside async function 
// await makes JS wait until the promise settles and returns its result 
// i.e it suspends the function execution until the promise settles and resumes it with the result 


// function fetchData(){
//     let flag = true
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//             if(flag){
//                 resolve({message: "data fetched successfully", data:[1,2,3,4]})
//             }
//             else{
//                 reject({message: "error in fetching data"})
//             }

//         },1000)
//     })
// }

// // fetchData().then(data=>{
// //     console.log(data);
// // })

// async function fetchs() {
//     try{
//         const message = await fetchData()
//         console.log("here is your data", message.data , " ", message.message);
        
//     }catch(err){
//         console.log(err.message);
//     }
        
// }

// fetchs()


// // ----------------------- Data fetching --------------
// let h1 = document.querySelector("h1")
// async function fetchingData() {
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         // console.log(res);
//         const data = await res.json()
        
//         console.log(data);
//     }catch(err){
//         console.log("error message: ",err);
//     }
// }
// fetchingData()

// fetch is browser API to send HTTP requests and read responses 
// it returns a promise that is usually chained with json() to parse JSON data


// ---------------- Data Fecting and display task --------------------------

const title = document.querySelector("title")
const posts = document.getElementById("posts")
function render(data){
    posts.innerHTML = ""
    data.map(item=>{
        const div = document.createElement("div")
        div.innerHTML = `<strong>${item.title}</strong> <p>${item.body}</p>`
        posts.appendChild(div)
    })
}


const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5"
async function fetchData(API) {
    try{
        let res1 = await fetch(API)
        let data = await res1.json()
        render(data)
    }catch(err){
        posts.innerHTML = "<h2>failed to load the data</h2>"
    }
}
fetchData(API_URL)
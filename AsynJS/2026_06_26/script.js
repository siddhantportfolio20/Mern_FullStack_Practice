// Promises  & CallBack




// ----------------- CallBack ------------------------


// function a(callback){
//   setTimeout(()=>{
//         console.log(1);
//         if(callback)callback()
//     },2000)
// }
// function b(callback){
//     setTimeout(()=>{
//         console.log(2);
//         if(callback)callback()
//     },2000)
// }
// function c(callback){
//     setTimeout(()=>{
//         console.log(3);
//         if(callback)callback()
//     },2000)
// }

// a(()=>{
//     b(()=>{
//         c()
//     })
// })
// // Async operations are getting executed in a particular order 
// // the next async operation is depened on the execution of the 
// // 1st async operation 

// function getCheese(callback){
//     setTimeout(()=>{
//         const cheese = "cheese "
//         console.log("here is the: ",cheese);
//         callback(cheese)
//     },2000)
// }
// function makeDough(cheese,callback){
//     setTimeout(()=>{
//         const dough = cheese +" dough"
//         console.log("here is the: ",dough);
//         callback(dough)
//     },2000)

// }
// function getPizza(dough,callback){
//     setTimeout(()=>{
//         const pizza = dough + " pizza"
//         console.log("here is the: ",pizza);
//         callback(dough)
//     },2000)
// }

// getCheese((cheese)=>{
//     makeDough(cheese,(dough)=>{
//         getPizza(dough,(pizza)=>{
//             console.log("your pizza is ready: ", pizza );
//         })
//     })
// })


// // Above is callback hell 


// //-------------------------------- Promises ---------------------------------
// // its a special object that represents the eventual completion or failure of an async
// // operation and resulting value


// const promise1 = new Promise(function(resolve,reject){
//     // do async tasks 
//     // DB calls , cryptography etc
//     setTimeout(()=>{

//         console.log("Async task is completed");
//         // you have to call resolve here to connect with .then
//         resolve()
//     },2000)
// })
// // consuming a promise
// promise1.then(function(){
//     // this will only br printed after the promise is done executing
//     console.log("Promise is resolved ");
// })

// // promise  chaining

// const promise1 = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         console.log("Async task is completed");

//         resolve()
//     },2000)
// }).then(function(){

//     console.log("Promise is resolved ");
// })


// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Fetching Data");
//         data = {name:"Siddhant",age:20}
//         resolve(data)
//     }) 
// }).then(function(user){
//     console.log("Promises is resolved ",user.name);
// })


// // Reject()


// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Fetching Data");
//         let error = false
//         if(!error){
//             data = {name:"Siddhant",age:20}
//             resolve(data)
//         }else{
//             reject("Something Went wrong")
//         }
//     }) 
// }).then(function(user){
//     console.log("Promises is resolved ",user.name);
// }).catch((err)=>{
//     console.log(err,"don't worry trying to resolve the error");
// }).finally(()=>{
//     console.log("Promises has executed");
// })


// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Fetching Data");
        
//             data = {name:"Siddhant",age:20}
//             resolve(data)

//     }) 
// }).then(function(user){
//     console.log("Promises is resolved ",user.name);
//     return user
// }).then(function(user){
//     console.log("User Name: ", user.name);
//     return user
// }).then(function(user){
//     console.log("User Age: ", user.age);
// })




function getCheese(callback){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const cheese = "cheese "

            resolve(cheese)
        },2000)
    })
}
function makeDough(cheese,callback){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const dough = cheese +" dough"

            resolve(dough)
        },2000)
    })

}
function getPizza(dough,callback){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const pizza = dough + " pizza"
  
            resolve(pizza)
        },2000)
    })
}

getCheese().then((cheese)=>{
    console.log("here is your cheese: ",cheese);
    return makeDough(cheese)
}).then((dough)=>{
    console.log("here is your dough: ",dough);
    return getPizza(dough)
}).then((pizza)=>{
    console.log("here is your pizza: ",pizza);
    
}).catch((err)=>{
    console.log("Something went wrong pizza is not ready");
}).finally(()=>{
    console.log("Pizza is ready");
})
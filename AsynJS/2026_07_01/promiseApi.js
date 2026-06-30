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

// Promise either gives me the results of all the fulfilled promises in an array 
// or the first rejected promises 


// "https://api.github.com/users/iliakan"

// multiple fetch requests 

async function testing() {
    try{
        let res = await Promise.all([
           fetch("https://api.github.com/users/iliakan"),
            fetch("https://api.github.com/users/remy"),
            fetch("https://api.github.com/users/jeresig")
        ])
        res.map(async (item)=>{
            let data = await item.json();
            console.log(data);
        })
    }catch(err){
        console.log(err);
    }

}
testing()
// // Controling the action of users 
// ------------------- Debounce -------------------
// const dbounce = (fn , delay)=>{
//     let timerId
//     return function(...args){
//         clearTimeout(timerId)
//         timerId = setTimeout(()=>{
//             fn(...args)
//         },delay)
//     }
// }

// const search = (query)=>{
//     document.getElementById("result").textContent = "Search for:- " + query
    
// }
// const searchWithDebounce = dbounce(search,500)
// const input = document.getElementById("searchInput")
// input.addEventListener("input",(e)=>{
//     searchWithDebounce(e.target.value)
    
// })

// --------------------- Throttling ---------------------

// const throttle = (fn,delay) =>{
//     let lastCall = 0
//     return function(...args){
//         const now = Date.now()
//         if(now -lastCall < delay){
//             return 
//         }
//         lastCall = now 
//         return fn(...args)
//     }
// }
// const burstShoot = () =>{
//     console.log("shoot");
// }

// const shoothWithThrottle = throttle(burstShoot,1000)
// const shoot = document.getElementById("shoot")
// shoot.addEventListener("click",()=>{
//     shoothWithThrottle()
// })




console.log("Time Complexity")


let n = 5 
function sum(n){
    let sum =0 // this will execute 1 time 

    // this will execute n number of time
    for(let i = 0;i<=n;i++){
        sum+=1
    }
    console.log(sum) // this will execute 1 time 
}
sum(n)

// O(n)// linear TC
// here we can ignore the single line operations 
// eg ;- 2+n can also be = n because 2 will not affect the memory more 


function optimizedSum(n){
    console.log((n*(n+1))/2)
}
optimizedSum(n)

// O(1) constant TC


// O(n^2)
let count=0
function testAlgo(){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            count++
        }
    }return count
}

console.log(testAlgo(n))


// if the input size reduces as the number of operations increase we can say that 
// the algorithm has the TC of O(logn)


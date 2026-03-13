//Q1 count of digits
//let n = 572
/*let count=0
while(n>0){

    n/=10
    count++
}
console.log(count)

// given a number n find sum of its digits 
let sum=0;
let rem;
while(n>0){
    rem=n%10
    sum = sum+rem
    n=Math.floor(n/10)
    
}
console.log(sum)

//given a number n prints its table till 10
let n = 42
let mul = 1
for(let i = 1;i<=10;i++){
    mul=n*i
    
    console.log(n," x ",i," = ",mul)
    mul++
}
*/
let  a=0;
for(let i=1; i<=500;i++){
    if(i%7==0 && i%5==0){
        a=i
    }

}
console.log(a)
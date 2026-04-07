// let count = 0
// for(let i = 0; i<2;i++){
//     for(let j=0;j<2;j++){
//         count++
//     }
// }console.log(count)

// // if outer loop is running n number of times and inner loops is 
// // running m number of times then the whole nested loop runs n*m number of times 

// // task1:- 
// // print tables from 1 to 5 

// for(let i = 1; i<6;i++){
//     for(let j=1;j<11;j++){
//         let res = i*j
//         console.log(`${i} x ${j} = ${res}`)
//     }
// }

// print the below pattern 
// // 4x4
// for(let i=1;i<5;i++){
//     let row =""
//     for(let j=0 ; j<4;j++){
//         row += "# "     
//     }console.log(row)
// }

// *
// **
// ***
// // ****
// let row = ""
// for(let i = 4 ; i > 0 ;i--){
    
//     for(let j =i;j>0;j--){
        
//             row+="# "
            
        
//     }console.log(row)
// }

// for(let i=0;i<5;i++){
//     let row =""
//     for(let j=0 ; j<4;j++){
//         row += `${i}${j} `     
//     }console.log(row)
// }

// print pattern using nested while loop 
// let i = 0
// while (i< 4){
//     let row = ""
//     let j=0
//     while(j<4){
//         row+="# "
//         j++
//     }i++
//     console.log(row)
// // }
// let row =''
// for (let i = 0;i<4;i++){
//     for(let j=0;j<2;j++){
//         if(i%j==0){
//             row+="# "
//             console.log(row)    
//         }
//     }
// }

// for(let i = 0 ; i<1;i++){
//     let row = ""
//     for(let j =0 ; j<4;j++){
//         row+="# "
//         console.log(row)
//     }
// }

// // one more method :- 

// for(let i = 0;i<4;i++){
//     let row = ""
//     for(let j =0 ; j<=i;j++){
//         row+="# "
//     }console.log(row)
// }

// for(let i=0;i<4;i++){
//     let row =""
//     for(let j=i;j<4;j++){
//         row+="# "
//     }console.log(row)
// }

for(let i=0;i<5;i++){
    let row =""
    let char = 65
    for(let j=0;j<=i;j++){
        row +=String.fromCharCode(char+j)
    }console.log(row)
}

// let char = "ABC"
//  console.log(char.charCodeAt(1))


// let aschiCode = 66
// console.log(String.fromCharCode(aschiCode))
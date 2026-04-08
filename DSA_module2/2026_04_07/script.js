// for(let i = 0 ; i < 4;i++){
//     let row = ""
//     for (let j = 0;j<4 ; j++){
//         row+="* "
//     }console.log(row)
// }

// for(let i = 0 ; i <4 ; i++){
//     let row =""
//     for(let j =0; j<=i;j++){
//         row+="* "
//     }console.log(row)
// }

// for(let i = 0 ; i < 4 ; i++){
//     let row =""
//     for(let j=i ; j< 4;j++){
//         row+= "* "
//     }console.log(row)
// }

// for(let i=0;i<4;i++){
//     let row = ""
//     for(let s = 0 ; s < 4-i;s++){
//         row+=" "

//     }
//     for(let j=1 ; j <= i;j++){
//         row+= "*"
        
//     }console.log(row)

// }

// for(let i=0;i<4;i++){
//     let row = ""
//     for(let s = 0 ; s < i;s++){
//         row+=" "

//     }
//     for(let j=i ; j <= 4;j++){
//         row+= "*"
        
//     }console.log(row)

// }

// method 1 :-
//    * 
//   * * 
//  * * *
// * * * *

// for (let i = 0 ;i<4 ; i++){
//     let row =""
//     for(let s =0 ; s< 4-i;s++){
//         row+=" "
//     }
//     for(let j = 0 ; j<=i ;j++){
//         row+="* "
//     }console.log(row)
// }



// method 2 :-
// let n = 4
// for (let i = 1;i<=n ; i++){
//     let row =""
//     for(let s =1 ; s<= n-i;s++){
//         row+=" "
//     }
//     for(let j = 1 ; j<=2*i-1 ;j++){
//         row+="*"
//     }console.log(row)
// }

// task 6 :- hallow pyramid 
let n = 5
for (let i = 1 ; i< n ;i++){
    let row =""
    for(let s=1;s < n-i;s++){
        row+=" "
    }
    for(let j=1;j<= 2*i-j;j++){
        if(j==1 || j == 2*i-1){
            row+= "*"
        }else{
            row+=" "
        }

    }console.log(row)
}


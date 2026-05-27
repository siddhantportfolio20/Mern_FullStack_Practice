let n =5

// ===================== Question 1 =====================

// Solid Right Triangle
// * 
// ** 
// *** 
// **** 

// ======== Solution ===================

// for (let i = 0; i<n;i++){
//     let row = ""
//     for(let j = 0;j <= i;j++){
//         row+="*"
//     }
//     console.log(row)
// }


// ====================== Quesiton 2 ======================

// Q2. Inverted Right Triangle 
// Print an inverted right triangle of * with n rows. 
// Input 
// • n = 5 
// Output 
// ***** 
// **** 
// *** 
// ** 
// *


// ================ Solution ==============

// for(let i = 0 ; i <= n ; i++){
//     let row = ""
//     for(let j = 0 ; j <= n-i ;j++){
//         row+="*"
//     }
//     console.log(row)
// }


// ============== Question 3 =============
// Q3. Centered Pyramid (1, 3, 5, 7) 
// Print a centered pyramid of * with n rows. 
// Input 
// • n = 4 
// Output 

//      * 
//     *** 
//    ***** 
//   ******* 


//=================== Solution ==============

// for(let i = 0 ; i < n ; i++){
//     let row = ""
//     for(let s = 0; s < n-i-1 ;s++){
//         row+=" "
//     }
//     for(let j = 0 ; j < 2 * i+ 1;j++){
//         row+="*"
//     }
//     console.log(row)
// }

// ================ Question 5 =====================

// Q5. Row and Column Sums 
// Given a 2D matrix, print sum of each row on one line, then sum of each column on the next line. 
// Input 
// matrix = [ 
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9] 
// ] 
// Output 
// Row sums: 6 15 24 
// Column sums: 12 15 18


// ============= Solution =======================

// let  matrix = [ 
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9] 
// ] 
// for(let i = 0 ; i < matrix.length ; i++){
//     let sum = 0
//     for(let j = 0 ; j < matrix.length; j++){
//         sum += matrix[i][j]
//     }
//     console.log("Row sums:- ", sum)
// }

// for(let i = 0 ; i < matrix.length;i++){
//     let sum = 0
//     for(let j = 0 ; j < matrix.length ; j++){
//         sum += matrix[j][i]
//     }
//     console.log("Column sums:- ", sum)
// }


//Q6. Transpose Matrix 
// Given an m x n matrix, print its transpose n x m. 
// Input 
// matrix = [ 
//   [1, 2, 3], 
//   [4, 5, 6] 
// ] 
 
// Output 
// [ 
//   [1, 4], 
//   [2, 5], 
//   [3, 6] 
// ]




let matrix = [ 
  [1, 2, 3], 
  [4, 5, 6] 
]

let transpose = []

for(let i = 0; i < matrix[0].length; i++) {

    transpose[i] = []

    for(let j = 0; j < matrix.length; j++) {

        transpose[i][j] = matrix[j][i]

    }
}

console.log(transpose)




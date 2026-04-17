// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0][0])//1
// console.log(arr[0][1])//2
// console.log(arr[0][2])//3

// console.log(arr[1][0])//4
// console.log(arr[1][1])//5
// console.log(arr[1][2])//6

// console.log(arr[2][0])//7
// console.log(arr[2][1])//8
// console.log(arr[2][2])//9

// let arr1 = []
// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = 0 ; j< arr[i].length; j++){
        
//     }
// }console.log(arr1)

// let arr = []
// let count = 0
// for(let i = 0 ; i < 3;i++){
//     let innerArr = []
//     for(let j = 0 ; j < 3 ; j++){
//         count++
//         innerArr.push(count)
//     }
//     arr.push(innerArr)
// }console.log(arr)
// console.table(arr)// prints a table

let arr = [[1,2,3],[4,5,6],[7,8,9]]
let outputRows = ""
// task1:- print the elements row wise : 
for (let i= 0 ; i <arr.length ; i++){
    for(let j = 0 ; j<arr[i].length;j++){
        outputRows+= arr[i][j]+" "
    }
}console.log(`Rows :- ${outputRows}`)


let outputColumns = ""
for(let j = 0 ; j < arr[0].length;j++){
    for(let i = 0 ; i < arr.length ;i++){
        outputColumns += arr[i][j] + " "
    }
}console.log(`Columns:- ${outputColumns}`)


let outputDaigonals =""
for (let i= 0 ; i <arr.length ; i++){
    for(let j = 0 ; j<arr[i].length;j++){
        if(i === j || i+j==2){ 
            
            outputDaigonals += arr[i][j]+" "
            
        }
        
    }
}console.log(`Diagonals:- ${outputDaigonals}`)


let outputNonDaigonals =""
for (let i= 0 ; i <arr.length ; i++){
    for(let j = 0 ; j<arr[i].length;j++){
        if(i == j || i+j ==2){ 
            
        }else{
            outputNonDaigonals += arr[i][j]+" "
        }
        
    }
}console.log(`NonDiagonals:- ${outputNonDaigonals}`)


let centerElement = ""



for (let i= 0 ; i <arr.length ; i++){
    for(let j = 0 ; j<arr[i].length;j++){
        if(i == j && i+j ==2){ 
            centerElement += arr[i][j]+ " "   
        }
        
    }
}console.log(`CenterElements:- ${centerElement}`)

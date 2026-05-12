



let arr = [1,223,43,23,42,3,3213,4,53,63,674,78,9]

function BubbleSort(arr){
    let n = arr.length
    for(let i = 0 ; i < n -1 ; i++){
        let swapped = false
        for(let j = 0 ; j < n -i -1 ;j++){
            if (arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if(swapped == false) break
    }
    return arr
}

console.log(BubbleSort(arr))
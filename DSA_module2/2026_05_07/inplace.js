function partition(arr , low , high){
    const pivot = arr[high]

    let i = low -1

    for(let j=low ; j<= high -1;j++){
        if(arr[i] < pivot){
            i++
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
        
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    return i+1
}

function quickSortInplace(arr,low=0,high = arr.length -1){
    
    if(low>= high){
        return
    }
    const pi = partition(arr,low,high)
    
    quickSortInplace(arr,low , pi-1)
    quickSortInplace(arr,pi+1,high)
}

let arr = [8,3,1,7,0,10,2]

quickSortInplace(arr)

console.log(arr)
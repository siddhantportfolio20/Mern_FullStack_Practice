// this function divides the array into smaller pices 
function merSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)

    let leftArr = arr.slice(0,mid)

    let rightArr = arr.slice(mid)

    return merge(merSort(leftArr), merSort(rightArr))
}

// this function is to merge the array
function merge(leftArr,rightArr){
    let result = []
    while(leftArr.length > 0 && rightArr.length > 0){
        if(leftArr[0] < rightArr[0]){
            result.push(leftArr.shift())
        }else{
            result.push(rightArr.shift())
        }
        
    }return [...result,...leftArr,...rightArr]
}
let arr = [8,20,-2,4,-6]
console.log(merSort(arr))
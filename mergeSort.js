//merge sort

const merge = (lt, rt) => {
    let final = []
    while(lt.length > 0 || rt.length > 0){
        if(lt[0] >= rt[0]){
            final.push(rt.shift())
        } 
        else{
            final.push(lt.shift())
        }
    }
    return final.push(lt).push(rt).flat()
}

const mergeSort = (arr) => {
    if (arr.length <= 1){
        return arr
    }
    const mid = Math.floor(arr.length /2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}


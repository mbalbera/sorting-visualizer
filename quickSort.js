//quick sort
export const quick = (arr) => {
    if(arr.length < 2){
        return arr
    }
    const pivot = arr[0]
    const less = []
    const more = []
    arr.forEach(ele => {
        if (ele > pivot){
            more.push(ele)
        }else{
            less.push(ele)
        }
    })
    return quick(left).concat(pivot,quick(right))
}
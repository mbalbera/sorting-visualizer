const randomizer = (num = 10) =>{
    const arr = []
    while (arr.length <= num){
        let num = Math.random()
        arr.push(Math.floor(100 * num))
    }
    return arr
}

//bubble sort
const bubble = (arr) => {
    let swapped = true
    while (swapped) {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr
}

//merge sort

const merge = (lt, rt) => {
    const final = []
    while (lt.length > 0 || rt.length > 0) {
        if (lt[0] >= rt[0]) {
            final.push(rt.shift())
        }
        else {
            final.push(lt.shift())
        }
    }
    final.push(lt)
    final.push(rt)
    return final.flat()
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

//quick sort
export const quick = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const pvt = arr[0]
    const less = []
    const more = []
    arr.forEach(ele => {
        if (ele > pvt) {
            more.push(ele)
        } else {
            less.push(ele)
        }
    })
    return quick(left).concat(pvt, quick(right))
}
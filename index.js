let array = []
let number = 10
const randomizeButton = document.querySelector('#random');
const startButton = document.querySelector('#start');
const mainContainer = document.querySelector('#start');
const actionContainer = document.querySelector('#start');

const randomizer = () =>{    
    while (array.length <= number){
        let num = Math.random()
        array.push(Math.floor(100 * num))
    }
    return array
}

//bubble sort
const bubbleSort = (arr) => {
    let swapped = true
    while (swapped) {
        swapped = false //when no swaps occur swapped is false and the array is sorted
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]; //swaps 2 values in array
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
    if (arr.length <= 1) { //base case
        return arr
    }
    const mid = Math.floor(arr.length / 2) //cuts array in half
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right)) //recursively calls merge to sort the split arrays
}

//quick sort
export const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const pvt = arr[0]
    const less = []
    const more = []
    arr.forEach(ele => {
        if (ele > pvt) { //compare everything to pivot point
            more.push(ele)
        } else {
            less.push(ele)
        }
    })
    return quick(left).concat(pvt, quick(right)) //recursively sort shrunken arrays using same pivot point
}
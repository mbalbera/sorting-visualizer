//This will use the HTML to choose the size of the array sorted and the 
import Bubble from './bubbleSort'
import Merge from './mergeSort'
import Quick from './quickSort'

const randomizer = (num = 10) =>{
    const arr = []
    while (arr.length <= num){
        let num = Math.random()
        arr.push(Math.floor(100 * num))
    }
    return arr
}

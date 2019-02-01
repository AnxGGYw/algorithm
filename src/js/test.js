import { getRandomArray } from '@/js/util'
import SelectionSort from '@/js/sort/SelectionSort'

let randomArr = getRandomArray(100, 0, 100)
console.log(SelectionSort.sort(randomArr))
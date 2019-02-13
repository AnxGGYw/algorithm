import util from '@/js/util/util'
import SelectionSort from '@/js/sort/SelectionSort'
import InsertionSort from '@/js/sort/InsertionSort'
import SortTestHelper from '@/js/sort/SortTestHelper'
import MergeSort from '@/js/sort/MergeSort'

let randomArr = util.generateRandomArray(10000, 0, 9)
let copyArr = util.copyArray(randomArr)
let copyArr1 = util.copyArray(randomArr)
SortTestHelper.testSort('SelectionSort', SelectionSort, randomArr)
SortTestHelper.testSort('InsertionSort', InsertionSort, copyArr)
SortTestHelper.testSort('MergeSort', MergeSort, copyArr1)
console.log(randomArr)
console.log(copyArr)
console.log(copyArr1)
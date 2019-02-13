import util from '@/js/util/util'
import SelectionSort from '@/js/sort/SelectionSort'
import InsertionSort from '@/js/sort/InsertionSort'
import SortTestHelper from '@/js/sort/SortTestHelper'
import MergeSort from '@/js/sort/MergeSort'

// let randomArr = util.generateRandomArray(50000, 0, 10000)
let randomArr = util.generateNearlyOrderedArray(100, 100)
let copyArr = util.copyArray(randomArr)
let copyArr1 = util.copyArray(randomArr)
SortTestHelper.testSort('SelectionSort', SelectionSort.sort, randomArr)
SortTestHelper.testSort('InsertionSort', InsertionSort.sortNoneSwap, copyArr)
SortTestHelper.testSort('MergeSort', MergeSort.sort, copyArr1)
console.log(copyArr1)
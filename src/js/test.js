import util from '@/js/util/util'
import SelectionSort from '@/js/sort/SelectionSort'
import InsertionSort from '@/js/sort/InsertionSort'
import SortTestHelper from '@/js/sort/SortTestHelper'
import MergeSort from '@/js/sort/MergeSort'
import QuickSort from '@/js/sort/QuickSort'

// let randomArr = util.generateRandomArray(100000, 0, 10)
let randomArr = util.generateNearlyOrderedArray(100, 100)
let copyArr = util.copyArray(randomArr)
let copyArr1 = util.copyArray(randomArr)
let copyArr2 = util.copyArray(randomArr)
SortTestHelper.testSort('SelectionSort', SelectionSort.sort, randomArr)
SortTestHelper.testSort('InsertionSort', InsertionSort.sortNoneSwap, copyArr)
SortTestHelper.testSort('MergeSort', MergeSort.sort, copyArr1)
SortTestHelper.testSort('MergeSort', QuickSort.sort, copyArr2)

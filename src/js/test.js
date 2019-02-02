import util from '@/js/util/util'
import SelectionSort from '@/js/sort/SelectionSort'
import InsertionSort from '@/js/sort/InsertionSort'
import SortTestHelper from '@/js/sort/SortTestHelper'

let randomArr = util.generateRandomArray(100, 0, 100)
let copyArr = util.copyArray(randomArr)
InsertionSort.sort(randomArr)
InsertionSort.sortNoneSwap(copyArr)
SortTestHelper.testSort('SelectionSort', SelectionSort, randomArr)

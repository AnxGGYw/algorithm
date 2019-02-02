import SelectionSort from '@/js/sort/SelectionSort'
import util from '@/js/util/util'
import SortTestHelper from '@/js/sort/SortTestHelper'

let randomArr = util.generateRandomArray(100, 0, 100)
SortTestHelper.testSort('SelectionSort', SelectionSort, randomArr)
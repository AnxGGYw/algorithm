/*
 * @Description: 快速排序
 * @Author: cggcbb
 * @Date: 2019-02-13 15:14:49
 * @LastEditTime: 2019-02-15 16:10:39
 */
import util from '@/js/util/util'
import InsertionSort from './InsertionSort'

// 临界点  排序数组长度小于该临界点, 快速排序改为插入排序
const CRITICAL_POINT = 15

export default class QuickSort {
  static sort(arr) {
    QuickSort._quickSort(arr, 0, arr.length - 1)
  }
  
  // 对arr[l....r]部分进行快速排序
  static _quickSort(arr, l, r) {
    if (r - l < CRITICAL_POINT) {
      InsertionSort.sortRange(arr, l, r)
      return
    }
    let p = QuickSort._partition2(arr, l, r)
    QuickSort._quickSort(arr, l, p - 1)
    QuickSort._quickSort(arr, p + 1, r)
  }
  
  // 对arr[l....r]进行partition, 返回p下标, 使整个数组满足arr[0....p - 1] < arr[p] < [p + 1....r]
  static _partition(arr, l, r) {
    // 每次随机考察数组的一个元素
    util.swap(arr, l, Math.floor((Math.random(r - l + 1) + l)))
    let el = arr[l]
    // arr[l + 1....j] < arr[j] < arr[j + 1....i)
    let j = l
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < el) {
        util.swap(arr, ++j, i)
      }
    }
    util.swap(arr, l, j)
    return j
  }

  // 当整个数组重复值很多的时候, partition时间复杂度会变为近似于 O(n^2), partition2不存在这个问题
  /* eslint no-constant-condition: "off" */
  static _partition2(arr, l, r) {
    // 每次随机考察数组的一个元素
    util.swap(arr, l, Math.floor((Math.random(r - l + 1) + l)))
    let el = arr[l]
    // arr[l + 1....i) < el < arr(j....r]
    let i = l + 1,
        j = r
    while(true) {
      while(i <= r && arr[i] < el) {
        i++
      }
      while(j >= l + 1 && arr[j] > el) {
        j--
      }
      if (i > j) {
        break
      }
      util.swap(arr, i, j)
      i ++
      j --
    }
    util.swap(arr, l, j)
    return j
  }
}
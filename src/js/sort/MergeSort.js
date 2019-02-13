/*
 * @Description: 归并排序
 * @Author: cggcbb
 * @Date: 2019-02-13 10:23:19
 * @LastEditTime: 2019-02-13 14:44:41
 */
import InsertionSort from './InsertionSort'

// 临界点  排序数组长度小于该临界点, 归并排序改为插入排序
const CRITICAL_POINT = 15

export default class MergeSort {
  // 从上向下归并
  static sort(arr) {
    MergeSort._mergeSort(arr, 0, arr.length - 1)
  }
  static _mergeSort(arr, l, r) {
    if (r - l < CRITICAL_POINT) {
      InsertionSort.sortRange(arr, l, r)
      return
    }
    let middle = l + (r - l) / 2 | 0
    MergeSort._mergeSort(arr, l, middle)
    MergeSort._mergeSort(arr, middle + 1, r)
    if (arr[middle] > arr[middle + 1]) {
      MergeSort._merge(arr, l, middle, r)
    }
  }
  // 向上归并 归并arr[l....middle] 和 arr[middle + 1....r]
  static _merge(arr, l, middle, r) {
    let aux = new Array(r - l + 1)
    // 拷贝
    for (let i = l; i <= r; i++) {
      aux[i - l] = arr[i]
    }
    let i = l,
        j = middle + 1
    for (let k = l; k <= r; k ++) {
      if (i > middle) {
        arr[k] = aux[j - l]
        j++
      } else if (j > r) {
        arr[k] = aux[i - l]
        i++
      } else if (aux[i - l] < aux[j - l]) {
        arr[k] = aux[i - l]
        i++
      } else {
        arr[k] = aux[j - l]
        j++
      }
    }
  }
}
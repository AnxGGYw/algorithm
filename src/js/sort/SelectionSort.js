/*
 * @Description: 选择排序
 * @Author: cggcbb
 * @Date: 2019-02-01 10:39:09
 * @LastEditTime: 2019-02-01 11:09:01
 */
import { swap } from '@/js/util'

 export default class SelectionSort {
    static sort(arr) {
      for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j
          }
        }
        swap(arr, i, minIndex)
      }
      return arr
    }
 }
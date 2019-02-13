/*
 * @Description: 选择排序
 *               每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
 *               然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 *               以此类推，直到全部待排序的数据元素排完。
 * @Author: cggcbb
 * @Date: 2019-02-01 10:39:09
 * @LastEditTime: 2019-02-13 10:25:05
 */
import util from '@/js/util/util'

export default class SelectionSort {
  static sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (!Object.is(i, minIndex)) {
        util.swap(arr, i, minIndex)
      }
    }
    return arr
  }
}
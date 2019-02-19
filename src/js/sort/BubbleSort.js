/*
 * @Description: 冒泡排序
 * @Author: cggcbb
 * @Date: 2019-02-19 14:13:19
 * @LastEditTime: 2019-02-19 14:14:09
 */
export default class BubbleSort {
  static sort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
  }
}
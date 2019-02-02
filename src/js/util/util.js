/*
 * @Description: 工具函数
 * @Author: cggcbb
 * @Date: 2019-02-01 10:55:10
 * @LastEditTime: 2019-02-02 10:04:16
 */
export default class util {
  // 生成随机数组
  static generateRandomArray = (n, rangeL, rangeR) => {
    let array = new Array(n)
    for (let i = 0; i < n; i++) {
      array[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
    }
    return array
  }
  // 交换 arr 数组的 j 和 k 下标的位置
  static swap(arr, j, k) {
    let t = arr[j]
    arr[j] = arr[k]
    arr[k] = t
  }
  // 复制数组
  static copyArray(arr) {
    return JSON.parse(JSON.stringify(arr))
  }
  // 自定义打印打控制台
  static print = (content, color = '#9e33dc', fontSize = 12) => {
    console.log(`%c${content}`, `color: ${color}; font-size: ${fontSize}px`)
  }
}
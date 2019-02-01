/*
 * @Description: 工具函数
 * @Author: cggcbb
 * @Date: 2019-02-01 10:55:10
 * @LastEditTime: 2019-02-01 11:07:20
 */
export const getRandomArray = (n, rangeL, rangeR) => {
  let array = new Array(n)
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  }
  return array
}

export const swap = (arr, j, k) => {
  let t = arr[j]
  arr[j] = arr[k]
  arr[k] = t
}

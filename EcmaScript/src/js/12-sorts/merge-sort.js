/**
 * 归并排序
 *
 * Author: Chenvui
 */

const mergeArr = (left,right) => {
  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // 判断2个数组中元素大小，依次插入数组
  while (left.length > leftIndex && right.length > rightIndex) {
    if( left[leftIndex] >= right[rightIndex]) {
      temp.push(right[rightIndex])
      rightIndex++
    } else {
      temp.push(left[leftIndex])
      leftIndex++
    }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const mergeSort = (arr) => {
  // 当任意数组分解到只有一个时返回。
  if (arr.length <= 1) return arr
  // 找到中间值
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0,middle)
  const right = arr.slice(middle)
  // 递归 分解 合并
  return mergeArr(mergeSort(left),mergeSort(right))
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
const res = mergeSort(testArr)
console.log(res)

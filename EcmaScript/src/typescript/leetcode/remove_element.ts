/*
* 27. 移除元素
* https://leetcode.cn/problems/remove-element/description/
*/
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
export function removeElement(nums: number[], val: number): number {
  let size = nums.length
  for (let i = 0; i < size; i++) {
    if (nums[i] === val) { // 发现需要移除的元素，就将数组集体向前移动一位
      for (let j = i + 1; j < size; j++) {
        nums[i] = nums[j]
      }
      i-- // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
      size-- // 此时数组的大小-1
    }
  }
  return size
}


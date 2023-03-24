package remove_element

func RemoveElement(nums []int, val int) int {
	left, right := 0, len(nums)
	for left < right { // v 即 nums[right]
		if nums[left] == val {
			nums[left] = nums[right-1]
			right--
		} else {
			left++
		}
	}
	return left
}

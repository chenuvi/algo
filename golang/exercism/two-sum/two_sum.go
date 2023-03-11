package two_sum

import "fmt"

func main() {
	TwoSum([...]int{2, 7, 11, 15}, 9) // 0,1
}

// TwoSum 两数之和
// TODO
func TwoSum(nums []int, target int) {
	var numsMap = make(map[int]int)
	for index, value := range nums {
		numsMap[value] = index
	}
	for index, _ := range nums {
		temp := target - nums[index]
		if numsMap[temp] {
			return [2]int{index, numsMap[temp]}
		}
	}
	fmt.Printf("numsMap: %v", numsMap)
	// 1. 暴力循环算法
	//for j := 0; j < len(nums); i++ {
	//  for i := 0; i < len(nums); i++ {
	//    if nums[j] + nums[i] == target && j != i {
	//      return [i, j]
	//    }
	//  }
	//}ß
}

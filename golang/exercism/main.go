package main

import (
	"exercism/binary_search"
	"fmt"
)

func main() {
	fmt.Print("二分搜索: ", binary_search.Search([]int{5, 6, 7}, 6))
}

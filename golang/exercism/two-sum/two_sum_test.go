package two_sum

import "testing"

type charactersState struct {
	desc     string
	nums     []int
	target   int
	expected []int
}

func TestTwoSum(t *testing.T) {
	tests := []charactersState{
		{
			desc:          "nums = [2,7,11,15], target = 9 ",
      nums:          [2,7,11,15],
      target:        9,
			expected:      [0,1],
		},
		{
			desc:          "nums = [3,2,4], target = 6",
			nums: [3,2,4],
      target: 6,
			expected:      [1,2],
		},
    {
			desc:          "nums = [3,3], target = 6",
			nums: [3,3],
      target: 6,
			expected:      [0,1],
		},
	}
	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) {
			if got := TwoSum(tt.nums, tt.target); got != tt.expected {
				t.Errorf("TwoSum(%v) = %v; want %v", tt.nums, tt.target, tt.expected)
			}
		})
	}
}

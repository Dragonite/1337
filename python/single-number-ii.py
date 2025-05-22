# Haolin Wu, 20/1/2020
# LeetCode single-number-ii https://leetcode.com/problems/single-number-ii/

from typing import List

class Solution(object):
	# Same logic as single-number, however this time, the next 2 values are checked.
	def singleNumber(self, nums: List[int]) -> int:
		nums = sorted(nums)
		pointer = 0
		while pointer < len(nums):
			if pointer == len(nums) - 1 or nums[pointer] != nums[pointer+1] or nums[pointer] != nums[pointer+2]:
				return nums[pointer]
			pointer += 3


if __name__ == "__main__":
	solution = Solution()
	print(solution.singleNumber([0,1,0,1,0,1,99]))

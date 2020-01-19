# Haolin Wu, 19/1/2020
# LeetCode single-number https://leetcode.com/problems/single-number/

from typing import List

class Solution(object):
	# The logic behind this solution is to use a pointer to check the position in a sorted list
	# The time complexity requirement means that using .count() is not feasible, so by sorting
	# the list first, we are able to arrange all values in pairs, and if they do not satisfy the
	# if statement, the pointer moves forward a pair. Checking the last value occurs first in the if
	# statement, otherwise it will raise an index error due to pointer+1 being checked first.
	def singleNumber(self, nums: List[int]) -> int:
		nums = sorted(nums)
		pointer = 0
		while pointer < len(nums):
			if pointer == len(nums) - 1 or nums[pointer] != nums[pointer+1]:
				return nums[pointer]
			pointer += 2

		# for num in nums:
		# 	if nums.count(num) == 1:
		# 		return num


if __name__ == "__main__":
	solution = Solution()
	print(solution.singleNumber([4,1,2,1,2]))

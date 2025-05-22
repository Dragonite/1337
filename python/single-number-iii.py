# Haolin Wu, 20/1/2020
# LeetCode single-number-ii https://leetcode.com/problems/single-number-ii/

from typing import List


class Solution:
	# Similar to single-number and single-number-ii, however, returns a list of values rather
	# than a single value. Possibly replacing values in nums and splicing may provide a better
	# space complexity.
	def singleNumber(self, nums: List[int]) -> List[int]:
		nums = sorted(nums)
		pointer = 0
		single = []
		while pointer < len(nums):
			print(pointer)
			if pointer == len(nums) - 1 or nums[pointer] != nums[pointer + 1]:
				single.append(nums[pointer])
				pointer += 1
			else:
				pointer += 2
		return single


if __name__ == "__main__":
	solution = Solution()
	print(solution.singleNumber([1, 2, 1, 3, 2, 5]))

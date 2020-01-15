# Haolin Wu, 15/1/2020
# LeetCode two-sum https://leetcode.com/problems/two-sum/

from typing import List

class Solution:
	def twoSum(self, nums: List[int], target: int) -> List[int]:
		# Logic is based on existence in dictionary, and using a dictionary's key each value in nums.
		# This is to prevent duplicates, as each key must be unique. 
		# If the difference required is already inside the dictionary, this is the answer, and the key
		# can be found inside the dictionary, otherwise, the dictionary is populated with the current
		# value to account for duplicates and differences in the future.
		dict = {}
		for i in range(len(nums)):
			if (target - nums[i]) in dict:
				return [i, dict[target - nums[i]]]
			dict[nums[i]] = i

		
if __name__ == "__main__":
	solution = Solution()
	answer = solution.twoSum(nums=[0,4,3,0], target = 0)
	print(answer)
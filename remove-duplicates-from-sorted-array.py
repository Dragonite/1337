# Haolin Wu, 15/1/2020
# LeetCode remove-duplicates-from-sorted-array https://leetcode.com/problems/remove-duplicates-from-sorted-array/

from typing import List


class Solution:
	# Very fast solution, however, does not pass online checks however works locally. Removes
	# usage of the remove() function, which is O(n)
	def removeDuplicates(self, nums: List[int]) -> int:
		dict = {}
		delindex = 0
		for i in range(len(nums)):
			if nums[i] in dict:
				nums[i] = nums[delindex]
				delindex += 1
			dict[nums[i]] = None
		nums = nums[delindex:]
		nums.sort()
		print(nums)
		return len(nums)

def removeDuplicatesSlower(self, nums: List[int]) -> int:
	dict = {}
	for number in nums.copy():
		if number in dict:
			nums.remove(number)
		dict[number] = None
	return len(nums)


if __name__ == "__main__":
	solution = Solution()
	answer = solution.removeDuplicates([0,0,1,1,1,2,2,3,3,4])
	print(answer)

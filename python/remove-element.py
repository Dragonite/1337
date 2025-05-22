# Haolin Wu, <26/2/20>
# LeetCode <remove-element> <https://leetcode.com/problems/remove-element/>


from typing import List

class Solution:
	def removeElement(self, nums: List[int], val: int) -> int:
		proceed = True
		while proceed:
			try:
				nums.remove(val)
			except ValueError:
				proceed = False
		return len(nums)


if __name__ == "__main__":
	solution = Solution()
	print(solution.removeElement([0,1,2,2,3,0,4,2], 2))

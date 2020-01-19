# Haolin Wu, 19/1/20
# LeetCode pascals-triangle-ii https://leetcode.com/problems/pascals-triangle-ii/


class Solution:

	# This solution uses the solution from pascals-triangle

	# Sum Previous takes a list and returns the expected 'next row' of pascal's triangle from it
	def sum_previous(self, nums):
		next_row = []
		i = 0
		while i < len(nums):
			if i == 0:
				next_row.append(nums[i])
				i += 1
			else:
				next_row.append(nums[i] + nums[i - 1])
				i += 1
		next_row.append(1)
		return next_row

	# Calls sum_previous recursively, and handles edge cases such as 0 and 1.
	def getRow(self, rowIndex: int):
		if rowIndex == 0:
			return [1]
		else:
			temp_sum = [1]
			for i in range(0, rowIndex):
				temp_sum = self.sum_previous(temp_sum)
		return temp_sum


if __name__ == "__main__":
	solution = Solution()
	print(solution.sum_previous([1, 1]))
	print(solution.getRow(2))

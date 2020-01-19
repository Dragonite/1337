# Haolin Wu, 19/1/20
# LeetCode pascals-triangle https://leetcode.com/problems/pascals-triangle/


class Solution:

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
	def generate(self, numRows: int):
		overall_list = []
		if numRows == 0:
			return overall_list
		if numRows == 1:
			overall_list.append([1])
		else:
			overall_list.append([1])
			temp_sum = [1]
			for i in range(0, numRows - 1):
				overall_list.append(self.sum_previous(temp_sum))
				temp_sum = self.sum_previous(temp_sum)
		return overall_list


if __name__ == "__main__":
	solution = Solution()
	print(solution.sum_previous([1, 1]))
	print(solution.generate(5))

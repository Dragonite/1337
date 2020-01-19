# Haolin Wu, 19/1/20
# LeetCode plus-one https://leetcode.com/problems/plus-one/

from typing import List


class Solution:

	# Logic is that the original list is turned into an integer, then the integer has 1 added
	# to it, then the result is turned back into a list. This avoids having to deal with next
	# significant values, and instead just using an exponent.
	def plusOne(self, digits: List[int]) -> List[int]:
		value = 0
		for i in range(0, len(digits)):
			value += digits[i] * pow(10, (len(digits) - i - 1))
		value += 1
		return [int(x) for x in str(value)]


if __name__ == "__main__":
	solution = Solution()
	print(solution.plusOne([1, 2, 3]))

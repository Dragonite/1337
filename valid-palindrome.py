# Haolin Wu, 20/1/20
# LeetCode valid-palindrome https://leetcode.com/problems/valid-palindrome/

import re


class Solution:
	# 2 line solution, can be condensed to 1 with __import('re')__. Similar to palindrome-number
	def isPalindrome(self, s: str) -> bool:
		return re.sub(r'\W+', '', s).lower() == re.sub(r'\W+', '', s).lower()[::-1]


if __name__ == "__main__":
	solution = Solution()
	print(solution.isPalindrome("A man, a plan, a canal: Panama"))

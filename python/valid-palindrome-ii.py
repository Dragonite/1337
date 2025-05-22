# Haolin Wu, 20/1/20
# LeetCode valid-palindrome-ii https://leetcode.com/problems/valid-palindrome-ii/


class Solution:
	# This solution is based on the idea of checking the start and corresponding character at the end.
	# This solution can be much faster, as I believe you can do it in a single check, however this made
	# more logical sense to me. If the characters are different, check each different possibility, if
	# either are palindromes, return True.
	def validPalindrome(self, s: str) -> bool:
		if s.lower() == s.lower()[::-1]:
			return True
		different = []
		for i in range(0, len(s)):
			if i < len(s) - i - 1:
				if s[i].lower() == s[len(s)-i-1].lower():
					pass
				else:
					different.append(i)
					different.append(len(s)-i-1)
					break
		for digit in different:
			if (s[:digit] + s[digit+1:]).lower() == (s[:digit] + s[digit+1:]).lower()[::-1]:
				return True
		return False


	# This solution is too slow, gives time limit exceeded. The idea is you check removing
	# every single character, and check a palindrome after that.
	# if s.lower() == s.lower()[::-1]:
	# 	return True
	# for i in range(0, len(s)):
	# 	if (s[:i] + s[i + 1:]).lower() == (s[:i] + s[i + 1:]).lower()[::-1]:
	# 		return True
	# return False


if __name__ == "__main__":
	solution = Solution()
	print(solution.validPalindrome("racecar"))

# Haolin Wu, 15/1/2020
# LeetCode roman-to-integer https://leetcode.com/problems/roman-to-integer/


class Solution:
	# Logic is that initially the first character is converted into a number. This is based on
	# the conversions dictionary. Dictionary may slow it down, and using a bunch of elifs instead
	# can be faster, however this is cleaner code, albeit slightly slower. If the character after
	# I, X or C follows the roman numeral subtraction rule, take away DOUBLE of the total, as
	# the total already has the first character's conversion added, otherwise, just add the
	# conversion value.
	def romanToInt(self, s: str) -> int:
		conversions = {
			"I": 1,
			"V": 5,
			"X": 10,
			"L": 50,
			"C": 100,
			"D": 500,
			"M": 1000
		}
		total = 0
		if len(s) == 1:
			return total + conversions[s]
		else:
			for index, letter in enumerate(s):
				if index == 0:
					if letter in conversions:
						total += conversions[letter]
				else:
					if s[index - 1] == 'I' and (letter in ['V', 'X']):
						total += conversions[letter] - 2 * conversions['I']
					elif s[index - 1] == 'X' and (letter in ['L', 'C']):
						total += conversions[letter] - 2 * conversions['X']
					elif s[index - 1] == 'C' and (letter in ['D', 'M']):
						total += conversions[letter] - 2 * conversions['C']
					else:
						total += conversions[letter]
		return total


if __name__ == "__main__":
	solution = Solution()
	answer = solution.romanToInt(s='MMMCMXCIX')
	print(answer)

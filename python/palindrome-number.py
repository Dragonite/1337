# Haolin Wu, 15/1/2020
# LeetCode palindrome-number https://leetcode.com/problems/palindrome-number/


class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Logic is based on string comparisons, keeps the comparison on both sides as strings
        # to account for negative numbers. Theoretically converting the RHS to int and keeping
        # x as an int also is correct, however doesnt handle the edge case of negative numbers.
        return str(x) == str(x)[::-1]


if __name__ == "__main__":
    solution = Solution()
    answer = solution.isPalindrome(x=121)
    print(answer)

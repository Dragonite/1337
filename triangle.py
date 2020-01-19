# Haolin Wu, 19/1/20
# LeetCode triangle https://leetcode.com/problems/triangle/


from typing import List


class Solution(object):
	# Initial attempt involved a depth first search, however the time complexity was not good
	# enough and continually returned time limit exceeded on LeetCode. This way has better time
	# complexity, and returns the correct answer. It works with an initialised resultant, and
	# each path's minimum amount is chosen, and stored in the resultant array. At the end of
	# computation, the minimum value in the resultant array is the minimum path.
	# Courtesy of @Seamooo for DFS implementation explanation and logic.
	def minimumTotal(self, triangle: List[List[int]]) -> int:
		if len(triangle) == 0:
			return 0
		resultant = [triangle[0][0]]
		temp = []
		for i in range(1, len(triangle)):
			for j in range(0, len(triangle[i])):
				if len(resultant) == 1:
					temp.append(triangle[i][j] + resultant[0])
				else:
					if j == 0:
						temp.append(triangle[i][j] + resultant[0])
					elif j == len(triangle[i]) - 1:
						temp.append(triangle[i][j] + resultant[-1])
					else:
						temp.append(triangle[i][j] + min(resultant[j], resultant[j - 1]))
			resultant = temp
			temp = []
		return min(resultant)


if __name__ == "__main__":
	triangle = [
		[2],
		[3, 4],
		[6, 5, 7],
		[4, 1, 8, 3]
	]
	solution = Solution()
	print(solution.minimumTotal(triangle))

import random

# Basic dice game with user input functionality and total point calculations.

class DiceGame:

	def roll(self) -> tuple:
		# Return a tuple with random integers between 1 and 6 inclusive.
		return random.randint(1, 6), random.randint(1, 6)


if __name__ == "__main__":
	# Take user input and respond accordingly
	val = input("Do you want to play a dice game? yes or no: ")
	if val == "yes":
		# Catch ValueError, where user enters a non-integer as roll count.
		try:
			roll_count = int(input("How many times do you want to roll: "))
			solution = DiceGame()
			total = 0
			# Roll and then check for point accumulating rolls
			for i in range(0, roll_count):
				roll = solution.roll()
				print(str(roll))
				if roll[0] == roll[1]:
					print("You have scored " + str(roll[0]))
					total += roll[0]
			print("Your total score is " + str(total))
		except ValueError:
			print("Please specify how many times you want to roll as an integer.")
			quit()
	elif val == "no":
		print("Thank you for playing.")
		quit()

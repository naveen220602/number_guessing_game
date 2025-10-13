#Python Number Guessing Game
import random
lowest_num = 1
highest_num = 100
answer = random.randint(lowest_num, highest_num)
is_running=True
guesses=0
while is_running:
    guess=input(f"guess a number between {lowest_num} and {highest_num}:")
    guesses+=1
    if guess.isdigit():
        guess=int(guess)
        if guess>answer:
            print("the guess is too high")
        elif guess<answer:
            print("the guess is too low")
        elif guess<=lowest_num and guess>=highest_num:
            print("invalid guess")
            print(f"please select a number between {lowest_num} and {highest_num}")
        else:
            print("you got it")
            print(f"the answer is {answer}")
            print(f"you got it right in {guesses} guesses")
            is_running = False
    else:
        print("invalid guess")
        print(f"please select a number between {lowest_num} and {highest_num}")
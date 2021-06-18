num = eval(input("Enter an integer: "))
ans = num % 5
ans2 = num % 6
if ans == 0 and ans2 == 0:
    print("Is ", num ," divisible by 5 and 6? ", True)
    check = 1
else:
    print("Is ", num, " divisible by 5 and 6? ", False)
    check = 0
if ans == 0 or ans2 == 0:
    print("Is ", num ," divisible by 5 or 6? ", True)
    check2 = 1
else:
    print("Is ", num, " divisible by 5 or 6? ", False)
    check2 = 0

if check == 0 and check2 == 1:
    print("Is ", num, " divisible by 5 or 6, but not both? ", True)
else:
    print("Is ", num, " divisible by 5 or 6, but not both? ", False)

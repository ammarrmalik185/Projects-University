import random
lottery_num = str(random.randint(100, 1000))
print(lottery_num)
input_num = input("Enter a 3 digit number :")
check = 0
if lottery_num == input_num:
    print("Congrats your Award is $10,000")
else:
    for x in range(0, 3):
        if input_num[x] in lottery_num:
            check += 1
    if check == 3:
        print("Congrats your Award is $3,000")
    elif 0 < check < 3:
        print("Congrats your Award is $1,000")
    else:
        print("Sorry no reward")

import random
import time

count = "Y"
while count=="Y":
    ans = random.randint(3, 10)
    print("When the game starts, start counting and then stop when told. Then tell how much time has passed")
    a = input("press enter key to start")
    if a == "seaways":
        print("Start counting.... NOW!!!")
        time.sleep(ans)
        print("STOP , answer =", ans)
        ans_user = eval(input("tell how much time passed :"))
        if ans == ans_user:
            print("CONGRATS!!, you won")
        else:
            print("Sad , u lost, the real answer was:", ans)
    else:
        print("Start counting.... NOW!!!")
        time.sleep(ans)
        print("STOP")
        ans_user = eval(input("tell how much time passed :"))
        if ans == ans_user:
            print("CONGRATS!!, you won")
        else:
            print("Sad , u lost, the real answer was:", ans)
    input("")
    count = input("Enter Y to Restart !!! :")
    print("----------------------------------------------------------------------")

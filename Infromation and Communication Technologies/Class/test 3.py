import random
n = []
value = eval(input("Enter number to check :"))
for _ in range(1000):
    a = random.randint(1, 100)
    n.append(a)
count = 1
for b in n:
     if b == value:
         count +=1
print("The number appeared ", count, "times")
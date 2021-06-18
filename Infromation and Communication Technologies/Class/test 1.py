number = eval(input("Enter the number :"))
for i in range(1, 11, 1):
    ans = number*i
    print(number, " * ", i, " = ", ans)

ans = 1
for i in range(1, number+1):
    ans *= i
print("Factorial =", ans)

print("The number is ", end="")
for i in range(2, number+1):
    if number % i == 0:
        if number == i:
            print("Prime")
            break
        else:
            print("Composite")
            break

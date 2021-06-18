while True:
    try:
        number = eval(input("Enter number: "))
        break
    except NameError:
        print("Invalid Input")

factorial = 1
for x in range(1, number + 1):
    factorial *= x

print("factorial = ", factorial)

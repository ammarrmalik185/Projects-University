while True:
    try:
        max_range = eval(input("Enter range: "))
        break
    except NameError:
        print("Invalid Input")

number1 = 0
number2 = 1
for _ in range(0, max_range):
    series_number = number1 + number2
    print(series_number)
    number1 = number2
    number2 = series_number

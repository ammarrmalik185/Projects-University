numbers = []
sum_1 = 0
for _ in range(5):
    number = eval(input("Enter number: "))
    numbers.append(number)
    sum_1 += number
avg = sum_1/len(numbers)
great = 0
less = 0
equal = 0
for i in numbers:
    if i > avg:
        great += 1
    elif i < avg:
        less += 1
    elif i == avg:
        equal += 1
print("Sum                          = ", sum_1)
print("Average                      = ", avg)
print("Numbers Greater than Average = ", great)
print("Numbers Smaller than Average = ", less)
print("Numbers Equal to Average     = ", equal)

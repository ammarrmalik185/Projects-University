while True:
    try:
        number = eval(input("Enter numbers: "))
        break
    except NameError:
        print("Invalid Input")
grade = ""

if number < 50:
    grade = "F"
elif 50 < number <= 60:
    grade = "E"
elif 61 < number <= 70:
    grade = "D"
elif 71 < number <= 80:
    grade = "C"
elif 81 < number <= 90:
    grade = "B"
elif 91 < number <= 100:
    grade = "A"
else:
    grade = "S ... ?"

print("Your grade is " + grade)

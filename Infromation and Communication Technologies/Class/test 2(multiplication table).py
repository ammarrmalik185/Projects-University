while True:
    range_1 = eval(input("Enter Range (Max range 40):"))

    for dot in range(1, range_1+1):
        print("-", end="")
    print("------Multiplication Table--------", end="")
    for dot in range(1, range_1+1):
        print("--", end="")
    print()

    print("X  | ", end=' ')
    for j in range(1, range_1+1):
        if j <= 9:
            print(" ", j, end=' ')
        elif j > 9:
            print("", j, end=' ')
    print()
    for dot in range(1, range_1+1):
        print("-----", end="")
    print()
    for i in range(1, range_1+1):
        if i <= 9:
            print(i, " | ", end='')
        elif i > 9:
            print(i, "| ", end='')
        for j in range(1, range_1+1):
            print(format(i*j, "4d"), end='')
        print()
    for dot in range(1, range_1+1):
        print("-----", end="")
    print()

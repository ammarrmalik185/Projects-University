def data_view(sno):
    name = r"C:\Users\ParadoX\PycharmProjects\Project 1 v2.0\Records\Record No - " + str(sno) + ".txt"
    read = open(str(name), "r")
    plain_text = read.read()
    print (plain_text)

def open_and_check(serial_number, line_no, key):
    name = r"C:\Users\ParadoX\PycharmProjects\Project 1 v2.0\Records\Record No - " + str(serial_number) + ".txt"
    try:
        check_file = open(str(name), "r")
        file_text = check_file.readlines()
        line = str(file_text[line_no])
        if key in line:
            data_view(serial_number)
            print("***********************************")
    except FileNotFoundError:
        a = 0

choice_2 = -1
while choice_2 != 1 or choice_2 != 4 or choice_2 != 3 or choice_2 != 2:
    print("Which Parameter do you want to search using?\n1 = Model Name\n2 = Manufacturer Name\n"
          "3 = Bullet Caliber\n4 = Price\n5 = Exit")
    check = 0
    try:
        choice_2 = int(input(""))
    except ValueError:
        print("Please Enter an Integer")
        check = 1
    max_range = 90
    if check != 1 and choice_2 != 4 and choice_2 != 3 and choice_2 != 2 and choice_2 != 1 and choice_2 != 5:
        print("Please Choose a Proper Option")

    else:
        if choice_2 == 1:
            key = input("Enter the Model Name :")
            for serial_number in range(max_range):
                serial_number = serial_number + 1
                open_and_check(serial_number, 1, str(key))
        elif choice_2 == 2:
            key = input("Enter the Manufacturer Name :")
            for serial_number in range(max_range):
                serial_number = serial_number + 1
                open_and_check(serial_number, 2, str(key))
        elif choice_2 == 3:
            key = input("Enter the Caliber :")
            for serial_number in range(max_range):
                serial_number = serial_number + 1
                open_and_check(serial_number, 3, str(key))
        elif choice_2 == 4:
            key = input("Enter the Price :")
            for serial_number in range(max_range):
                serial_number = serial_number + 1
                open_and_check(serial_number, 4, str(key))
        elif choice_2 == 5:
                break
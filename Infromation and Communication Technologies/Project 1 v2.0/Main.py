import os

check_2 = 2
choice_1 = 0
max_range = 9000
choice_2 = 0

# Defining functions


def enter_data(sno, data, data_2):
    name_1 = Address + r"\Records\Record No - " + str(sno) + ".txt"
    name_2 = Address + r"\Search Records\Record No - " + str(sno) + ".txt"
    write_2 = open(str(name_2), "w")
    write = open(str(name_1), "w")
    write.write(str(data))
    write_2.write(str(data_2))


def data_view(sno):
    name_1 = str(Address) + r"\Records\Record No - " + str(sno) + ".txt"
    read_1 = open(str(name_1), "r")
    plain_text = read_1.read()
    print(plain_text)


def open_and_check(sno, line_no, key_1):
    name_1 = Address + r"\Search Records\Record No - " + str(sno) + ".txt"
    try:
        check_file = open(str(name_1), "r")
        file_text = check_file.readlines()
        line = str(file_text[line_no])
        key_2 = "(" + str(key_1) + ")"
        if key_2 in line:
            data_view(serial_number)
            print("***********************************")
    except FileNotFoundError:
        pass


# Getting Record save Address
while check_2 != 1:
    try:
        address_get = open("address.txt", "rt")
        Address = address_get.read()
        try:
            address_change_check = 0
            while address_change_check != 1 or address_change_check != 2 or address_change_check != 3:
                address_change_check = eval(input(str(Address) + "\nis the Record save adress\nDo You want"
                                                                 " to\n1 = Use this" " a"
                                                                 "dress\n2 = Permanently change Record Address\n3 "
                                                                 "= Use a "
                                                                 "temporary Record Folder\n"))
                if address_change_check == 1:
                    Address = Address
                    address_get_1 = open(Address + r"\address.txt", "w")
                    address_get_1.write(Address)
                    os.makedirs(Address + "./Records/")
                    os.makedirs(Address + "./Search Records/")
                    check_2 = 1
                    break
                elif address_change_check == 2:
                    Address = str(input("Please Enter the Address:\n"))
                    address_get_1 = open(Address + r"\address.txt", "w")
                    address_get_1.write(Address)
                    os.makedirs(Address + "./Records/")
                    os.makedirs(Address + "./Search Records/")
                    check_2 = 1
                    break
                elif address_change_check == 3:
                    Address = input("Please Enter the Address:\n")
                    test = open(Address + r"\test.txt", "w")
                    test.write("check")
                    os.makedirs(Address + "./Records/")
                    os.makedirs(Address + "./Search Records/")
                    check_2 = 1
                    break
                else:
                    print("Please Select a Proper Choice")
        except FileNotFoundError:
            print("Address not Found, Please try Again")
        except FileExistsError:
            check_2 = 1
        except OSError:
            print("Please Enter a Proper Address")
    except FileNotFoundError:
        try:
            print("\nDefault record save address not found")
            Address = str(input("Please Enter the Address:\n"))
            address_get_1 = open("address.txt", "w")
            address_get_1.write(str(Address))
            os.makedirs(Address + "./Records/")
            os.makedirs(Address + "./Search Records/")

            check_2 = 1
        except FileNotFoundError:
            print("Address not Found, Please try Again")
        except FileExistsError:
            check_2 = 1
        except OSError:
            print("Please Enter a Proper Address")


# Core
while choice_1 != 5:

    check = 0
    print("Arms Management System\n1 = Add Record\n2 = View Record\n3 = Edit Record\n4 = Search Record\n"
          "5 = Exit")
    try:
        choice_1 = int(input("What do you want to do?\n"))
    except ValueError:
        print("Please Select a Proper Option")
        check = 1
    if check != 1 and choice_1 != 5 and choice_1 != 4 and choice_1 != 3 and choice_1 != 2 and choice_1 != 1\
            and choice_1 != 0:
        print("Please Select a Proper Option")
# Add Record
    if choice_1 == 1:
        for serial_number in range(max_range):
            serial_number = serial_number + 1
            try:
                name = str(Address) + r"\Records\Record No - " + str(serial_number) + ".txt"
                read = open(str(name), "r")
            except FileNotFoundError:
                model_name = str(input("Enter the Model Name Of the Weapon = "))
                Manufacturer_Name = str(input("Enter the Manufacturer Name Of the Weapon = "))
                caliber = str(input("Enter the Caliber Of the Weapon = "))
                price = str(input("Enter the Price Of the Weapon = "))

                data_enter = "Serial Number     = " + str(serial_number) + "\nModel Name        = " + str(
                    model_name) + "\nManufacturer Name = " + str(Manufacturer_Name) + "\nGun Caliber       = " + str(
                    caliber) + "\nPrice             = " + str(price)

                data_search_enter = "Serial Number" + str(serial_number) + "\nModel Name" + "(" + str(
                    model_name) + ")" + "\nManufacturer Name" + "(" + str(Manufacturer_Name) + ")" + "\nGun Caliber" +\
                    "(" + str(caliber) + ")" + "\nPrice" + "(" + str(price) + ")"
                enter_data(serial_number, str(data_enter), str(data_search_enter))
                break
# View Record
    elif choice_1 == 2:
        serial_number = -2
        print("( Max Serial No Range = ", max_range, ")")
        while serial_number != 0:
            try:
                serial_number = int(input("Enter Serial Number of the Weapon you want to View, -1 to View all, 0 to"
                                          " Exit:\n"))
            except ValueError:
                print("Please Enter an integer")

            if serial_number == 0:
                break

            if serial_number != -1:
                try:
                    data_view(serial_number)
                except FileNotFoundError:
                    print("Record not found")
            elif serial_number == -1:
                for num in range(max_range):
                    num = num + 1
                    try:
                        data_view(num)
                        print("***********************************************************")
                    except FileNotFoundError:
                        a = 0
# Edit Record
    elif choice_1 == 3:
        serial_number = -1
        print("( Max Serial No Range = ", max_range, ")")
        while serial_number != 0:
            try:
                serial_number = int(input("Enter Serial Number of the Weapon you want to edit, 0 to Exit:\n"))
            except ValueError:
                print("Please Enter an integer")

            if serial_number == 0:
                break

            model_name = str(input("Enter the New Model Name Of the Weapon :"))
            Manufacturer_Name = str(input("Enter the New Manufacturer Name Of the Weapon :"))
            caliber = str(input("Enter the New Caliber Of the Weapon :"))
            price = str(input("Enter the New Price Of the Weapon :"))

            data_enter = "Serial Number     = " + str(serial_number) + "\nModel Name        = " + str(
                model_name) + "\nManufacturer Name = " + str(Manufacturer_Name) + "\nGun Caliber       = " + str(
                caliber) + "\nPrice             = " + str(price)
            data_search_enter = "Serial Number" + str(serial_number) + "\nModel Name" + "(" + str(
                model_name) + ")" + "\nManufacturer Name" + "(" + str(Manufacturer_Name) + ")" + "\nGun Caliber" +\
                "(" + str(caliber) + ")" + "\nPrice" + "(" + str(price) + ")"
            enter_data(serial_number, str(data_enter), data_search_enter)
# Search Record
    elif choice_1 == 4:
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

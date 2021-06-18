
def enter_data(sno, data):
    name = r"C:\Users\ParadoX\PycharmProjects\Project 1\Records\Record No - " + str(sno) + ".txt"
    write = open (str(name), "w")
    write.write(str(data))

def data_view(sno):
    name = r"C:\Users\ParadoX\PycharmProjects\Project 1\Records\Record No - " + str(sno) + ".txt"
    read = open(str(name), "r")
    plain_text = read.read()
    print (plain_text)


def data_search(sno):
    name = r"C:\Users\ParadoX\PycharmProjects\Project 1\Records\Record No - " + str(sno) + ".txt"
    read = open(str(name), "r")
    plain_text = read.read()
    return plain_text

max_range = 20000
choice_1 = 0


while choice_1 != 4:
    serial_number = -1
    check = 0
    print("Arms Management System\n1 = Add or Edit Record\n2 = View Record\n3 = Search Record\n4 = Exit")
    try:
        choice_1 = int (input("What do you want to do?\n"))
    except(ValueError):
        print("Please Select a Proper Option")
        check = 1
    if check != 1 and choice_1 != 4 and choice_1 != 3 and choice_1 != 2 and choice_1 != 1 and choice_1 != 0:
        print("Please Select a Proper Option")

    if choice_1 == 1:
        print("( Max Serial No Range = ", max_range, ")")
        while serial_number != 0:
            try:
                serial_number = int(input("Enter Serial Number of the Weapon you want to Input or edit, 0 to Exit:\n"))
            except(ValueError):
                print("Please Enter an integer")

            if serial_number == 0:
                break

            model_name = str(input("Enter the Model Name Of the Weapon"))
            manaf_name = str(input("Enter the Manufacturer Name Of the Weapon"))
            caliber = str(input("Enter the Caliber Of the Weapon"))
            price = str(input("Enter the Price Of the Weapon"))

            data_enter = "Serial Number = " + str(serial_number) + "\nModel Name = " + str(model_name) +"\nManufacturer Name = " + str(manaf_name) + "\nGun Caliber = " + str(caliber) + "\nPrice = " + str(price)
            enter_data(serial_number, str(data_enter))

    elif choice_1 == 2:
        print ("( Max Serial No Range = ", max_range, ")")
        while serial_number != 0:
            try:
                serial_number = int(input("Enter Serial Number of the Weapon you want to View, -1 to View all, 0 to Exit:\n"))
            except(ValueError):
                print("Please Enter an integer")

            if serial_number == 0:
                break

            if serial_number != -1:
                try:
                    data_view(serial_number)
                except(FileNotFoundError):
                    print("Record not found")
            elif serial_number == -1:
                for num in range(max_range):
                    num = num + 1
                    try:
                        data_view(num)
                        print ("***********************************************************")
                    except(FileNotFoundError):
                        a=0

    elif choice_1 == 3:
        print("Which Parameter do you want to search using?\n1 = Model Name\n2 = Manufacturer Name\n3 = Bullet Caliber\n4 = Price\n5 = Exit")
        try:
            choice_2 = (input(""))
        except(ValueError):
            print("Please Enter an Integer")
            continue
        while choice_2 != 5:
            if choice_2 == 1:
                a=1
            elif choice_2 == 2:
                a=1
            elif choice_2 == 3:
                a=1
            elif choice_2 == 4:
                a=1


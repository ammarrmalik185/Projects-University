import os

max_range = 9000
file_save_path = r"Record Data\Arms Data"


def main():
    while True:
        print("1 - Add New Gun\n2 - View Available Guns\n3 - Update Gun Record\n4 - Delete Record\n5 - Search Record\n"
              "6 - Add quantity of a gun\n7 - Exit")
        choice = input("What do you want to do? :")
        if choice == "1":
            add_new_record()
        elif choice == "2":
            view_record()
        elif choice == "3":
            update_record()
        elif choice == "4":
            delete_record()
        elif choice == "5":
            search_record()
        elif choice == "6":
            add_quantity()
        elif choice == "7":
            print("Exiting Add Record Function")
            break
        else:
            print("Option not available")


def add_new_record():
    for sno in range(1, max_range):
        if not os.path.isfile(file_save_path + r"\Records\Record No - " + str(sno) + ".txt"):
            name_1 = file_save_path + r"\Records\Record No - " + str(sno) + ".txt"
            name_2 = file_save_path + r"\Search Records\Record No - " + str(sno) + ".txt"

            model_name = input("Enter the Model Name Of the Weapon = ")
            dealer_name = input("Enter the Name of the Dealer Of the Weapon = ")
            caliber = input("Enter the Caliber Of the Weapon = ")
            price = input("Enter the Price Of the Weapon = ")
            quantity = input("Enter the Quantity of the Weapon =")

            data_1 = "Serial Number     = " + str(sno) + \
                     "\nModel Name        = " + str(model_name) + \
                     "\nDealer Name       = " + str(dealer_name) + \
                     "\nGun Caliber       = " + str(caliber) + \
                     "\nPrice             = " + str(price) + \
                     "\nQuantity          = " + str(quantity)

            data_2 = str(sno) + "\n" + "(" + str(
                     model_name) + ")" + "\n" + "(" + str(dealer_name) + ")" + "\n" + \
                     "(" + str(caliber) + ")" + "\n" + "(" + str(price) + ")" + "\n" + "(" +\
                      str(quantity) + ")"

            write_2 = open(str(name_2), "w")
            write = open(str(name_1), "w")
            write.write(str(data_1))
            write_2.write(str(data_2))
            break


def view_record():
    while True:
        serial_number = eval(input("Enter Serial Number of the Weapon you want to View, -1 to View all, 0 to"
                                   " Exit:\n"))
        if serial_number == -1:
            for sno in range(1, max_range):
                if os.path.isfile(file_save_path + r"\Records\Record No - " + str(sno) + ".txt"):
                    name_1 = file_save_path + r"\Records\Record No - " + str(sno) + ".txt"
                    file = open(name_1, "r")
                    text = file.read()
                    print(text)
                    file.close()

        elif serial_number == 0:
            break

        elif os.path.isfile(file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"):
            name_1 = file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"
            file = open(name_1, "r")
            text = file.read()
            print(text)
            file.close()

        else:
            print("Record not found")



def update_record():
    sno = int(input("Enter the serial no of the record you want to edit :"))
    if os.path.isfile(file_save_path + r"\Records\Record No - " + str(sno) + ".txt"):
        model_name = input("Enter the New Model Name Of the Weapon = ")
        dealer_name = input("Enter the Name of the Dealer Of the Weapon = ")
        caliber = input("Enter the New Caliber Of the Weapon = ")
        price = input("Enter the New Price Of the Weapon = ")
        quantity = input("Enter the New Quantity of the Weapon = ")

        name_1 = file_save_path + r"\Records\Record No - " + str(sno) + ".txt"
        name_2 = file_save_path + r"\Search Records\Record No - " + str(sno) + ".txt"

        data_1 = "Serial Number     = " + str(sno) + "\nModel Name        = " + str(
                model_name) + "\nDealer Name       = " + str(dealer_name) + "\nGun Caliber       = " + str(
                caliber) + "\nPrice             = " + str(price) + "\nQuantity          = " + str(quantity)

        data_2 = str(sno) + "\n" + "(" + str(
                model_name) + ")" + "\n" + "(" + str(dealer_name) + ")" + "\n" + \
                "(" + str(caliber) + ")" + "\n" + "(" + str(price) + ")" + "\n" + "(" +\
                str(quantity) + ")"

        write_2 = open(str(name_2), "w")
        write = open(str(name_1), "w")
        write.write(str(data_1))
        write_2.write(str(data_2))
    else:
        print("Record not available")


def add_quantity():
    pass


def delete_record():
    pass


def search_record():
    while True:
        print("Which Parameter do you want to search using?\n1 = Model Name\n2 = Dealer Name\n"
              "3 = Bullet Caliber\n4 = Price\n5 = Quantity\n6 = Exit")
        key = input("Enter your choice :")
        if key == 1:
            value = input("Enter the Model Name :")
            for serial_number in range(1, max_range):
                if os.path.isfile(file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"):
                    name_1 = file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"
                    file = open(name_1, "r")
                    text = file.readlines()
                    if text[1] == "(" + value + ")":
                        name_2 = file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"
                        file_2 = open(name_2, "r")
                        text = file_2.read()
                        print(text)
                        file_2.close()
                    file.close()
        elif key == 2:
            value = input("Enter the Dealer Name :")
            for serial_number in range(1, max_range):
                if os.path.isfile(file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"):
                    name_1 = file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"
                    file = open(name_1, "r")
                    text = file.readlines()
                    if text[2] == "(" + value + ")":
                        name_2 = file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"
                        file_2 = open(name_2, "r")
                        text = file_2.read()
                        print(text)
                        file_2.close()
                    file.close()
        elif key == 3:
            value = input("Enter the Caliber :")
            for serial_number in range(1, max_range):
                if os.path.isfile(file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"):
                    name_1 = file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"
                    file = open(name_1, "r")
                    text = file.readlines()
                    if text[3] == "(" + value + ")":
                        name_2 = file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"
                        file_2 = open(name_2, "r")
                        text = file_2.read()
                        print(text)
                        file_2.close()
                    file.close()
        elif key == 4:
            value = input("Enter the Price :")
            for serial_number in range(1, max_range):
                if os.path.isfile(file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"):
                    name_1 = file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"
                    file = open(name_1, "r")
                    text = file.readlines()
                    if text[4] == "(" + value + ")":
                        name_2 = file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"
                        file_2 = open(name_2, "r")
                        text = file_2.read()
                        print(text)
                        file_2.close()
                    file.close()
        elif key == 5:
            value = input("Enter the Quantity :")
            for serial_number in range(1, max_range):
                if os.path.isfile(file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"):
                    name_1 = file_save_path + r"\Records\Search Record No - " + str(serial_number) + ".txt"
                    file = open(name_1, "r")
                    text = file.readlines()
                    if text[5] == "(" + value + ")":
                        name_2 = file_save_path + r"\Records\Record No - " + str(serial_number) + ".txt"
                        file_2 = open(name_2, "r")
                        text = file_2.read()
                        print(text)
                        file_2.close()
                    file.close()
        elif key == "6":
            break
        else:
            print("Select a proper choice")



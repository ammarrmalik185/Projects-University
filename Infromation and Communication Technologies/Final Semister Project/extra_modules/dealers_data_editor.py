import os

max_range = 9000
file_save_path = r"Record Data\Dealers Data"


def main():
    while True:
        print("1 - Add New Dealer\n2 - View Available Dealers\n3 - Update Dealer Record\n4 - Delete Record\n"
              "5 - Search Record\n6 - Exit")
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
            print("Exiting Add Record Function")
            break
        else:
            print("Option not available")


def add_new_record():
        for sno in range(1, max_range):
            if not os.path.isfile(file_save_path + r"\Records\Record No - " + str(sno) + ".txt"):
                name_1 = file_save_path + r"\Records\Record No - " + str(sno) + ".txt"
                name_2 = file_save_path + r"\Search Records\Record No - " + str(sno) + ".txt"

                dealer_name = input("Enter the Dealer Name = ")
                dealer_country = input("Enter the Country of the Dealer = ")
                dealer_rating = input("Enter the Rating Of the Dealer = ")
                dealer_contact_no = input("Enter the Contact no Of the Weapon = ")

                data_1 = "\nSerial Number           = " + str(sno) + \
                         "\nDealer Name             = " + str(dealer_name) + \
                         "\nDealer Country          = " + dealer_country + \
                         "\nDealer Rating           = " + dealer_rating + \
                         "\nDealer Contact no       = " + dealer_contact_no

                data_2 = str(sno) + "\n" + "(" + str(dealer_name) + ")" + "\n" + \
                         "(" + dealer_country + ")" + "\n" + \
                         "(" + dealer_rating + ")" + "\n" + "(" + dealer_contact_no + ")"

                write_2 = open(str(name_2), "w")
                write = open(str(name_1), "w")
                write.write(str(data_1))
                write_2.write(str(data_2))
                break


def view_record():
    while True:
        serial_number = eval(input("Enter Serial Number of the Dealer you want to View, -1 to View all, 0 to"
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

        dealer_name = input("Enter the Dealer Name ")
        dealer_country = input("Enter the Country of the Dealer = ")
        dealer_rating = input("Enter the Rating Of the Dealer = ")
        dealer_contact_no = input("Enter the Contact no Of the Weapon = ")

        name_1 = file_save_path + r"\Records\Record No - " + str(sno) + ".txt"
        name_2 = file_save_path + r"\Search Records\Record No - " + str(sno) + ".txt"

        data_1 = "  Serial Number           = " + str(sno) + \
                 "\nDealer Name             = " + str(dealer_name) + \
                 "\nDealer Country          = " + dealer_country + \
                 "\nDealer Rating           = " + dealer_rating + \
                 "\nDealer Contact no       = " + dealer_contact_no

        data_2 = str(sno) + "\n" + "(" + str(dealer_name) + ")" + "\n" + \
                 "(" + dealer_country + ")" + "\n" + \
                 "(" + dealer_rating + ")" + "\n" + "(" + dealer_contact_no + ")"

        write_2 = open(str(name_2), "w")
        write = open(str(name_1), "w")
        write.write(str(data_1))
        write_2.write(str(data_2))
    else:
        print("Record not available")


def delete_record():
    pass


def search_record():
    pass


def record_availability_checker(name):
    pass

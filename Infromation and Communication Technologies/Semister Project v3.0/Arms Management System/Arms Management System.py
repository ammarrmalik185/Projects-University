import random

model_name = []  # Creating list For Model names
manufacturer_name = []  # Creating list For Manufacturer names
price = []  # Creating list For Price
caliber = []  # Creating list For Caliber
serial_no = 0  # Assigning Serial_no Variable
random_serial_no = 0  # Assigning Random Serial No Variable
parameter = "None"  # Assigning Parameter Variable
total_records = 9000  # Assigning Total No of Records
for i in range((total_records+1)):  # Using for loop to append the above lists
    model_name.append("Not Available")  # Appending model_name list with "Not Available"
    manufacturer_name.append("Not Available")  # Appending manufacturer_name list with "Not Available"
    price.append("Not Available")  # Appending price list with "Not Available"
    caliber.append("Not Available")  # Appending Caliber list with "Not Available"

check = "Y"  # Assigning Check Variable
check2 = "Y"  # Assigning Check 2 Variable
check3 = "Y"  # Assigning Check 3 Variable


def add_records(serial_no):  # Making Add Records Function
        if serial_no > 0:  # checking Serial No
            if model_name[serial_no] == "Not Available" \
                    or manufacturer_name[serial_no] == "Not Available" \
                    or price[serial_no] == "Not Available" \
                    or caliber[serial_no] == "Not Available":
                # Check To see If Record is not Added At that Serial No
                model_name_temp = input("Enter the model name of serial no " + str(serial_no) + ": ")
                # Creating local variable for Model name
                model_name[serial_no] = model_name_temp  # Entering Data into Model Name List
                manufacturer_name_temp = input("Enter the Manufacturer of serial no " + str(serial_no) + ": ")
                # Creating local variable for Manufacturer Name
                manufacturer_name[serial_no] = manufacturer_name_temp  # Entering Data into Manufacturer Name List
                price_temp = input("Enter the Price of serial no " + str(serial_no) + ": ")
                # Creating local variable for Price
                price[serial_no] = price_temp # Entering Data into Price List
                caliber_temp = input("Enter the Caliber of serial no " + str(serial_no) + ": ")
                # Creating local variable for Caliber
                caliber[serial_no] = caliber_temp # Entering Data into Caliber List
                print("--------------------------------------")  # For good Visual
            else:
                print("Record of Serial no.", serial_no, "Already added")  # If Record Already added
                print("--------------------------------------")  # For good Visual
        elif serial_no == -1:  # Check to Add Record at Random Serial no
            random_serial_no = random.randint(1, (total_records + 1))
            if model_name[random_serial_no] == "Not Available" \
                    or manufacturer_name[random_serial_no] == "Not Available" \
                    or price[random_serial_no] == "Not Available" \
                    or caliber[random_serial_no] == "Not Available":
                # Check To see If Record is not Added At that Serial No
                model_name_temp = input("Enter the model name of serial no " + str(random_serial_no) + ": ")
                # Creating local variable for Model name
                model_name[random_serial_no] = model_name_temp  # Entering Data into Model Name List
                manufacturer_name_temp = input("Enter the Manufacturer of serial no " + str(random_serial_no) + ": ")
                # Creating local variable for Manufacturer Name
                manufacturer_name[random_serial_no] = manufacturer_name_temp  # Entering Data into Manufacturer List
                price_temp = input("Enter the Price of serial no " + str(random_serial_no) + ": ")
                # Creating local variable for Price
                price[random_serial_no] = price_temp  # Entering Data into Price List
                caliber_temp = input("Enter the Caliber of serial no " + str(random_serial_no) + ": ")
                # Creating local variable for Caliber
                caliber[random_serial_no] = caliber_temp  # Entering Data into Caliber List
                print("--------------------------------------")  # For good Visual
            else:
                print("Record of Serial no.", random_serial_no, "Already added")  # If Record Already added
                print("--------------------------------------")  # For good Visual

        else:
            print("Please Enter A Proper Choice !!!")  # Check to Enter a Proper Choice


def view_records(serial_no):
    serial_no = int(serial_no)
    if serial_no > 0:
        print("--------------------------------------")  # For good Visual
        print("Record of serial no " + str(serial_no))  # Printing Record of that serial no.
        print("Model name of serial no " + str(serial_no) + ": ", model_name[serial_no])
        #  Printing Model name of that Serial no
        print("Manufacturer of serial no " + str(serial_no) + ": ", manufacturer_name[serial_no])
        #  Printing Manufacturer of that Serial no
        print("Price of serial no " + str(serial_no) + ": ", price[serial_no])
        #  Printing Price of that Serial no
        print("Caliber of serial no " + str(serial_no) + ": ", caliber[serial_no])
        #  Printing Caliber of that Serial no
        print("--------------------------------------")  # For good Visual
    if serial_no == -1:
        for i in range(total_records):
            if model_name[i] != "Not Available" or manufacturer_name[i] != "Not Available" \
                    or price[i] != "Not Available" or caliber[i] != "Not Available":  # Check to Print Records with Data
                print("--------------------------------------")  # For good Visual
                print("Record of serial no ", i) # Printing Record of that serial no.
                print("Model name of serial no ", i, ": ", model_name[i])  # Printing Model name of that Serial no
                print("Manufacturer of serial no ", i, ": ", manufacturer_name[i])
                # Printing Manufacturer Name of that Serial no
                print("Price of serial no ", i, ": ", price[i])  # Printing Price of that Serial no
                print("caliber of serial no ", i, ": ", caliber[i])  # Printing Caliber of that Serial no


def update_records(serial_no):
    if serial_no > 0:
        if model_name[serial_no] != "Not Available" or manufacturer_name[serial_no] != "Not Available"\
                or price[serial_no] != "Not Available" or caliber[serial_no] != "Not Available":
            # Check if Record not Added
            print("--------------------------------------")  # For good Visual
            model_name_temp = input("Enter the model name of serial no " + str(serial_no) + ": ")
            # Creating local variable for Model name
            model_name[serial_no] = model_name_temp  # Entering Data into Model Name List
            manufacturer_name_temp = input("Enter the Manufacturer of serial no " + str(serial_no) + ": ")
            # Creating local variable for Manufacturer Name
            manufacturer_name[serial_no] = manufacturer_name_temp  # Entering Data into Manufacturer Name List
            price_temp = input("Enter the Price of serial no " + str(serial_no) + ": ")
            # Creating local variable for Price
            price[serial_no] = price_temp  # Entering Data into Price List
            caliber_temp = input("Enter the Caliber of serial no " + str(serial_no) + ": ")
            # Creating local variable for Caliber
            caliber[serial_no] = caliber_temp  # Entering Data into Caliber List
        else:
            print("--------------------------------------")  # For good Visual
            print("Record of Serial no.", serial_no, "Not Added")  # If Record Not added
    else:
        print("Please Enter A Proper Choice !!!")  # Check to Enter a Proper Choice

def search_record():
    choice = 1
    while choice != 5:
        print("Enter the perimeter you want to use to search:\n1 = Model name\n2 = Manufacturer name\n3 = Caliber\n"
              "4 = Price\n5 = Exit")
        choice = input("Enter your choice :")
        if choice == "1":
            key = input("Enter rhe model name of the gun you want to find :")
            if key in model_name_list:
                for index in range(1, len(model_name_list)):
                    if model_name_list[index] == key:
                        view_record(index)
            else:
                print("No Record Found")
        elif choice == "2":
            key = input("Enter rhe manufacturer name of the gun you want to find :")
            if key in manufacturer_list:
                for index in range(1, len(manufacturer_list)):
                    if manufacturer_list[index] == key:
                        view_record(index)
            else:
                print("No Record Found")
        elif choice == "3":
            key = input("Enter rhe caliber of the gun you want to find :")
            if key in caliber_list:
                for index in range(1, len(caliber_list)):
                    if caliber_list[index] == key:
                        view_record(index)
            else:
                print("No Record Found")
        elif choice == "4":
            key = input("Enter rhe price of the gun you want to find :")
            if key in price_list:
                for index in range(1, len(price_list)):
                    if price_list[index] == key:
                        view_record(index)
            else:
                print("No Record Found")
        elif choice == "5":
            break
        else:
            print("Select a proper choice")


def main(check, check2):
    while check == "Y":
        check2 = "Y"
        print("--------------------------------------")  # For good Visual
        print(" 1: Add Records\n 2: Update Records\n 3: View Records \n 4: Search Records\n 5: Exit")
        selection = input("Enter What do you want to do: ")
        print("--------------------------------------")  # For good Visual
        if selection == "1":  # To Call Add Records Function
            while check2 == "Y":  # Check to repeatedly Add Records
                serial_no = eval(input("Enter the Serial no of Data you want to add "
                                       "or -1 to add at a random Serial no: "))
                # Entering Serial no to Add
                add_records(serial_no)  # Calling Add Records Function
                check2 = input("Enter Y to Add more Record or any key to exit: ")  # Check to Continue Or Exit
        elif selection == "2":  # To Call Update Records Function
            while check2 == "Y":  # Check to repeatedly Update Records
                serial_no = eval(input("Enter the Serial no of Data you want to update: "))
                # Entering Serial no to Update
                update_records(serial_no)  # Calling Update Records Function
                check2 = input("Enter Y to Add more Record or any key to exit: ")  # Check to Continue Or Exit
                print("--------------------------------------")  # For good Visual
        elif selection == "3":  # To Call View Records Function
            while check2 == "Y":  # Check to repeatedly View Records
                serial_no = eval(input("Enter the Serial no of Data you want to View or -1 to view All: "))
                # Entering Serial no to View
                view_records(serial_no)  # Calling View Records Function
                check2 = input("Enter Y to Add more Record or any key to exit: ")  # Check to Continue Or Exit
        elif selection == "5":  # To Exit Program
            print("----Program Terminates Successfully---")  # Program Terminates
            print("--------------------------------------")  # For good Visual
            break  # Breaking the loop To end Program
        else:
            print("Please Enter a Proper Option")  # Check to Enter a Proper Choice


print("--------------------------------------")  # For good Visual
check3 = input("Press Y to Enter menu or any key To Exit: ")
if check3 == "Y":  # Check To Enter Menu
    main("Y", "Y")  # Calling Main Function
else:
    print("--------------------------------------")  # For good Visual
    print("----Program Terminates Successfully---")  # Printing Program Terminates Successfully
    print("--------------------------------------")  # For good Visual

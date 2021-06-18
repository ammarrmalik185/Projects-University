
arms_model_name_list = ["-1"]  # creating a list for arms model model names
arms_manufacturer_list = ["-1"]  # creating a list for arms manufacturers
arms_price_list = ["-1"]  # creating a list for arms price
arms_caliber_list = ["-1"]  # creating a list for arms caliber
arms_quantity_list = ["-1"]  # creating a list for arms quantity


def arms_add_record():  # creating function for adding records
    arms_model_name_list.append(input("Enter the arms model name  :"))
    # taking arms model name as input and appending to list
    arms_manufacturer_list.append(input("Enter the  arms Manufacturer name  :"))
    # taking arms country as input and appending to list
    arms_price_list.append(input("Enter the Price of arms :"))
    # taking arms Price as input and appending to list
    arms_caliber_list.append(input("Enter the Caliber  :"))
    # taking arms Caliber as input and appending to list
    arms_quantity_list.append(eval(input("Enter Quantity of Arms  :")))
    # taking arms Quantity as input and appending to list


def arms_view_record(sno):  # creating function for viewing records
    if sno <= len(arms_model_name_list):  # making sure that the serial no is in the list limit
        print("Serial No           :", sno)  # printing the serial no of the record
        print("arms model name         :", arms_model_name_list[sno])  # printing the arms model name of the record
        print("arms Manufacturer name :", arms_manufacturer_list[sno])
        # printing the arms Manufacturer name of the record
        print("Price of arms    :", arms_price_list[sno])  # printing the arms Price of the record
        print("Caliber          :", arms_caliber_list[sno])  # printing the arms Caliber of the record
        print("Quantity         :", arms_quantity_list[sno])  # printing the arms quantity of the record
        print("------------------------------------------------------------")  # separating different outputs
    else:  # if record is not available
        print("Record not available")  # printing "record not available" to tell the user


def arms_update_record(sno):  # creating function for updating records
    if sno <= len(arms_model_name_list):  # making sure that the serial no is in the list limit
        arms_model_name_list[sno] = input("Enter the arms model name  :")
        # taking arms model name as input and assigning in the list at the given serial no
        arms_manufacturer_list[sno] = input("Enter the  arms Manufacturer name  :")
        # taking arms country as input and  assigning in the list at the given serial no
        arms_price_list[sno] = input("Enter the Price of arms :")
        # taking arms Price as input and  assigning in the list at the given serial no
        arms_caliber_list[sno] = input("Enter the Caliber  :")
        # taking arms Caliber as input and assigning in the list at the given serial no
        arms_quantity_list.append(input("Enter Quantity of Arms  :"))
        # taking arms quantity as input and assigning in the list at the given serial no
        print("Updated record:")  # making a heading of the updated record
        arms_view_record(sno)  # printing the updated record
    else:  # if record is not available
        print("Record with this serial number is not available")  # telling the user that this record is not available


def arms_search_record():  # creating function for searching records
    choice = 1  # making a variable so that loop may start
    while choice != 5:  # making a loop that will continue till user enters 5
        print("Enter the perimeter you want to use to search:\n1 =model name\n2 = Manufacturer name\n"
              "3 = Price \n4 = Caliber\n5 = Exit")  # printing the available searching options
        choice = input("Enter your choice :")  # taking the choice of the user as input
        if choice == "1":  # if the user inputs 1 searching using arms model name
            key = input("Enter the model name of the arm you want to find :")
            # taking an input for model name of the arm the user wants to find
            if key in arms_model_name_list:  # checking if the required record is available
                for index in range(1, len(arms_model_name_list)):  # making a loop to scan every entity in the list
                    if arms_model_name_list[index] == key:  # if a record is found ...
                        arms_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "2":  # if the user inputs 2 searching using arms country
            key = input("Enter the Manufacturer name of the arms you want to find :")
            # taking an input for country of the arms the user wants to find
            if key in arms_manufacturer_list:  # checking if the required record is available
                for index in range(1, len(arms_manufacturer_list)):  # making a loop to scan every entity in the list
                    if arms_manufacturer_list[index] == key:
                        arms_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "3":   # if the user inputs 3  searching using arms Price
            key = input("Enter the Price of the arms you want to find :")
            # taking an input for Price of the arms the user wants to find
            if key in arms_price_list:  # checking if the required record is available
                for index in range(1, len(arms_price_list)):  # making a loop to scan every entity in the list
                    if arms_price_list[index] == key:  # if a record is found ..
                        arms_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "4":   # if the user inputs 4 searching using arms Caliber
            key = input("Enter rhe Caliber of the arms you want to find :")
            # taking an input for Caliber of the arms the user wants to find
            if key in arms_caliber_list:  # checking if the required record is available
                for index in range(1, len(arms_caliber_list)):  # making a loop to scan every entity in the list
                    if arms_caliber_list[index] == key:  # if a record is found ..
                        arms_view_record(index)   # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "5":  # if the user inputs 5
            break  # ending the loop
        else:  # if the user inputs an unavailable choice
            print("Select a proper choice")  # telling the user tto enter a proper choice


def arms_main_menu():  # creating function for main menu
    check_1 = 0  # making a variable so that the loop initiates
    while check_1 != "5":  # making a loop that will continue till the user inputs 5
        print("Welcome to Arms Weapons Management System!!!")  # Welcome message
        print("What do you want to do\n1 = Add record\n2 = View Record\n3 = Update Record\n4 = Search Record\n5 = Exit")
        # telling the user about the available options
        check_1 = input("Enter your choice number :")  # taking input from the user
        if check_1 == "1":  # if the user selects 1
            check_2 = "Y"  # making a variable so that the loop initiates
            while check_2 == "Y":  # making a loop that will continue till the user inputs something other than Y
                arms_add_record()  # calling the add record function
                check_2 = input("If you want to add another record, enter Y :")
                # asking the user if he wants to enter another record
        elif check_1 == "2":  # if the user selects 2
            check_3 = 0  # making a variable so that the loop initiates
            while check_3 != -2:  # making a loop that will continue till the user inputs -2
                print("Enter the Serial number of the Record you want to View, select -1 to view all, select"
                      " -2 to Exit")
                # telling the user about the available options
                check_3 = eval(input("Enter your choice :"))  # taking input from the user
                if check_3 == -1:  # if the user selects -1
                    for num in range(1, len(arms_model_name_list)):  # unpacking the list from index 1 to max
                        arms_view_record(num)  # printing all available records
                elif check_3 == -2:  # if the user inputs -2
                    break  # ending the loop
                elif 0 < check_3:  # if the user inputs a serial number
                    arms_view_record(check_3)  # printing the record at the requested serial no
                else:  # if the user inputs an unavailable option
                    print("Please select a proper choice")  # telling the user that this option is not available
        elif check_1 == "3":  # if the user inputs 3
            while True:  # making an infinite loop
                num = eval(input("Enter the serial no of the record you want to update :"))
                # asking the user for the serial no of the record he wants to update
                if 0 < num:  # making sure that the serial no is greater than 0
                    arms_update_record(num)  # calling the update record function
                    break  # ending the loop
                else:  # if the entered serial number is less than or equal to 0
                    print("Serial no must ne an integer greater than 0")
                    # telling the user that serial no must be greater than 0
        elif check_1 == "4":  # if the user enters 4
            arms_search_record()  # calling the search function
        elif check_1 == "5":  # if the user enters 5
            break  # ending the loop
        else:   # if the user enters an option other than those available
            print("Please Select a proper choice")   # telling the user to enter a proper choice


customer_name_list = ["-1"]  # creating a list for customer names
customer_country_list = ["-1"]  # creating a list for customer countries
customer_license_no_list = ["-1"]  # creating a list for customer license nos
customer_contact_no_list = ["-1"]  # creating a list for customer contact numbers


def customer_add_record():  # creating function for adding records
    customer_name_list.append(input("Enter the customer name  :"))
    # taking customer name as input and appending to list
    customer_country_list.append(input("Enter the  customer Country name  :"))
    # taking customer country as input and appending to list
    customer_license_no_list.append(input("Enter the license no of customer :"))
    # taking customer license no as input and appending to list
    customer_contact_no_list.append(input("Enter the Contact No  :"))
    # taking customer contact no as input and appending to list


def customer_view_record(sno):  # creating function for viewing records
    if sno <= len(customer_name_list):  # making sure that the serial no is in the list limit
        print("Serial No           :", sno)  # printing the serial no of the record
        print("customer Name         :", customer_name_list[sno])  # printing the customer name of the record
        print("customer Country Name :", customer_country_list[sno])  # printing the customer Country name of the record
        print("license no of customer    :", customer_license_no_list[sno])
        # printing the customer license no of the record
        print("Contact No          :", customer_contact_no_list[sno])  # printing the customer Contact No of the record
        print("------------------------------------------------------------")  # separating different outputs
    else:  # if record is not available
        print("Record not available")  # printing "record not available" to tell the user


def customer_update_record(sno):  # creating function for updating records
    if sno <= len(customer_name_list):  # making sure that the serial no is in the list limit
        customer_name_list[sno] = input("Enter the customer name  :")
        # taking customer name as input and assigning in the list at the given serial no
        customer_country_list[sno] = input("Enter the  customer Country name  :")
        # taking customer country as input and  assigning in the list at the given serial no
        customer_license_no_list[sno] = input("Enter the license no of customer :")
        # taking customer license no as input and  assigning in the list at the given serial no
        customer_contact_no_list[sno] = input("Enter the Contact No  :")
        # taking customer contact no as input and assigning in the list at the given serial no
        print("Updated record:")  # making a heading of the updated record
        customer_view_record(sno)  # printing the updated record
    else:  # if record is not available
        print("Record with this serial number is not available")  # telling the user that this record is not available


def customer_search_record():  # creating function for searching records
    choice = 1  # making a variable so that loop may start
    while choice != 5:  # making a loop that will continue till user enters 5
        print("Enter the perimeter you want to use to search:\n1 = customer name\n2 = customer Country name\n"
              "3 = license no of customer\n4 = Contact No\n5 = Exit")  # printing the available searching options
        choice = input("Enter your choice :")  # taking the choice of the user as input
        if choice == "1":  # if the user inputs 1 searching using customer name
            key = input("Enter the name of the customer you want to find :")
            # taking an input for name of the customer the user wants to find
            if key in customer_name_list:  # checking if the required record is available
                for index in range(1, len(customer_name_list)):  # making a loop to scan every entity in the list
                    if customer_name_list[index] == key:  # if a record is found ..
                        customer_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "2":  # if the user inputs 2 searching using customer country
            key = input("Enter the Country name of the customer you want to find :")
            # taking an input for country of the customer the user wants to find
            if key in customer_country_list:  # checking if the required record is available
                for index in range(1, len(customer_country_list)):  # making a loop to scan every entity in the list
                    if customer_country_list[index] == key:
                        customer_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "3":   # if the user inputs 3  searching using customer lisense_no
            key = input("Enter the license_no of the customer you want to find :")
            # taking an input for license no of the customer the user wants to find
            if key in customer_license_no_list:  # checking if the required record is available
                for index in range(1, len(customer_license_no_list)):  # making a loop to scan every entity in the list
                    if customer_license_no_list[index] == key:  # if a record is found ..
                        customer_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "4":   # if the user inputs 4 searching using customer contact no
            key = input("Enter rhe Contact No of the customer you want to find :")
            # taking an input for Contact No of the customer the user wants to find
            if key in customer_contact_no_list:  # checking if the required record is available
                for index in range(1, len(customer_contact_no_list)):  # making a loop to scan every entity in the list
                    if customer_contact_no_list[index] == key:  # if a record is found ..
                        customer_view_record(index)   # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "5":  # if the user inputs 5
            break  # ending the loop
        else:  # if the user inputs an unavailable choice
            print("Select a proper choice")  # telling the user tto enter a proper choice


def customer_main_menu():  # creating function for main menu
    check_1 = 0  # making a variable so that the loop initiates
    while check_1 != "5":  # making a loop that will continue till the user inputs 5
        print("Welcome to Arms Customer Management System!!!")  # Welcome message
        print("What do you want to do\n1 = Add record\n2 = View Record\n3 = Update Record\n4 = Search Record\n5 = Exit")
        # telling the user about the available options
        check_1 = input("Enter your choice number :")  # taking input from the user
        if check_1 == "1":  # if the user selects 1
            check_2 = "Y"  # making a variable so that the loop initiates
            while check_2 == "Y":  # making a loop that will continue till the user inputs something other than Y
                customer_add_record()  # calling the add record function
                check_2 = input("If you want to add another record, enter Y :")
                # asking the user if he wants to enter another record
        elif check_1 == "2":  # if the user selects 2
            check_3 = 0  # making a variable so that the loop initiates
            while check_3 != -2:  # making a loop that will continue till the user inputs -2
                print("Enter the Serial number of the Record you want to View, select -1 to view all, select"
                      " -2 to Exit")
                # telling the user about the available options
                check_3 = eval(input("Enter your choice :"))  # taking input from the user
                if check_3 == -1:  # if the user selects -1
                    for num in range(1, len(customer_name_list)):  # unpacking the list from index 1 to max
                        customer_view_record(num)  # printing all available records
                elif check_3 == -2:  # if the user inputs -2
                    break  # ending the loop
                elif 0 < check_3:  # if the user inputs a serial number
                    customer_view_record(check_3)  # printing the record at the requested serial no
                else:  # if the user inputs an unavailable option
                    print("Please select a proper choice")  # telling the user that this option is not available
        elif check_1 == "3":  # if the user inputs 3
            while True:  # making an infinite loop
                num = eval(input("Enter the serial no of the record you want to update :"))
                # asking the user for the serial no of the record he wants to update
                if 0 < num:  # making sure that the serial no is greater than 0
                    customer_update_record(num)  # calling the update record function
                    break  # ending the loop
                else:  # if the entered serial number is less than or equal to 0
                    print("Serial no must ne an integer greater than 0")
                    # telling the user that serial no must be greater than 0
        elif check_1 == "4":  # if the user enters 4
            customer_search_record()  # calling the search function
        elif check_1 == "5":  # if the user enters 5
            break  # ending the loop
        else:   # if the user enters an option other than those available
            print("Please Select a proper choice")   # telling the user to enter a proper choice


def customer_main():  # creating function for main program
    choice = input("Press Y to enter menu or any other key to exit :")
    # asking the user if he wants to enter the main menu
    if choice == "Y":  # if the user inputs Y
        customer_main_menu()  # calling the main menu function
    else:  # if the ser enters something other than Y
        print("-------------Program terminated here-----------------")
        # telling the user that the program is terminated


dealer_name_list = ["-1"]  # creating a list for dealer names
dealer_country_list = ["-1"]  # creating a list for dealer countries
dealer_rating_list = ["-1"]  # creating a list for dealer ratings
dealer_contact_no_list = ["-1"]  # creating a list for dealer contact numbers


def dealer_add_record():  # creating function for adding records
    dealer_name_list.append(input("Enter the Dealer name  :"))
    # taking dealer name as input and appending to list
    dealer_country_list.append(input("Enter the  Dealer Country name  :"))
    # taking dealer country as input and appending to list
    dealer_rating_list.append(input("Enter the Rating of Dealer :"))
    # taking dealer rating as input and appending to list
    dealer_contact_no_list.append(input("Enter the Contact No  :"))
    # taking dealer contact no as input and appending to list


def dealer_view_record(sno):  # creating function for viewing records
    if sno <= len(dealer_name_list):  # making sure that the serial no is in the list limit
        print("Serial No           :", sno)  # printing the serial no of the record
        print("Dealer Name         :", dealer_name_list[sno])  # printing the dealer name of the record
        print("Dealer Country Name :", dealer_country_list[sno])  # printing the dealer Country name of the record
        print("Rating of Dealer    :", dealer_rating_list[sno])  # printing the dealer Rating of the record
        print("Contact No          :", dealer_contact_no_list[sno])  # printing the dealer Contact No of the record
        print("------------------------------------------------------------")  # separating different outputs
    else:  # if record is not available
        print("Record not available")  # printing "record not available" to tell the user


def dealer_update_record(sno):  # creating function for updating records
    if sno <= len(dealer_name_list):  # making sure that the serial no is in the list limit
        dealer_name_list[sno] = input("Enter the Dealer name  :")
        # taking dealer name as input and assigning in the list at the given serial no
        dealer_country_list[sno] = input("Enter the  Dealer Country name  :")
        # taking dealer country as input and  assigning in the list at the given serial no
        dealer_rating_list[sno] = input("Enter the Rating of Dealer :")
        # taking dealer rating as input and  assigning in the list at the given serial no
        dealer_contact_no_list[sno] = input("Enter the Contact No  :")
        # taking dealer contact no as input and assigning in the list at the given serial no
        print("Updated record:")  # making a heading of the updated record
        dealer_view_record(sno)  # printing the updated record
    else:  # if record is not available
        print("Record with this serial number is not available")  # telling the user that this record is not available


def dealer_search_record():  # creating function for searching records
    choice = 1  # making a variable so that loop may start
    while choice != 5:  # making a loop that will continue till user enters 5
        print("Enter the perimeter you want to use to search:\n1 = Dealer name\n2 = Dealer Country name\n"
              "3 = Rating of Dealer\n4 = Contact No\n5 = Exit")  # printing the available searching options
        choice = input("Enter your choice :")  # taking the choice of the user as input
        if choice == "1":  # if the user inputs 1 searching using dealer name
            key = input("Enter the name of the dealer you want to find :")
            # taking an input for name of the dealer the user wants to find
            if key in dealer_name_list:  # checking if the required record is available
                for index in range(1, len(dealer_name_list)):  # making a loop to scan every entity in the list
                    if dealer_name_list[index] == key:  # if a record is found ..
                        dealer_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "2":  # if the user inputs 2 searching using dealer country
            key = input("Enter the Country name of the dealer you want to find :")
            # taking an input for country of the dealer the user wants to find
            if key in dealer_country_list:  # checking if the required record is available
                for index in range(1, len(dealer_country_list)):  # making a loop to scan every entity in the list
                    if dealer_country_list[index] == key:
                        dealer_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "3":   # if the user inputs 3  searching using dealer rating
            key = input("Enter the Rating of the dealer you want to find :")
            # taking an input for Rating of the dealer the user wants to find
            if key in dealer_rating_list:  # checking if the required record is available
                for index in range(1, len(dealer_rating_list)):  # making a loop to scan every entity in the list
                    if dealer_rating_list[index] == key:  # if a record is found ..
                        dealer_view_record(index)  # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "4":   # if the user inputs 4 searching using dealer contact no
            key = input("Enter rhe Contact No of the dealer you want to find :")
            # taking an input for Contact No of the dealer the user wants to find
            if key in dealer_contact_no_list:  # checking if the required record is available
                for index in range(1, len(dealer_contact_no_list)):  # making a loop to scan every entity in the list
                    if dealer_contact_no_list[index] == key:  # if a record is found ..
                        dealer_view_record(index)   # print the record
            else:  # if record is not available
                print("No Record Found")  # telling the user that no record was found
        elif choice == "5":  # if the user inputs 5
            break  # ending the loop
        else:  # if the user inputs an unavailable choice
            print("Select a proper choice")  # telling the user tto enter a proper choice


def dealer_main_menu():  # creating function for main menu
    check_1 = 0  # making a variable so that the loop initiates
    while check_1 != "5":  # making a loop that will continue till the user inputs 5
        print("Welcome to Arms Dealers Management System!!!")  # Welcome message
        print("What do you want to do\n1 = Add record\n2 = View Record\n3 = Update Record\n4 = Search Record\n5 = Exit")
        # telling the user about the available options
        check_1 = input("Enter your choice number :")  # taking input from the user
        if check_1 == "1":  # if the user selects 1
            check_2 = "Y"  # making a variable so that the loop initiates
            while check_2 == "Y":  # making a loop that will continue till the user inputs something other than Y
                dealer_add_record()  # calling the add record function
                check_2 = input("If you want to add another record, enter Y :")
                # asking the user if he wants to enter another record
        elif check_1 == "2":  # if the user selects 2
            check_3 = 0  # making a variable so that the loop initiates
            while check_3 != -2:  # making a loop that will continue till the user inputs -2
                print("Enter the Serial number of the Record you want to View, select -1 to view all, select"
                      " -2 to Exit")
                # telling the user about the available options
                check_3 = eval(input("Enter your choice :"))  # taking input from the user
                if check_3 == -1:  # if the user selects -1
                    for num in range(1, len(dealer_name_list)):  # unpacking the list from index 1 to max
                        dealer_view_record(num)  # printing all available records
                elif check_3 == -2:  # if the user inputs -2
                    break  # ending the loop
                elif 0 < check_3:  # if the user inputs a serial number
                    dealer_view_record(check_3)  # printing the record at the requested serial no
                else:  # if the user inputs an unavailable option
                    print("Please select a proper choice")  # telling the user that this option is not available
        elif check_1 == "3":  # if the user inputs 3
            while True:  # making an infinite loop
                num = eval(input("Enter the serial no of the record you want to update :"))
                # asking the user for the serial no of the record he wants to update
                if 0 < num:  # making sure that the serial no is greater than 0
                    dealer_update_record(num)  # calling the update record function
                    break  # ending the loop
                else:  # if the entered serial number is less than or equal to 0
                    print("Serial no must ne an integer greater than 0")
                    # telling the user that serial no must be greater than 0
        elif check_1 == "4":  # if the user enters 4
            dealer_search_record()  # calling the search function
        elif check_1 == "5":  # if the user enters 5
            break  # ending the loop
        else:   # if the user enters an option other than those available
            print("Please Select a proper choice")   # telling the user to enter a proper choice


assigning_customer_list = ["-1"]
assigning_dealer_list = ["-1"]
assigning_arms_list = ["-1"]
assigning_arms_quantity = ["-1"]


def arms_purchase_add_record():
    temp_customer_name = input("Enter Customer name: ")  # Entering customer name
    if temp_customer_name in customer_name_list:  # check if customer registered
        temp_dealer_name = input("Enter Dealer name: ")  # entering dealer name
        if temp_dealer_name in dealer_name_list:  # check if dealer registered
            temp_arms_name = input("Enter Arm Model name: ")  # entering arm model name
            if temp_arms_name in arms_model_name_list:  # check if arm registered
                temp_arm_index = arms_model_name_list.index(temp_arms_name)  # getting arm index in arm_model_name_list
                temp_quantity = eval(input("Enter the quantity of arm you want: "))  # entering dealer name
                arms_quantity_list[temp_arm_index] -= temp_quantity  # changing stock quantity of arm
                assigning_customer_list.append(temp_customer_name)  # appending customer record in a list
                assigning_dealer_list.append(temp_dealer_name)  # appending dealer record in a list
                assigning_arms_list.append(temp_arms_name)  # appending arm record in a list
                assigning_arms_quantity.append(temp_quantity)  # appending arm purchase quantity record in a list
                print("Arms sold Successfully")  # printing Arms sold Successfully
            else:
                print("Arm not registered")  # IF arm not registered
        else:
            print("Dealer not registered")  # IF Dealer not registered
    else:
        print("Customer not registered")  # IF customer not registered


def arms_purchase_view_record():
    for i in range(1, (len(assigning_arms_list))):  # Loop to print all purchase records
        print("Name = ", assigning_customer_list[i], "--- Dealer name = ", assigning_dealer_list[i],
              "--- Arm Model Name = ",
              assigning_arms_list[i], "--- Quantity Bought = ", assigning_arms_quantity[i])
        # printing all purchased arms records


def arms_purchase_main_menu():  # creating function for main menu
    check_1 = 0  # making a variable so that the loop initiates
    while check_1 != "5":  # making a loop that will continue till the user inputs 5
        print("Welcome to Arms Purchase Management System!!!")  # Welcome message
        print("What do you want to do\n1 = Add purchase Records \n2 = View Purchase Record \n3 = Exit")
        # telling the user about the available options
        check_1 = input("Enter your choice number :")  # taking input from the user
        if check_1 == "1":  # if the user selects 1
            check_2 = "Y"  # making a variable so that the loop initiates
            while check_2 == "Y":  # making a loop that will continue till the user inputs something other than Y
                arms_purchase_add_record()  # calling the add arms purchase record function
                check_2 = input("If you want to add another purchase record, enter Y :")
                # asking the user if he wants to enter another record
        elif check_1 == "2":  # if the user selects 2
            arms_purchase_view_record()
        elif check_1 == "3":  # if the user inputs 3
            break
        else:
            print("Please Select a proper choice")   # telling the user to enter a proper choice


def main_menu():
    check_1 = 0  # making a variable so that the loop initiates
    while check_1 != 5:
        print("Welcome to Arms Management System!!!")  # Welcome message
        check_1 = input("1: Weapons Management System "
                        "\n2: Dealers Management System "
                        "\n3: Customer Management System "
                        "\n4: Arms Purchase Management System "
                        "\n5: Exit" "\n Enter What do you want to do: ")

        if check_1 == "1":
            arms_main_menu()  # To call Arms Model Management system
        elif check_1 == "2":  # Selection for calling function
            dealer_main_menu()  # To call Arms Model Management system
        elif check_1 == "3":  # Selection for calling function
            customer_main_menu()  # To call Arms Model Management system
        elif check_1 == "4":  # Selection for calling function
            arms_purchase_main_menu()  # To call Arms Model Management system
        elif check_1 == "5":  # Selection for calling function
            break  # To break loop
        else:
            print("Please Enter A Proper Choice!!!")  # For incorrect Choice

    print("-------------Program terminated here-----------------")  # print Program Terminates here


def main():  # creating function for main program
    choice = input("Press Y to enter menu or any other key to exit :")
    # asking the user if he wants to enter the main menu
    if choice == "Y":  # if the user inputs Y
        main_menu()  # calling the main menu function
    else:  # if the ser enters something other than Y
        print("-------------Program terminated here-----------------")
        # telling the user that the program is terminated


main()


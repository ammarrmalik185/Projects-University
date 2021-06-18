# Assigning Default values
check_1 = "random string"
check_2 = "random string"
check_3 = "random string"
model_name_1 = model_name_2 = model_name_3 = model_name_4 = manufacturer_name_1 = manufacturer_name_2 \
    = manufacturer_name_3 = manufacturer_name_4 = price_1 = price_2 = price_3 = price_4 = caliber_1 = caliber_2 =\
    caliber_3 = caliber_4 = "Not Available"

# Main Loop
while check_1 != "4":
    print("What do you want to do\n1 = Add record\n2 = View Record\n3 = Search Record\n4 = Exit")
    check_1 = str(input("Enter your choice number :"))
    if check_1 == "1": # Add Data
        check_2 = "random string"
        while check_2 != "6":
            print("Enter the Serial number of the Record you want to Add/Edit, select 5 to input all, select 6 to Exit")
            check_2 = input("Enter your choice :")
            if check_2 == "1": # Add Data of First Gun
                model_name_1 = input("Enter the model name of Gun no 1 :")
                manufacturer_name_1 = input("Enter the  manufacturer name of Gun no 1 :")
                caliber_1 = input("Enter the caliber of Gun no 1 :")
                price_1 = input("Enter the price of Gun no 1 :")
            elif check_2 == "2": # Add Data of Second Gun
                model_name_2 = input("Enter the model name of Gun no 2 :")
                manufacturer_name_2 = input("Enter the  manufacturer name of Gun no 2 :")
                caliber_2 = input("Enter the caliber of Gun no 2 :")
                price_2 = input("Enter the price of Gun no 2 :")
            elif check_2 == "3": # Add Data of Third Gun
                model_name_3 = input("Enter the model name of Gun no 3 :")
                manufacturer_name_3 = input("Enter the  manufacturer name of Gun no 3 :")
                caliber_3 = input("Enter the caliber of Gun no 3 :")
                price_3 = input("Enter the price of Gun no 3 :")
            elif check_2 == "4": # Add Data of Fourth Gun
                model_name_4 = input("Enter the model name of Gun no 4 :")
                manufacturer_name_4 = input("Enter the  manufacturer name of Gun no 4 :")
                caliber_4 = input("Enter the caliber of Gun no 4 :")
                price_4 = input("Enter the price of Gun no 4 :")
            elif check_2 == "5": # Add Data of All Guns
                model_name_1 = input("Enter the model name of Gun no 1 :")
                manufacturer_name_1 = input("Enter the  manufacturer name of Gun no 1 :")
                caliber_1 = input("Enter the caliber of Gun no 1 :")
                price_1 = input("Enter the price of Gun no 1 :")
                print("--------------------------------------")
                model_name_2 = input("Enter the model name of Gun no 2 :")
                manufacturer_name_2 = input("Enter the  manufacturer name of Gun no 2 :")
                caliber_2 = input("Enter the caliber of Gun no 2 :")
                price_2 = input("Enter the price of Gun no 2 :")
                print("--------------------------------------")
                model_name_3 = input("Enter the model name of Gun no 3 :")
                manufacturer_name_3 = input("Enter the  manufacturer name of Gun no 3 :")
                caliber_3 = input("Enter the caliber of Gun no 3 :")
                price_3 = input("Enter the price of Gun no 3 :")
                print("--------------------------------------")
                model_name_4 = input("Enter the model name of Gun no 4 :")
                manufacturer_name_4 = input("Enter the  manufacturer name of Gun no 4 :")
                caliber_4 = input("Enter the caliber of Gun no 4 :")
                price_4 = input("Enter the price of Gun no 4 :")
                print("--------------------------------------")
            elif check_2 == "6": # Exit
                print("--------------------------------------")
            else:
                print("Please Select a Proper choice")
    elif check_1 == "2": # View Data
        check_3 = "random string"
        while check_3 != "6":
            print("Enter the Serial number of the Record you want to View, select 5 to view all, select 6 to Exit")
            check_3 = input("Enter your choice :")
            if check_3 == "1": # View Data of First Model
                print("Model Name        =" + model_name_1)
                print("Manufacturer Name =" + manufacturer_name_1)
                print("Caliber           =" + caliber_1)
                print("Price             =" + price_1)
            elif check_3 == "2": # View Data of Second Model
                print("Model Name        =" + model_name_2)
                print("Manufacturer Name =" + manufacturer_name_2)
                print("Caliber           =" + caliber_2)
                print("Price             =" + price_2)
            elif check_3 == "3": # View Data of Third Model
                print("Model Name        =" + model_name_3)
                print("Manufacturer Name =" + manufacturer_name_3)
                print("Caliber           =" + caliber_3)
                print("Price             =" + price_3)
            elif check_3 == "4": # View Data of Fourth Model
                print("Model Name        =" + model_name_4)
                print("Manufacturer Name =" + manufacturer_name_4)
                print("Caliber           =" + caliber_4)
                print("Price             =" + price_4)
            elif check_3 == "5": # View Data of All Models
                print("Model Name        =" + model_name_1)
                print("Manufacturer Name =" + manufacturer_name_1)
                print("Caliber           =" + caliber_1)
                print("Price             =" + price_1)
                print("--------------------------------------")
                print("Model Name        =" + model_name_2)
                print("Manufacturer Name =" + manufacturer_name_2)
                print("Caliber           =" + caliber_2)
                print("Price             =" + price_2)
                print("--------------------------------------")
                print("Model Name        =" + model_name_3)
                print("Manufacturer Name =" + manufacturer_name_3)
                print("Caliber           =" + caliber_3)
                print("Price             =" + price_3)
                print("--------------------------------------")
                print("Model Name        =" + model_name_4)
                print("Manufacturer Name =" + manufacturer_name_4)
                print("Caliber           =" + caliber_4)
                print("Price             =" + price_4)
                print("--------------------------------------")
            elif check_3 == "6": # Exit
                print("--------------------------------------")
            else:
                print("Please Select a Proper choice")
    elif check_1 == "3": # Search Data
        check_4 = "String"
        while check_4 != "5":
            check_5 = 0
            print("Enter the perimeter you want to use to search:\n1 = Model name\n2 = Manufacturer name\n3 = Caliber\n"
                  "4 = Price\n5 = Exit")
            check_4 = input("Enter your choice :")
            if check_4 == "1": # Searching using Model
                key = input("Enter rhe model name of the gun you want to find :")
                if key == model_name_1:
                    print("Serial no         =" + str(1))
                    print("Model Name        =" + model_name_1)
                    print("Manufacturer Name =" + manufacturer_name_1)
                    print("Caliber           =" + caliber_1)
                    print("Price             =" + price_1)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == model_name_2:
                    print("Serial no         =" + str(2))
                    print("Model Name        =" + model_name_2)
                    print("Manufacturer Name =" + manufacturer_name_2)
                    print("Caliber           =" + caliber_2)
                    print("Price             =" + price_2)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == model_name_3:
                    print("Serial no         =" + str(3))
                    print("Model Name        =" + model_name_3)
                    print("Manufacturer Name =" + manufacturer_name_3)
                    print("Caliber           =" + caliber_3)
                    print("Price             =" + price_3)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == model_name_4:
                    print("Serial no         =" + str(4))
                    print("Model Name        =" + model_name_4)
                    print("Manufacturer Name =" + manufacturer_name_4)
                    print("Caliber           =" + caliber_4)
                    print("Price             =" + price_4)
                    print("--------------------------------------------")
                    check_5 = 1
                if check_5 == 0:
                    print("Record not found")
            elif check_4 == "2": # Searching using Manufucture
                key = input("Enter rhe manufacturer name of the gun you want to find :")
                if key == manufacturer_name_1:
                    print("Serial no         =" + str(1))
                    print("Model Name        =" + model_name_1)
                    print("Manufacturer Name =" + manufacturer_name_1)
                    print("Caliber           =" + caliber_1)
                    print("Price             =" + price_1)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == manufacturer_name_2:
                    print("Serial no         =" + str(2))
                    print("Model Name        =" + model_name_2)
                    print("Manufacturer Name =" + manufacturer_name_2)
                    print("Caliber           =" + caliber_2)
                    print("Price             =" + price_2)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == manufacturer_name_3:
                    print("Serial no         =" + str(3))
                    print("Model Name        =" + model_name_3)
                    print("Manufacturer Name =" + manufacturer_name_3)
                    print("Caliber           =" + caliber_3)
                    print("Price             =" + price_3)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == manufacturer_name_4:
                    print("Serial no         =" + str(4))
                    print("Model Name        =" + model_name_4)
                    print("Manufacturer Name =" + manufacturer_name_4)
                    print("Caliber           =" + caliber_4)
                    print("Price             =" + price_4)
                    print("--------------------------------------------")
                    check_5 = 1
                if check_5 == 0:
                    print("Record not found")
            elif check_4 == "3": # Searching using Caliber
                key = input("Enter rhe caliber of the gun you want to find :")
                if key == caliber_1:
                    print("Serial no         =" + str(1))
                    print("Model Name          =" + model_name_1)
                    print("Manufacturer Name =" + manufacturer_name_1)
                    print("Caliber           =" + caliber_1)
                    print("Price             =" + price_1)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == caliber_2:
                    print("Serial no         =" + str(2))
                    print("Model Name        =" + model_name_2)
                    print("Manufacturer Name =" + manufacturer_name_2)
                    print("Caliber           =" + caliber_2)
                    print("Price             =" + price_2)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == caliber_3:
                    print("Serial no         =" + str(3))
                    print("Model Name        =" + model_name_3)
                    print("Manufacturer Name =" + manufacturer_name_3)
                    print("Caliber           =" + caliber_3)
                    print("Price             =" + price_3)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == caliber_4:
                    print("Serial no         =" + str(4))
                    print("Model Name        =" + model_name_4)
                    print("Manufacturer Name =" + manufacturer_name_4)
                    print("Caliber           =" + caliber_4)
                    print("Price             =" + price_4)
                    print("--------------------------------------------")
                    check_5 = 1
                if check_5 == 0:
                    print("Record not found")
            elif check_4 == "4": # Searching using Price
                key = input("Enter rhe price of the gun you want to find :")
                if key == price_1:
                    print("Serial no         =" + str(1))
                    print("Model Name        =" + model_name_1)
                    print("Manufacturer Name =" + manufacturer_name_1)
                    print("Caliber           =" + caliber_1)
                    print("Price             =" + price_1)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == price_2:
                    print("Serial no         =" + str(2))
                    print("Model Name        =" + model_name_2)
                    print("Manufacturer Name =" + manufacturer_name_2)
                    print("Caliber           =" + caliber_2)
                    print("Price             =" + price_2)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == price_3:
                    print("Serial no         =" + str(3))
                    print("Model Name        =" + model_name_3)
                    print("Manufacturer Name =" + manufacturer_name_3)
                    print("Caliber           =" + caliber_3)
                    print("Price             =" + price_3)
                    print("--------------------------------------------")
                    check_5 = 1
                if key == price_4:
                    print("Serial no         =" + str(4))
                    print("Model Name        =" + model_name_4)
                    print("Manufacturer Name =" + manufacturer_name_4)
                    print("Caliber           =" + caliber_4)
                    print("Price             =" + price_4)
                    print("--------------------------------------------")
                    check_5 = 1
                if check_5 == 0:
                    print("Record not found")
            elif check_4 == "5":
                print("--------------------------------------")
            else:
                print("Please Select a proper choice")
    elif check_1 == "4": # Terminating Program
        print("----Program Terminated----")
    else: # check
        print("Please Select a proper choice")

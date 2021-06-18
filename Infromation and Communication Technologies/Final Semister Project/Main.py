import os
from extra_modules import arms_data_editor
from extra_modules import dealers_data_editor
from extra_modules import customer_data_editor
from extra_modules import sale_manager


def folder_creator():
    if not os.path.exists(r"Record Data\Arms Data"):
        os.makedirs(r"Record Data\Arms Data")
    if not os.path.exists(r"Record Data\Dealers Data"):
        os.makedirs(r"Record Data\Dealers Data")
    if not os.path.exists(r"Record Data\Customer Data"):
        os.makedirs(r"Record Data\Customer Data")
    if not os.path.exists(r"Record Data\Sale Data"):
        os.makedirs(r"Record Data\Sale Data")

    if not os.path.exists(r"Record Data\Arms Data\Records"):
        os.makedirs(r"Record Data\Arms Data\Records")
    if not os.path.exists(r"Record Data\Arms Data\Search Records"):
        os.makedirs(r"Record Data\Arms Data\Search Records")

    if not os.path.exists(r"Record Data\Dealers Data\Records"):
        os.makedirs(r"Record Data\Dealers Data\Records")
    if not os.path.exists(r"Record Data\Dealers Data\Search Records"):
        os.makedirs(r"Record Data\Dealers Data\Search Records")

    if not os.path.exists(r"Record Data\Customer Data\Records"):
        os.makedirs(r"Record Data\Customer Data\Records")
    if not os.path.exists(r"Record Data\Customer Data\Search Records"):
        os.makedirs(r"Record Data\Customer Data\Search Records")


def main_menu():
    folder_creator()
    while True:
        print("1 - Edit Arms Data\n2 - Edit Dealer Data\n3 - Edit Customer Data\n4 - Purchase Arms\n5 - Exit")
        choice = input("What do you want to do? :")
        if choice == "1":
            arms_data_editor.main()
        elif choice == "2":
            dealers_data_editor.main()
        elif choice == "3":
            customer_data_editor.main()
        elif choice == "4":
            pass
        elif choice == "5":
            break
        else:
            print("Option not available")

main_menu()

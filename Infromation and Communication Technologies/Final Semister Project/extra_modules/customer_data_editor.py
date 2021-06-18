import os


def main():
    while True:
        print("1 - Add New Customer\n2 - View Available Customer\n3 - Update Customer Record\n4 - Delete Record\n"
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
    pass


def view_record():
    file_save_path = r"Record Data\Arms Data"
    pass


def update_record():
    pass


def delete_record():
    pass


def search_record():
    pass


def record_availability_checker(sno):
    pass

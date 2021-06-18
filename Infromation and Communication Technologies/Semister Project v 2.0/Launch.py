from tkinter import *
import datetime
import side_file

record_path = r"C:\Users\ParadoX\PycharmProjects\Semister Project v 2.0"

window = Tk()
window.title("Arms Management System")

Frame1 = Frame(window)
Frame2 = Frame(window)

Frame1.grid(column=1, row=1)
Frame2.grid(column=2, row=1)


def print_1():
    print("ok")

def add_data_complete():
    try:
        var_add.run = False
    except NameError:
        pass
    var_add = side_file.AddDataFunction(Frame2, record_path)


def view_data_complete():
    try:
        var_view.run = False
    except NameError:
        pass
    var_view = side_file.ViewDataFunction(Frame2, record_path)

x = 0
frame_1_title = Label(Frame1, text="Select an option")
frame_1_title.grid(column=0, row=0)
add_data_button = Radiobutton(Frame1, text="Add Data", command=add_data_complete, variable=x, value=1, tristatevalue=0)
add_data_button.grid(column=0, row = 1, sticky="W")
view_data_button = Radiobutton(Frame1, text="View Data", command=view_data_complete, variable=x, value=2, tristatevalue=0)
view_data_button.grid(column=0, row = 2, sticky="W")
update_data_button = Radiobutton(Frame1, text="Update Data", command=print_1, variable=x, value=3, tristatevalue=0)
update_data_button.grid(column=0, row = 3, sticky="W")
search_data_button = Radiobutton(Frame1, text="Search Data", command=print_1, variable=x, value=4, tristatevalue=0)
search_data_button.grid(column=0, row = 4, sticky="W")
delete_data_button = Radiobutton(Frame1, text="Delete Data", command=print_1, variable=x, value=5, tristatevalue=0)
delete_data_button.grid(column=0, row = 5, sticky="W")

window.mainloop()

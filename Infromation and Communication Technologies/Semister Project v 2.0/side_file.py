import os
from tkinter import *

max_range = 90


def enter_data(data_list, path):
    data_1 = "Dealer Name        :" + data_list[0] + "\n" +\
             "Dealer country     :" + data_list[1] + "\n" + \
             "Dealer rating      :" + data_list[2] + "\n" + \
             "Dealer contact no  :" + data_list[3]
    data_2 = "(" + data_list[0].lower() + ")\n" + \
             "(" + data_list[1].lower() + ")\n" + \
             "(" + data_list[2].lower() + ")\n" + \
             "(" + data_list[3].lower() + ")"
    if not os.path.exists(path + "\Records\\"):
        os.makedirs(path + "\Records\\")
    if not os.path.exists(path + "\Search Records\\"):
        os.makedirs(path + "\Search Records\\")
    for sno in range(1, max_range):
        name_1 = path + r"\Records\Record No - " + str(sno) + ".txt"
        name_2 = path + r"\Search Records\Record No - " + str(sno) + ".txt"
        if not os.path.isfile(name_1):
            file1 = open(name_1, "w")
            file2 = open(name_2, "w")
            file1.write(data_1)
            file2.write(data_2)
            break


def give_data(sno, path):
    name = path + r"\Search Records\Record No - " + str(sno) + ".txt"
    file = open(name, "rt")
    text = file.readlines()
    info_list = [sno]
    for line in text:
        use_full = line[1:-1]
        info_list.append(use_full)
    return info_list


def search_data(key, value, path):
    if key == 1:
        for sno in range(1, max_range):
            name = path + r"\Search Records\Record No - " + str(sno) + ".txt"
            file = open(name, "rt")
            text = file.readlines()
            if value in text[0]:
                return sno

    if key == 2:
        for sno in range(1, max_range):
            name = path + r"\Search Records\Record No - " + str(sno) + ".txt"
            file = open(name, "rt")
            text = file.readlines()
            if value in text[1]:
                return sno

    if key == 3:
        for sno in range(1, max_range):
            name = path + r"\Search Records\Record No - " + str(sno) + ".txt"
            file = open(name, "rt")
            text = file.readlines()
            if value in text[2]:
                return sno

    if key == 4:
        for sno in range(1, max_range):
            name = path + r"\Search Records\Record No - " + str(sno) + ".txt"
            file = open(name, "rt")
            text = file.readlines()
            if value in text[3]:
                return sno


class AddDataFunction:
    def __init__(self, frame, path):
        self.run = True

        self.path = path
        self.frame = frame

        if self.run:
            self.dealer_name_label = Label(frame, text="Dealer Name :")
            self.dealer_name_entry = Entry(frame)
            self.dealer_country_label = Label(frame, text="Dealer Country :")
            self.dealer_country_entry = Entry(frame)
            self.dealer_rating_label = Label(frame, text="Dealer Rating :")
            self.dealer_rating_entry = Entry(frame)
            self.dealer_contact_label = Label(frame, text="Dealer Contact no :")
            self.dealer_contact_entry = Entry(frame)

            self.dealer_name_label.grid(column=1, row=1, sticky="E")
            self.dealer_name_entry.grid(column=2, row=1)
            self.dealer_country_label.grid(column=1, row=2, sticky="E")
            self.dealer_country_entry.grid(column=2, row=2)
            self.dealer_rating_label.grid(column=1, row=3, sticky="E")
            self.dealer_rating_entry.grid(column=2, row=3)
            self.dealer_contact_label.grid(column=1, row=4, sticky="E")
            self.dealer_contact_entry.grid(column=2, row=4)

            self.submit_button = Button(frame, command=self.get_add_data, text="Submit")
            self.submit_button.grid(columnspan=2, row=5)

    def please_enter_data(self, frame, choice):
        if choice == "add":
            text = Label(frame, text="Please fill all the fields", fg="red")
            text.grid(columnspan=2, row=6)
        else:
            text = Label(frame, text="       Record Added       ", fg="green")
            text.grid(columnspan=2, row=6)
        
    def get_add_data(self):
        data_1 = self.dealer_name_entry.get()
        data_2 = self.dealer_country_entry.get()
        data_3 = self.dealer_rating_entry.get()
        data_4 = self.dealer_contact_entry.get()
        data_list = [data_1, data_2, data_3, data_4]
        check = True
        for lol in data_list:
            if lol == "":
                check = False
                break
        if check:
            enter_data(data_list, self.path)
            self.please_enter_data(self.frame, "remove")
        else:
            self.please_enter_data(self.frame, "add")


class ViewDataFunction:
    def __init__(self, frame, path):
        self.run = True

        self.path = path
        self.frame = frame

        if self.run:
            self.label_flash = Label(frame, text="        ")
            self.sno_label = Label(frame, text="Enter the serial no of the data you want ot view:")
            self.sno_entry = Entry(frame)
            submit_button = Button(frame, text="Submit", command=self.get_view_data)

            self.sno_label.grid(column=1, row=1, sticky="E")
            self.sno_entry.grid(column=2, row=1)
            submit_button.grid(columnspan=2, row=2)

    def get_view_data(self):
        sno = int(self.sno_entry.get())
        data = give_data(sno, self.path)
        view_data_1 = "Serial no       :" + "        \n" +\
                      "Dealer Name       :" + "        \n" +\
                      "Dealer Country    :" + "        \n" +\
                      "Dealer Rating     :" + "        \n" +\
                      "Dealer Contact no :" + "           "
        view_data_2 = str(sno) + "\n" + str(data[1]) + "\n" + str(data[2])+ "\n" + str(data[3]) + "\n"+ str(data[4])
        self.view_data(self.frame, view_data_1, view_data_2)

    def view_data(self, frame, data_text, data_text_2):

        text = Label(frame, text=data_text)
        text_2 = Label(frame, text=data_text_2)
        text.grid(column=1, row=3, sticky="E")
        text_2.grid(column=2, row=3)

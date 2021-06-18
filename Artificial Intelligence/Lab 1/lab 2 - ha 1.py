list1 = []
while True:
    max_range = input("Enter numbers for list 1 (enter E to stop) : ")
    if max_range == "E":
        break
    else:
        try:
            max_range_2 = int(eval(max_range))
            list1.append(max_range_2)
        except NameError:
            print("only numbers allowed")
            continue

list2 = []
while True:
    max_range = input("Enter numbers for list 2 (enter E to stop) : ")
    if max_range == "E":
        break
    else:
        try:
            max_range_2 = int(eval(max_range))
            list2.append(max_range_2)
        except NameError:
            continue


list3 = list1 + list2
list3.sort()

print(list3)





















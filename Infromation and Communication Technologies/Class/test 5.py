st = []
confirm = "Y"
while confirm == "Y":
    confirm =input("Enter Y to continue :")
    if confirm == "Y":
        while True:
            check = True
            reg = input('Enter Reg no :')
            for a in range(0, len(st),4):
                if st[a] == reg:
                    check = False
            if check:
                break
            else:
                print("That Reg no is already entered")
        st.append(reg)
        st.append(input('Enter Name :'))
        st.append(input('Enter City Name :'))
        st.append(input('Enter Marks :'))

print("Reg\t\tName\t\tCity\t\tMarks")
for i  in range(0, len(st), 4):
    print(st[i], "\t\t",st[i+1], "\t\t", st[i+2], "\t\t", st[i+3])

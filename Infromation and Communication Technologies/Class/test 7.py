def greatest_num(list):
    num = 0
    for x in range(0, len(list)-1):
        if list[x] > list[x+1]:
            num = list[x]
        elif list[x] < list [x+1]:
            num = num
        else:
            num = list[x]
    return num

a = [12,4,5,12,10,13]

b = greatest_num(a)

print(b)
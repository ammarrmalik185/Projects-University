'''''''''
list = []
import random
for _ in range(100):
    list.append(random.randint(50,101))

list2 = []
for a in list:
    if a not in list2:
         list2.append(a)

print(list)
print(list2)
'''''''''''
'''''''''
import random
list1 = []
for _ in range(10):
    list1.append(random.randint(0,51))

list2 = []
list3 = []
for x in list1:
    if x < 25:
        list2.append(x)
    elif x > 25:
        list3.append(x)

print(list1)
print(list2)
print(list3)
'''''''''''
'''''''''
str1 = input("Enter the first string:")
str2 = input("Enter the second string:")

check1 = True
for x in str1:
    if x not in str2:
        check1 = False

check2 = True
for y in str2:
    if y not in str1:
        check2 = False

if check1 and check2:
    print("Is an anagram")
else :
    print("Is not an anagram")
'''''''''''

list = []
for _ in range(10):
    a = eval(input("Enter integers between 1 and 100 :"))
    list.append(a)
list_check = []
for _ in range(0, 101):
    list_check.append(0)
for b in list:
    for a in range(0,101):
        if a == b:
            list_check[b] += 1

for pos in range(0,101):
    if list_check[pos] != 0:
        if list_check[pos] == 1:
            print(pos , " occurs ", list_check[pos], " time")
        else:
            print(pos, " occurs ", list_check[pos], " times")

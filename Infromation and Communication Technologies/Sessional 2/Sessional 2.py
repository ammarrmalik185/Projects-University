import random
list1 = []
for _ in range(10):
    a = random.randint(0,100)
    list1.append(a)
prime_numbers = []
check = False
for number in list1:
    for div in range(2, number):
        if number % div == 0:
            prime_numbers.append(number)
            break

list2 = []
list3 = []
for prime_number in prime_numbers:
    if prime_number <= 50:
        list2.append(prime_number)
    elif 50 < prime_number < 100:
        list3.append(prime_number)

print(list1)
print(list2)
print(list3)
print(list2+list3)


s="Create a new string object from given object. If, encoding or errors is specified then, the object must expose " \
  "a data buffer?"

vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
punctuation_marks = ["." , ",", "?"]

vovel_count = 0
mark_count = 0
for num in range(0, len(s)):
    for vovel in vovels:
        if s[num] == vovel:
            vovel_count += 1
    for mark in punctuation_marks:
        if s[num] == mark:
            mark_count += 1
space_count = 1
for x in range(len(s)):
    if s[x] == " ":
        space_count += 1
print(space_count)
print(vovel_count)
print(mark_count)
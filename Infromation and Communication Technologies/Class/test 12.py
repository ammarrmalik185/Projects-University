str = input("Enter a sentence :")
set = set(str)
print("the number of unique characters is :",len(set))

wordcount = 1

for i in str:
    if i == " ":
        wordcount += 1

print("Number of words =", wordcount)

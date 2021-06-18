import PyDictionary

dictionary = PyDictionary.PyDictionary()
while True:
    key = input("Enter the word you want to search :")

    answer = dictionary.meaning(key)
    if answer == None:
        answer = "No meaning found"
        print(answer)
    else:
        print("----------------------------------------------------------------------------------------------"
              "---------------------------------")
        for a in answer:
            print(a , ":")
            count = 1
            for i in answer[a]:
                print(count, "-", i)
                count += 1
            print("----------------------------------------------------------------------------------------------"
                  "---------------------------------")

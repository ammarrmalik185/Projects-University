
#Info Collect
first_name = input ("Enter Your Name \n")
Class = input ("Enter Your Class \n")
Section = input ("Enter Your Section \n")
Semester = input ("Enter Your Semester Number \n")
number_of_subjects = eval(input ("Total Number of Subjects \n"))

#assigning Values
count=0
total_number = 0
total_credit_hour = 0
Interm_total_GPA = 0
total_persentage = 0
fw = open("Record.txt", "w")
str_name = str(first_name)
text = ("Name:" + str_name +  "\nClass:" + str(Class) + "-" + str(Section) + "\nSemester no " + str(Semester) + "\n\n")
fw.write(text)


#loop
while (count != number_of_subjects):
    count += 1
    count = str(count)
    Sub_number1 = eval(input ("Input Marks of Subject no " + count + " "))
    total_number2 = eval (input ("Total Numbers of Subject no " + count + " "))
    persentage = Sub_number1 / total_number2 * 100
    total_persentage += persentage

    if persentage >= 90:
        Sub_number = 4
    elif persentage >= 85:
        Sub_number = 3.7
    elif persentage >= 80:
        Sub_number = 3.3
    elif persentage >= 75:
        Sub_number = 3
    elif persentage >= 70:
        Sub_number = 2.7
    elif persentage < 70:
        Sub_number = 2
    Credit_Hour =eval (input ("Credit Hours of Subject no " + count + " "))
    total_number += Sub_number
    total_credit_hour += Credit_Hour
    GPA = Sub_number * Credit_Hour
    Interm_total_GPA += GPA
    fw.write("\nGPA of Subject no " + count + " = " + str(Sub_number) )
    count = int(count)
    avg_persentage = total_persentage / count

#End
Total_GPA = Interm_total_GPA / total_credit_hour
print ("Your GPA is " , Total_GPA )
fw.write("\n\nTotal Percentage is " + str(persentage) + "%" + "\nTotal GPA is " + str(Total_GPA) + "\n\n\n\n")






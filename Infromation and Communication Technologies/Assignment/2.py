name = input("Enter Employee's name :")
no_hr = eval(input("Enter Number of hours worked :"))
hr_pay = eval(input("Enter Hourly pay :"))
fed_tax = eval(input("Enter Federal tax withholding rate :"))
state_tax = eval(input("Enter State tax withholding rate :"))

gross_pay = hr_pay * no_hr
deductions_fed = gross_pay * fed_tax
deductions_state = gross_pay * state_tax
total_deductions = deductions_fed + deductions_state
net_pay = gross_pay - total_deductions

print("Employee's name :" , name)
print("Hours Worked :" , no_hr)
print("Pay Rate :" , hr_pay)
print("Gross Pay :" , gross_pay)
print("Deductions :")
print("\tFederal Withholding (", fed_tax*100 , "% ) :" , deductions_fed)
print("\tState Withholding (", state_tax*100 , "% ) :" , deductions_state)
print("Total Deductions :", total_deductions)
print("Net Pay : " , net_pay)

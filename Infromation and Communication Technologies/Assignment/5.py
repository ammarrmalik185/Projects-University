x = eval(input("Enter the x coordinate :"))
y = eval(input("Enter the y coordinate :"))
dis = (x**2 + y**2)**(1/2)
if dis > 10:
    print("Point (", x, ",", y, ") is not in the circle")
elif dis < 10:
    print("Point (", x, ",", y, ") is in the circle")
else:
    print("Point (", x, ",", y, ") is on the circle")
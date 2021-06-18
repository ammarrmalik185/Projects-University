import math

h = 0.001
increment = 0.001
current_pi = -math.pi

while True:

    lhs = round((math.sin(current_pi + h) - math.sin(current_pi)) / h, 3)
    rhs = round(math.cos(current_pi), 3)
    print(str(lhs) + " is approximately equal to " + str(rhs))

    current_pi += increment
    if current_pi >= math.pi:
        break























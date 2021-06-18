def analyse(n1, n2):
    if n1 > n2:
        max = n1
        min = n2
        equal = "none"
    elif n1 < n2:
        max = n2
        max = n1
        equal = "none"
    else:
        max = "none"
        min = "none"
        equal = n1
    return n1, n2, equal

for x, y in range(1,4),range(2,5):


import math

h = 0.001
rf = 3
x = []
pi = -round(math.pi, rf)
while True:
    x.append(pi)
    pi += h
    pi = round(pi, rf)
    print(pi)
    if pi >= round(math.pi, rf):
        break

for i in x:
    sinderx = round((math.sin(i+h)-math.sin(i))/h, rf)
    cosv = round(math.cos(i), rf)
    print('%s ≈ %s' % (cosv, sinderx))

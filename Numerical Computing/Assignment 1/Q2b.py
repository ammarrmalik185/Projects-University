from math import *
given_equation = "sin(x)+(5*x)-2"
round_figure = 100000000


def f(x):
    res = eval(given_equation)
    res = round(res * round_figure) / round_figure
    return res


def quad_sec_root(a, b):
    c = 0
    prev_c = 0
    for i in range(1, 11):
        print("-------- Iteration no: ", i, " --------")
        print("current root: ", c)
        print("current range: ", a, " - ", b)
        fa = f(a)
        fb = f(b)
        c = (a+b)/3
        c = round(c * round_figure) / round_figure
        fc = f(c)

        print("relative error: ", c - prev_c)
        prev_c = c

        if fc > 0:
            if fa > 0:
                a = c
            else:
                b = c
        else:
            if fa > 0:
                b = c
            else:
                a = c

        print("new root: ", c)
        print("new range: ", a, " - ", b)
    return c


print(quad_sec_root(-0.4, 0.4))

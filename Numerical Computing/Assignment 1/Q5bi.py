from math import *
given_equation = "(x**4)+(3*(x**3))-(15*(x**2))-(2*x)+9"
round_figure = 100000000


def f(x):
    res = eval(given_equation)
    res = round(res * round_figure) / round_figure
    return res


def custom_round(x):
    return round(x * round_figure) / round_figure


def bi_sec_root(a, b):
    c = 0
    prev_c = 0
    for i in range(1, 11):
        print("-------- Iteration no: ", i, " --------")
        print("current root: ", custom_round(c))
        print("current range: ", custom_round(a), " - ", custom_round(b))
        fa = f(a)
        fb = f(b)
        c = (a+b)/2
        fc = f(c)

        print("relative error: ", custom_round(c - prev_c))
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

        print("new root: ", custom_round(c))
        print("new root f: ", custom_round(fc))
        print("new range: ", custom_round(a), " - ", custom_round(b))
    return c


print("root: ", bi_sec_root(0, -1))

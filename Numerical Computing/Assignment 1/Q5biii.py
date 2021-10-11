given_equation = "(x**4)+(3*(x**3))-(15*(x**2))-(2*x)+9"
given_equation_der = "(4*(x**3))+(9*(x**2))-(30*(x))-2"


def f(x):
    res = eval(given_equation)
    return res


def f_(x):
    res = eval(given_equation_der)
    return res


def hybrid_root(a, b, tol):
    xi = 0

    for i in range(2):
        print("-------- Iteration no: ", i, " --------")
        print("current root: ", xi)
        print("current range: ", a, " - ", b, "\n")
        xi = (a + b) / 2
        if f_(xi) == 0 or abs(f_(xi)) < tol:
            break
        if f(a) * f(xi) < 0:
            b = xi
        else:
            a = xi

    i = 0
    while True:
        x = xi - (f(xi)/f_(xi))
        print("-------- Iteration no: ", i, " --------")
        print("current root: ", x)
        if abs(f(x)) < tol:
            break
        xi = x
        i += 1
    return xi


print(hybrid_root(0, -1, 10**-6))

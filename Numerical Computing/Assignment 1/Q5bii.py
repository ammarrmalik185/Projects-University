given_equation = "(x**4)+(3*(x**3))-(15*(x**2))-(2*x)+9"
given_equation_der = "(4*(x**3))+(9*(x**2))-(30*(x))-2"


def f(x):
    res = eval(given_equation)
    return res


def f_(x):
    res = eval(given_equation_der)
    return res


def newton_nelson(a, tol):
    xi = a
    for i in range(10):
        fx = f(xi)
        print("-------- Iteration no: ", i, " --------")
        print("x: ", xi)
        print("fx: ", fx)
        if abs(fx) <= tol or f_(xi) == 0:
            break
        xi = xi - (f(xi) / f_(xi))

    return xi


print(newton_nelson(1, 10**-6))

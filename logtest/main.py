# Python 3.x
# logarithm calculating test

import random

'''

This script is used to practise your ability of logarithm calculating.

It is mainly basic on 4 formula:

* \log _am+\log _an=\log _amn
* \log _am-\log _an=\log _a\frac{m}{n}
* \log _a\left( m \right) ^n=n\log _am
* \log _{a^b}m^n=\frac{n}{b}\log _am

It basicly generates some random numbers and they are
put together to form equations.

What's more, the output is in LaTex.

`\left( \left( \log _ax\pm \log _ay \right) \pm \log _az \right) \pm \left( \log _{a^b}m^n \right)`

'''

def generate_base():
    return str(random.randint(1, 20))

def generate_base_squared():
    return str(random.randint(1, 3))

def generate_antilogarithm():
    antilogarithms  = []
    for times in range(4):
        antilogarithms.append(str(random.randint(1, 20)))
    return antilogarithms

def generate_antilogarithm_squared():
    return str(random.randint(1, 3))

def plus_or_minus():
    cals = []
    cals_res = []
    for times in range(3):
        cals.append(random.randint(0, 1))
    for cal in cals:
        if cal == 0:
            cals_res.append("-")
        if cal == 1:
            cals_res.append("+")
    return cals_res

antilogarithms = generate_antilogarithm()
pom = plus_or_minus()

results = "\\left( \\left( \\log _{{{a}}}{x}{pom1} \\log _{{{a}}}{y} \\right) {pom2} \\log _{{{a}}}{z} \\right) {pom3} \\left( \\log _{{{a}^{b}}}{m}^{n} \\right)".format(a=generate_base(), x=antilogarithms[0], y=antilogarithms[1], z=antilogarithms[2], m=antilogarithms[3], b=generate_antilogarithm_squared(), n=generate_base_squared(), pom1=pom[0], pom2=pom[1], pom3=pom[2])

print(results)

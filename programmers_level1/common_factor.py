from math import gcd


def solution(n, m):
    answer = []
    a = gcd(n, m)
    b = (n * m) // a
    answer.append(a)
    answer.append(b)

    return answer

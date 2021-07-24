from math import sqrt


def solution(n):
    if n % sqrt(n) == 0:
        return (sqrt(n) + 1) ** 2
    return -1

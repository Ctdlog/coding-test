from itertools import cycle


def solution(a, b):
    days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    cycleDays = cycle(days)
    if a == 1 and b == 1:
        return "FRI"
    ((a - 1) * 31)
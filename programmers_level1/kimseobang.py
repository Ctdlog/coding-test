def solution(s):
    if len(s) == 4 or len(s) == 6:
        return s.isdecimal()
    return False

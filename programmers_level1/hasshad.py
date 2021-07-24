def solution(x):
    sum = 0
    for i in str(x):
        i = int(i)
        sum += i
    if x % sum == 0:
        return True
    return False

import pandas as pd


def solution(clothes):
    answer = 1
    df = pd.DataFrame(clothes)[1].value_counts()
    for count in df:
        answer *= count + 1

    return answer - 1

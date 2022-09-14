from collections import counter


def solution(participant, completion):
    answer = counter(participant) - counter(completion)

    return answer

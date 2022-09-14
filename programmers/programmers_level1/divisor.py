def solution(arr, divisor):
    answer = []
    for i in arr:
        if i % divisor == 0:
            answer.append(i)
    if not answer:
        answer = [-1]
    return sorted(answer)


print(solution([5, 9, 7, 10], 5))


def other_solution(arr, divisor):
    return sorted([i for i in arr if i & divisor == 0]) or [-1]


print(other_solution([5, 9, 7, 10], 5))

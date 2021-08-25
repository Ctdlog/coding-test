def solution(citations):
    citations = sorted(citations)
    length = len(citations)
    print(citations)
    for i in range(length):
        if citations[i] >= length - i:
            return length - i
    return 0


print(solution([3, 0, 6, 1, 5]))
# print(solution([3, 0, 6, 1, 2, 5]))
# print(solution([1, 2, 3, 7, 8, 9]))
# print(solution([1, 2, 3, 4]))

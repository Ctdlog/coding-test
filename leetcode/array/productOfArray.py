from functools import reduce


def solution(nums):
    answer = []
    product = 1
    for i in range(0, len(nums)):
        answer.append(product)
        product = product * nums[i]
    product = 1
    for i in range(len(nums) - 1, -1, -1):
        answer[i] = answer[i] * product
        product = product * nums[i]
    return answer


print(solution([1, 2, 3, 4]))
print(solution([-1, 1, 0, -3, 3]))

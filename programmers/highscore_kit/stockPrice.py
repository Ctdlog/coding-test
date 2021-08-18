from collections import deque


def solution(prices):
    queue = deque(prices)
    answer = []

    while len(queue):
        item = queue.popleft()
        count = 0
        for i in queue:
            count += 1
            if item > i:
                break
        answer.append(count)

    return answer


print(solution([1, 2, 3, 2, 3, 1]))

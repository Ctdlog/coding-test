from collections import deque


def solution(priorities, location):
    count = 0
    queue = deque([(v, i) for i, v in enumerate(priorities)])
    while True:
        left = queue.popleft()
        print(queue)
        if queue and max(queue)[0] > left[0]:
            queue.append(left)
        else:
            count += 1
            if left[1] == location:
                break

    return count


print(solution([2, 3, 4, 5, 1, 6], 4))

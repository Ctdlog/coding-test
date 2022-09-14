from collections import deque


def solution(bridge_length, weight, truck_weights):

    truck_weights = deque(truck_weights)

    on = deque([0 for _ in range(bridge_length)])
    on_weight = 0
    count = 0

    while on:
        count += 1
        on_weight -= on.popleft()
        if truck_weights:
            if on_weight + truck_weights[0] <= weight:
                left = truck_weights.popleft()
                on_weight += left
                on.append(left)
            else:
                on.append(0)

    return count

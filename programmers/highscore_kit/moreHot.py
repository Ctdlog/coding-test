import heapq


def solution(scoville, K):
    count = 0
    heapq.heapify(scoville)
    while True:

        if len(scoville) == 1 and scoville[0] < K:
            return -1

        first = heapq.heappop(scoville)
        if first >= K:
            return count
        second = heapq.heappop(scoville)
        mix = first + (second * 2)

        scoville.append(mix)
        count += 1


print(solution([1, 2, 3, 9, 10, 12], 7))

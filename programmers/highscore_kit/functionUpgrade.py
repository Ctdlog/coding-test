from math import ceil


def solution(progresses, speeds):

    complete = []
    for i in range(len(progresses)):
        days = ceil((100 - progresses[i]) / speeds[i])
        complete.append(days)

    count = 1
    answer = []
    for i in range(len(complete)):
        try:
            if complete[i] < complete[i + 1]:
                answer.append(count)
                count = 1
            else:
                complete[i + 1] = complete[i]
                count += 1
        except IndexError:
            answer.append(count)
    return answer


# def solution(progresses, speeds):
#     answer = []
#     days = 0
#     count = 0

#     while len(progresses) != 0:
#         if progresses[0] + days * speeds[0] >= 100:
#             progresses.pop(0)
#             speeds.pop(0)
#             count += 1
#         else:
#             if count > 0:
#                 answer.append(count)
#                 count = 0
#             days += 1

#     answer.append(count)

#     return answer


print(solution([93, 30, 55], [1, 30, 5]))
print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))

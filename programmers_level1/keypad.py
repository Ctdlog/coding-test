def solution(numbers, hand):
    answer = ""

    dic = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        "*": [3, 0],
        0: [3, 1],
        "#": [3, 2],
    }

    left = dic["*"]
    right = dic["#"]

    for i in numbers:
        now = dic[i]

        if i in [1, 4, 7]:
            answer += "L"
            left = now

        elif i in [3, 6, 9]:
            answer += "R"
            right = now

        else:
            left_dis = abs(now[0] - left[0]) + abs(now[1] - left[1])
            right_dis = abs(now[0] - right[0]) + abs(now[1] - right[1])

            if left_dis < right_dis:
                answer += "L"
                left = now
            elif left_dis > right_dis:
                answer += "R"
                right = now
            else:
                if hand == "left":
                    answer += "L"
                    left = now
                else:
                    answer += "R"
                    right = now

    return answer


print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))

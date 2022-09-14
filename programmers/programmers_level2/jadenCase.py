def solution(s):

    answer = ""
    s = s.split(" ")

    for i in s:
        a = i.capitalize()
        answer += a + " "

    return answer[:-1]


print(solution("3people unFollowed me"))
print(solution("for the last week"))

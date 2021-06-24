n, m = map(int, input().split())
a, b, d = map(int, input().split())

map = [list(map(int, input().split())) for _ in range(n)]

move_types = [(-1, 0), (0, 1), (1, 0), (0, -1)]
done = []

# 결과값
result = 1
turn_count = 0

while True:
    # 정해진 d에 따라 움직일 위치
    da = a + move_types[d][0]
    db = b + move_types[d][1]
    next = map[da][db]
    # 움직일 위치가 바다이거나 이미 갔던 위치 일 경우
    if next == 1 or [da, db] in done:
        # 왼쪽으로 방향 전환
        d -= 1
        # 4방향 모두 바다이거나 이미 갔더 위치 일 경우 종료
        turn_count += 1
        if turn_count == 4:
            break
        if d == -1:
            d = 3
        continue
    # 지나 온 위치를 리스트에 저장
    done.append([a, b])

    a, b = da, db
    turn_count = 0
    result += 1

print(result)

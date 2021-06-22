# 시작 위치
start = input()
x, y = start[1], start[0]

# 알파벳인 x를 숫자로 변환하기
for i in range(97, 105):
    if y == chr(i):
        y = i - int(ord("a"))

x, y = int(x), int(y)

# 이동할 수 있는 8가지 방향 정의
move_types = [[-2, 1], [-2, -1], [2, 1], [2, -1], [-1, 2], [-1, -2], [1, 2], [1, -2]]

# 이동 할 수 있는 방향 확인
count = 0
for move_type in move_types:
    nx = x + int(move_type[0])
    ny = y + int(move_type[1])
    if nx <= 0 or ny <= 0 or nx > 8 or ny > 8:
        continue
    print(nx, ny)
    count += 1

print(count)

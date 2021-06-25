n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))


def dfs(x, y):
    # # 주어진 범위를 벗어나면 돌아가기
    # if x <= -1 or x >= n or y <= -1 or y >= m:
    #     dfs(x, y)

    # 오른쪽, 아래쪽 순으로 먼저 DFS
    if graph[x + 1][y] == 1:
        x += 1
        dfs(x, y)
    elif graph[x][y + 1] == 1:
        y += 1
        dfs(x, y)
        return True
    if x == n and y == m:
        return False


dfs(1, 1)
result = 0
for i in range(n):
    for j in range(m):
        # 현재 위치에서 DFS 수행
        if dfs(i, j) == True:
            result += 1

print(result)

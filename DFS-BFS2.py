n, m = map(int, input().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))


def dfs(x, y, result):
    # 주어진 범위를 벗어나면 돌아가기
    if x <= -1 or x >= n or y <= -1 or y >= m:
        dfs(x, y, result)

    if x == n - 1 and y == m - 1:
        print(result)
        return False

    # 오른쪽, 아래쪽 순으로 먼저 DFS
    if graph[x + 1][y] == 1:
        x += 1
        result += 1
        dfs(x, y, result)
    elif graph[x][y + 1] == 1:
        y += 1
        result += 1
        dfs(x, y, result)
    elif graph[x - 1][y] == 1:
        x -= 1
        result += 1
        dfs(x, y, result)
    elif graph[x][y - 1] == 1:
        y -= 1
        result += 1
        dfs(x, y, result)


dfs(0, 0, 1)

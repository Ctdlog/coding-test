n, m = map(int, input().split())

lists = [list(map(int, input().split())) for _ in range(n)]
min_lists = []

for list in lists:
    list.sort()
    min_lists.append(list[0])
    min_lists.sort(reverse=True)

print(min_lists[0])

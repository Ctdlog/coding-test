n = int(input())

lists = []
ano_list = []

for i in range(n):
    lists.append(list(input().split()))
    ano_list.append([lists[i][1], lists[i][0]])

ano_list.sort()

for i in ano_list:
    print(i[1], end=" ")

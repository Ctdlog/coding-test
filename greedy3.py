n = int(input())
x_list = list(map(int, input().split()))
x_list.sort(reverse=True)

count = 0

for i in range(n):
    if n >= x_list[i]:
        n %= x_list[i]
        count += 1

print(count)

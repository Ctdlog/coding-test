n = int(input())
k = list(map(int, input().split()))


result = []
for i in range(n):
    for j in range(i + 2, n):
        result.append(k[i] + k[j])

max = max(result)
print(max)

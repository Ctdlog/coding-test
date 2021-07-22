# 갯수 N, 가치의 합 M 입력 받기
n, m = list(map(int, input().split()))
# 각각의 가치 입력 받기
worth = []
for i in range(n):
    worth.append(int(input()))
# 오름차순 정렬
worth.sort(reverse=True)

result = -1
for i in worth:
    if m % i != 0:
        worth.remove(i)
    else:
        result += (m // i) + 1

print(result)

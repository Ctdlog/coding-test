# 테스트 케이스 갯수 입력받기
t = int(input())
# 테스트 케이스 1개 반복할 때마다 결과 출력
for i in range(t):
    # N, M, Array 입력 받기
    n, m = list(map(int, input().split()))
    array = list(map(int, input().split()))
    # Array을 n으로 나눈 새로운 DP 만들기
    # dp = [array[i * n : (i + 1) * n] for i in range((len(array) + n - 1) // n)]
    array = [array[i * n : (i + 1) * n] for i in range((len(array) + n - 1) // n)]
    dp = []
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = array[i][j] + max(dp[i - 1][j - 1], dp[i][j - 1], dp[i + 1][j - 1])
    print(dp)

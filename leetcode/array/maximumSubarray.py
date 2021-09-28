def solution(nums):
    dp = [num for num in nums]
    for i in range(1, len(nums)):
        dp[i] = max(dp[i - 1] + nums[i], nums[i])

    return max(dp)


print(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
print(solution([-2, -1]))

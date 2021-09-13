def solution(nums):
    if len(nums) == 1:
        return False

    nums.sort()

    for i in range(1, len(nums)):
        if nums[i - 1] == nums[i]:
            return True
    return False


print(solution([1, 2, 3, 1]))

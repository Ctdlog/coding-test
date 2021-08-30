def solution(nums1, m, nums2, n):
    new_nums1 = nums1[:m]
    new_nums2 = nums2[:n]
    answer = new_nums1 + new_nums2
    answer.sort()
    for i in range(m + n):
        nums1[i] = answer[i]
    nums1 = nums1[: m + n]
    return nums1


print(solution([1, 2, 3, 0, 0, 0, 0], 3, [2, 5, 6], 3))

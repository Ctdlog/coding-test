class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        new_nums = []
        for i in nums:
            new_nums.append(i ** 2)
        return sorted(new_nums)

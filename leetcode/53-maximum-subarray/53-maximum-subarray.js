/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const DP = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		DP[i] = Math.max(DP[i - 1] + nums[i], nums[i]);
	}

	return Math.max(...DP);
};
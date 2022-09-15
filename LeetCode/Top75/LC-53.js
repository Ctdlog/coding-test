const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [1];
const nums3 = [5, 4, -1, 7, 8];

var maxSubArray = function (nums) {
	const DP = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		DP.push(Math.max(DP[i - 1] + nums[i], nums[i]));
	}

	return Math.max(...DP);
};

console.log(maxSubArray(nums1));

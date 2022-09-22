const nums1 = [2, 3, -2, 4];
const nums2 = [-2, 0, -1];
const nums3 = [-2, 3, -4];

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let currentMax = nums[0];
	let currentMin = nums[0];
	let result = nums[0];

	for (let i = 1; i < nums.length; i++) {
		let temp = currentMax;

		currentMax = Math.max(
			Math.max(currentMax * nums[i], currentMin * nums[i]),
			nums[i]
		);

		currentMin = Math.min(
			Math.min(temp * nums[i], currentMin * nums[i]),
			nums[i]
		);

		result = Math.max(currentMax, result);
	}

	return result;
};

console.log(maxProduct(nums3));

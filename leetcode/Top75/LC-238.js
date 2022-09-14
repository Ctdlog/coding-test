const nums1 = [1, 2, 3, 4];
const nums2 = [-1, 1, 0, -3, 3];
const nums3 = [0, 0];

const productExceptSelf = function (nums) {
	let result = [];

	let prefix = 1;
	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix;
		prefix *= nums[i];
	}

	let postfix = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		result[i] *= postfix;
		postfix *= nums[i];
	}

	return result;
};

console.log(productExceptSelf(nums1));

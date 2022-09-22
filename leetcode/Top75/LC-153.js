const nums1 = [3, 4, 5, 1, 2];
const nums2 = [4, 5, 6, 7, 0, 1, 2];
const nums3 = [11, 13, 15, 17];

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let left = 0;
	let right = nums.length - 1;

	if (nums.length === 1) {
		return nums[0];
	}

	if (nums[left] < nums[right]) {
		return nums[left];
	}

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		const leftValue = nums[left];
		const midValue = nums[mid];
		const leftOfMid = nums[mid - 1];
		const rightOfMid = nums[mid + 1];

		if (midValue > rightOfMid) {
			return rightOfMid;
		}

		if (leftOfMid > midValue) {
			return midValue;
		}

		if (midValue > leftValue) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
};

console.log(findMin(nums1));

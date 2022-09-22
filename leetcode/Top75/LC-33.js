const nums1 = [4, 5, 6, 7, 0, 1, 2],
	target1 = 0;
const nums2 = [4, 5, 6, 7, 0, 1, 2],
	target2 = 3;
const nums3 = [1],
	target3 = 0;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (nums[mid] === target) return mid;

		if (nums[left] <= nums[mid]) {
			if (target >= nums[left] && target < nums[mid]) {
				right = mid;
			} else {
				left = mid + 1;
			}
		} else {
			if (target > nums[mid] && target <= nums[right]) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
	}

	return nums[left] === target ? left : -1;
};

console.log(search(nums1, target1));
console.log(search(nums2, target2));
console.log(search(nums3, target3));

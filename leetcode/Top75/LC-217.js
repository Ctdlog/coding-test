const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containsDuplicate = function (nums) {
	const map = new Map();
	for (let num of nums) {
		if (map.has(num)) return true;
		else map.set(num);
	}

	return false;
};

console.log(containsDuplicate(nums3));

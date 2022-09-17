/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const ascending = (a, b) => a - b;
	const ascendingList = [...nums].sort(ascending);
	const min = Math.min(...nums);
	return min;
};
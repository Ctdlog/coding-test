/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let left = 0;
  let right = 0;



  while(left < nums.length) {
      if (nums[left] !== 0) {
          [nums[left], nums[right]] = [nums[right], nums[left]];
          right++
        }

        left++
    }
};
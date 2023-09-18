/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let left = 0;
    let right = nums.length - 1;

    nums.sort((a, b) => a - b);

    let answer = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (nums[left] + nums[right] === k) {
            answer++;
            left++
            right--
        } else if (sum < k) {
            if (nums[left] < nums[right]) {
                left++;
            } else {
                right--;
            }
        } else if (sum > k) {
            if (nums[left] < nums[right]) {
                right--;
            } else {
                left++;
            }
        }
    }    

    return answer;   
};
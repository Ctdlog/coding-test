/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxOnes = 0; 
    let currentOnes = 0; 
    let zeroCount = 0;
    let left = 0; 

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 1) {
            currentOnes++;
        } else {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
                currentOnes = right - left - 1
            }
            left++;
        }
        
        maxOnes = Math.max(maxOnes, currentOnes);
    }

    if (zeroCount === 0) {
        return maxOnes - 1; 
    } else {
        return maxOnes; 
    }
};
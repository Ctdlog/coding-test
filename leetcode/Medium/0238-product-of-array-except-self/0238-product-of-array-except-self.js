/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const filteredNums = nums.filter((num) => num !== 0)

    if (filteredNums.length === 0) {
        return new Array(nums.length).fill(0);
    }

    const multiple = filteredNums.reduce((acc, cur) => acc * cur);
    const zeroCount = nums.filter((num) => num === 0).length;
    
    
    return nums.map((num) => {
        if (zeroCount >= 2) {
            return 0;
        }
        
        if (zeroCount === 1) {
            if (num === 0) {
                return multiple;    
            }
            
            return 0;
            
        }
        
        if (zeroCount === 0) {
            return multiple / num;    
        }
        
        
    });
};
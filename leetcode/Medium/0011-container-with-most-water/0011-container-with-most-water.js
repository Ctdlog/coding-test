/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let answer = 0;

    while (left < right) {
      const area =  Math.min(height[left], height[right]) * Math.abs(right - left);

      if (answer < area) {
        answer = area
      } else if (height[left] < height[right]) {
        left++
      } else {
        right--
      }
    }

    return answer
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0; // 윈도우의 왼쪽 끝 인덱스
    let maxOnes = 0; // 최대 연속 1의 개수
    let zeroCount = 0; // 현재 윈도우 내의 0의 개수

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++; // 0을 발견하면 zeroCount 증가
        }

        while (zeroCount > k) {
            // 현재 윈도우 내의 0의 개수가 k보다 크면 왼쪽 끝 인덱스를 이동
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // 현재 연속 1의 길이를 계산하여 최대값 갱신
        maxOnes = Math.max(maxOnes, right - left + 1);
    }

    return maxOnes;
};
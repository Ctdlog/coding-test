function solution(arr, k, t) {
	let answer = '';
	const nums = arr.sort((a, b) => a - b);
	const min = nums[0] + nums[1]; // 1 + 2

	// nums[2] -> [3, 5, 8];
	for (let i = 2; i < nums.length; i++) {}

	return answer;
}

console.log(solution([2, 5, 3, 8, 1], 3, 11)); // result: 6

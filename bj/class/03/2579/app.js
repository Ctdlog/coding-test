const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();
const nums = input.map(Number);

solution(n, nums);

function solution(n, nums) {
	// Write your code
	const DP = new Array(n).fill(0);

	DP[0] = nums[0];
	DP[1] = Math.max(nums[0] + nums[1], nums[1]);
	DP[2] = Math.max(nums[0] + nums[2], nums[1] + nums[2]);

	for (let i = 3; i < n; i++) {
		DP[i] = Math.max(nums[i] + nums[i - 1] + DP[i - 3], nums[i] + DP[i - 2]);
	}

	console.log(DP[n - 1]);
}

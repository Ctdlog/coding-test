const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...nums] = input.map(Number);

const DP = [
	nums[0],
	nums[0] + nums[1],
	Math.max(nums[0] + nums[1], nums[0] + nums[2], nums[1] + nums[2]),
];

for (let i = 3; i < n; i++) {
	console.log(
		DP[i - 3] + nums[i - 1] + nums[i],
		DP[i - 2] + nums[i],
		DP[i - 1]
	);
	DP[i] = Math.max(
		DP[i - 3] + nums[i - 1] + nums[i],
		DP[i - 2] + nums[i],
		DP[i - 1]
	);
}

console.log(DP);

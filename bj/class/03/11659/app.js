const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nums = input.shift().split(' ').map(Number);
const arrs = input.map((i) => i.split(' ').map(Number));

function solution(N, M, nums, arrs) {
	// Write your code
	const DP = [nums[0], nums[0] + nums[1]];
	for (let i = 2; i < N; i++) {
		DP[i] = DP[i - 1] + nums[i];
	}
	DP.unshift(0);

	const answer = [];
	for (let [start, end] of arrs) {
		answer.push(DP[end] - DP[start - 1]);
	}

	return answer.join('\n');
}

console.log(solution(N, M, nums, arrs));

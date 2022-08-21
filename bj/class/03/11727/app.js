const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const DP = [0, 1, 3];

function solution(n) {
	// Write your code
	for (let i = 3; i <= n; i++) {
		DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
	}
	return DP[n];
}

console.log(solution(N));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

solution(n);

function solution(n) {
	// Write your code
	const DP = [0, 1, 2, 3];
	for (let i = 4; i <= n; i++) {
		DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
	}

	console.log(DP[n]);
}

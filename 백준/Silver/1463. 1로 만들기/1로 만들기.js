const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

N = +input[0];

console.log(solution(N));

function solution(N) {
	const DP = new Array(N + 1).fill(0);
	for (let i = 2; i <= N; i++) {
		DP[i] = DP[i - 1] + 1;

		if (i % 2 === 0) {
			DP[i] = Math.min(DP[i], DP[i / 2] + 1);
		}

		if (i % 3 === 0) {
			DP[i] = Math.min(DP[i], DP[i / 3] + 1);
		}
	}

	return DP[N];
}

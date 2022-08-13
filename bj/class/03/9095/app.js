const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const cases = input.map(Number);

solution(N, cases);

function solution(N, cases) {
	// Write your code
	let count = 0;
	const DP = [0, 1, 2, 4];
	for (let i = 4; i <= 11; i++) {
		DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
	}

	for (let x of cases) {
		console.log(DP[x]);
	}
}

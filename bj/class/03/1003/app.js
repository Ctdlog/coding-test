const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();
const cases = input.map(Number);

function solution(t, cases) {
	// Write your code

	for (let n of cases) {
		const fibonacci = [
			[1, 0],
			[0, 1],
		];

		for (let i = 2; i <= n; i++) {
			fibonacci[i] = [
				fibonacci[i - 1][0] + fibonacci[i - 2][0],
				fibonacci[i - 1][1] + fibonacci[i - 2][1],
			];
		}

		console.log(fibonacci[n].join(' '));
	}
}

solution(T, cases);

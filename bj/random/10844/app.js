const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const DP = new Array(N);

for (let i = 0; i < N; i++) {
	DP[i] = new Array(10).fill(0);
}

for (let i = 1; i <= 9; i++) {
	DP[0][i] = 1;
}

for (let i = 1; i < N; i++) {
	for (let j = 0; j <= 9; j++) {
		DP[i][j] = (DP[i - 1][j - 1] || 0) + ((DP[i - 1][j + 1] || 0) % 1000000000);
	}
}

const result = DP[N - 1].reduce((acc, cur) => (acc + cur) % 1000000000, 0);

console.log(result);

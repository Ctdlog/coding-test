const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arr = input[0].split(' ').map((item) => +item);

const DP = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
	const values = [1];
	for (let j = 0; j < i; j++) {
		if (arr[i] > arr[j]) {
			values.push(DP[j] + 1);
		}
	}
	DP[i] = Math.max(...values);
}

console.log(Math.max(...DP));

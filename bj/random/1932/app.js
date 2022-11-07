const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arr = input.map((i) => i.split(' ').map((item) => +item));

for (let i = 1; i < N; i++) {
	arr[i][0] += arr[i - 1][0];
	arr[i][arr[i].length - 1] += arr[i - 1][arr[i - 1].length - 1];
	for (let j = 1; j < arr[i].length - 1; j++) {
		arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
	}
}

console.log(Math.max(...arr[N - 1]));

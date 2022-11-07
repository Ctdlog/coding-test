const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const nums = input[0].split(' ').map((item) => +item);

const DP = [nums[0]];

for (let i = 1; i < N; i++) {
	DP[i] = Math.max(DP[i - 1] + nums[i], nums[i]);
}

console.log(Math.max(...DP));

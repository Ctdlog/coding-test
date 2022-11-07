const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const costs = input.map((item) => item.split(' ').map((item) => +item));

for (let i = 1; i < N; i++) {
	costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
	costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
	costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
}

console.log(Math.min(...costs[N - 1]));

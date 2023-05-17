const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const DP = new Array(N + 1).fill(0);

DP[1] = 'SK';
DP[2] = 'CY';

for (let i = 3; i <= N; i++) {
  DP[i] = DP[i - 1] === 'SK' ? 'CY' : 'SK';
  DP[i] = DP[i - 3] === 'SK' ? 'CY' : 'SK';
}

console.log(DP[N]);

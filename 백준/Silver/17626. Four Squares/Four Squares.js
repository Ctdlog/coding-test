const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const DP = new Array(N + 1).fill(0);

DP[1] = 1;

for (let i = 2; i <= N; i++) {
  let min = 4;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, DP[i - j * j]);
  }
  DP[i] = min + 1;
}

console.log(DP[N]);

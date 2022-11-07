const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const DP = [0, 1];

for (let i = 2; i <= N; i++) {
  DP[i] = BigInt(DP[i - 1]) + BigInt(DP[i - 2]);
}

console.log(DP[N].toString());

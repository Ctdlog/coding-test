const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const nums = input.map((item) => item.split(' ').map((item) => +item));

const DP = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const [duration, profit] = nums[i];
  if (i + duration > N) continue;
  DP[i] = DP[i] + profit;
  for (let j = i + duration; j < N; j++) {
    DP[j] = Math.max(DP[i], DP[j]);
  }
}

console.log(Math.max(...DP));

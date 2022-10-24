const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const prices = input[0].split(' ').map((item) => +item);

// N개의 카드를 갖기 위 지불해야 하는 금액의 최댓값

const DP = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    DP[i] = Math.max(DP[i], DP[i - j] + prices[j - 1]);
  }
}

console.log(DP[N]);

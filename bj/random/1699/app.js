const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();

function solution(n) {
  const DP = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j ** 2 <= i; j++) {
      DP[i] = Math.min(DP[i], DP[i - j ** 2] + 1);
    }
  }
  return DP[n];
}

console.log(solution(N));

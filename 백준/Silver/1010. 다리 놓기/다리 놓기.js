const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();

const cases = input.map((i) => i.split(' ').map((item) => +item));

for (const [N, M] of cases) {
  const DP = [];

  for (let i = 0; i < M + 1; i++) {
    let a = new Array(N + 1).fill(0);
    DP.push(a);
  }

  function combination(m, n) {
    if (DP[m][n] > 0) return DP[m][n];
    if (n == m || n == 0) return 1;

    DP[m][n] = combination(m - 1, n - 1) + combination(m - 1, n);
    return DP[m][n];
  }

  console.log(combination(M, N));
}

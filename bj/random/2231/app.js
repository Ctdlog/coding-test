const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(n) {
  for (let i = 1; i < n; i++) {
    const sum = i
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);
    if (i + sum === n) return i;
  }
  return 0;
}

console.log(solution(N));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

solution(n);

function solution(n) {
  // Write your code
  let answer = 1000000;
  for (let i = 1; i < n; i++) {
    const sum = String(i)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);
    if (i + sum === n && i + sum < answer) {
      answer = i;
    }
  }
  if (answer === 1000000) {
    answer = 0;
  }
  console.log(answer);
}

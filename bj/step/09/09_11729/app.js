const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

solution(input);

function solution(n) {
  // Write your code
  const answer = [];
  for (let i = n; i > 0; i--) {
    answer.push(i);
  }

  const arrOne = answer;
  const arrTwo = [];
  const arrThr = [];

  let cnt = 0;

  while (true) {
    if (arrOne === arrThr) return true;
  }

  cnt++;
}

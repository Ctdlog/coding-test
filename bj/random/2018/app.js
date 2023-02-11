const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

let answer = 0;

let start = 1;
let end = 1;
let sum = 1;

while (start <= end) {
  if (sum === N) answer++;
  if (sum < N) {
    end++;
    sum += end;
  } else if (sum >= N) {
    sum -= start;
    start++;
  }
}

console.log(answer);

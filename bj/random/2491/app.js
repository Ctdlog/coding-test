const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input[0].split(' ').map((item) => +item);

let max = 1;
let count = 1;
let dir = '';

for (let i = 0; i < N; i++) {
  if (arrs[i] === arrs[i + 1]) {
    count++;
  }

  if (arrs[i] < arrs[i + 1]) {
    if (dir === 'down') {
      max = Math.max(max, count);
      count = 1;
    }
    dir = 'up';
    count++;
  }

  if (arrs[i] > arrs[i + 1]) {
    if (dir === 'up') {
      max = Math.max(max, count);
      count = 1;
    }
    dir = 'down';
    count++;
  }

  console.log(arrs[i], arrs[i + 1], dir, count, max);
}

console.log(max);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nums = input
  .shift()
  .split(' ')
  .map((item) => +item);

let count = 0;
for (let i = 0; i < N; i++) {
  let sum = nums[i];
  let idx = i;
  while (sum < M && idx < N - 1) {
    idx++;
    sum += nums[idx];
  }
  if (sum === M) {
    count++;
  }
}

console.log(count);

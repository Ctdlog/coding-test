const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ');
const numbers = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

solution(N, M, numbers);

function solution(N, M, nums) {
  // Write your code
  let start = 0;
  let end = nums[nums.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let num of nums) {
      if (num > mid) sum += num - mid;
    }

    if (sum >= M) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(answer);
}

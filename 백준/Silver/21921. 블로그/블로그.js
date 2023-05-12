const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, X] = input
  .shift()
  .split(' ')
  .map((item) => +item);
const nums = input.shift().split(' ').map(Number);

const solution = () => {
  let sum = 0;
  let maxSum = 0;
  let count = 0;

  for (let i = 0; i < X; i++) {
    sum += nums[i];
  }

  maxSum = sum;
  count++;

  for (let i = X - 1; i < N; i++) {
    sum = sum - nums[i - X + 1] + nums[i + 1];
    if (sum === maxSum) {
      count++;
    }

    if (sum > maxSum) {
      count = 1;
      maxSum = sum;
    }
  }

  if (maxSum === 0) {
    console.log('SAD');
    return;
  }

  console.log(maxSum);
  console.log(count);
};

solution();

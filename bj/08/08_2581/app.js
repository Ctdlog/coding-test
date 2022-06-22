const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(nums) {
  // Write your code
  let a = +nums[0],
    b = +nums[1];

  let min;
  let sum = 0;

  for (let i = a; i <= b; i++) {
    if (isDecimal(i)) {
      if (sum == 0) {
        min = i;
      }
      sum += i;
    }
  }

  if (sum == 0) {
    console.log(-1);
    return;
  }

  console.log(sum);
  console.log(min);
}

function isDecimal(num) {
  if (num == 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

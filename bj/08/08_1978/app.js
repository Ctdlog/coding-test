const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[1].split(' ');

solution(input);

function solution(nums) {
  // Write your code
  let cnt = 0;
  for (let num of nums) {
    if (isDecimal(num)) cnt++;
  }
  console.log(cnt);
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

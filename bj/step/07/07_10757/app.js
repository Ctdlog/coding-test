const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ');

solution(input);

function solution(nums) {
  // Write your code
  const A = BigInt(nums[0]);
  const B = BigInt(nums[1]);
  const answer = A + B;
  console.log(answer.toString());
}

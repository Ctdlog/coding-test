const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.slice(1);

solution(input);

function solution(arr) {
  // Write your code
  arr = arr.sort((a, b) => a - b);
  console.log(arr.join('\n'));
}

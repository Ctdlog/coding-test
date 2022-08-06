const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

K = input.shift();
numbers = input.map((item) => +item);

solution(K, numbers);

function solution(K, numbers) {
  // Write your code
  const stack = [];
  for (let number of numbers) {
    if (number) {
      stack.push(number);
    } else {
      stack.pop();
    }
  }
  let sum = 0;
  if (stack.length === 0) {
    console.log(sum);
    return;
  }
  sum = stack.reduce((a, b) => a + b);
  console.log(sum);
}

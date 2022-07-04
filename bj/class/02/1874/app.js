const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...nums] = input;
const numbers = nums.map((item) => +item);

solution(n, numbers);

function solution(n, nums) {
  // Write your code

  const stack = [];
  let answer = '';
  let count = 1;

  for (let i = 0; i < n; i += 1) {
    const num = nums.shift();

    while (count <= num) {
      stack.push(count++);
      answer += '+ ';
    }

    const popedItem = stack.pop();

    if (popedItem !== num) {
      return 'NO';
    }
    answer += '- ';
    console.log(num, answer);
  }
}

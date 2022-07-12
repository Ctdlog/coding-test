const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

n = input[0];
arrs = input.slice(1);

solution(n, arrs);

function solution(n, arrs) {
  // Write your code

  for (let arr of arrs) {
    const stack = [];
    let result = 'YES';

    for (let i of arr) {
      if (i === '(') {
        stack.push(1);
      } else {
        if (!stack.pop()) {
          result = 'NO';
          break;
        }
      }
    }

    if (stack.length !== 0) {
      result = 'NO';
    }

    console.log(result);
  }
}

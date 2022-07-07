const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

n = input[0];
arrs = input.slice(1);

solution(n, arrs);

function solution(n, arrs) {
  // Write your code

  const stack = [];
  const result = [];
  for (let arr of arrs) {
    arr = arr.split(' ');
    const order = arr[0];
    switch (order) {
      case 'push':
        stack.push(arr[1]);
        break;
      case 'pop':
        result.push(stack.pop() || -1);
        break;
      case 'size':
        result.push(stack.length);
        break;
      case 'empty':
        result.push(stack[0] ? 0 : 1);
        break;
      case 'top':
        result.push(stack.at(-1) || -1);
        break;
    }
  }

  console.log(result.join('\n'));
}

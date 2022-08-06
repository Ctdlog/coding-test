const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

N = input[0];
orders = input.slice(1);

solution(N, orders);

function solution(N, orders) {
  // Write your code

  const stack = [];
  let answer = '';
  for (let order of orders) {
    const [a, num] = order.split(' ');
    switch (a) {
      case 'push':
        stack.push(num);
        break;
      case 'pop':
        const poped = stack.shift();
        if (poped) {
          answer += `${poped}\n`;
        } else {
          answer += '-1\n';
        }
        break;

      case 'size':
        answer += `${stack.length}\n`;
        break;

      case 'empty':
        if (!stack.length) {
          answer += '1\n';
        } else {
          answer += '0\n';
        }
        break;

      case 'front':
        const first = stack[0];
        if (first) {
          answer += `${first}\n`;
        } else {
          answer += `-1\n`;
        }
        break;

      case 'back':
        const last = stack.at(-1);
        if (last) {
          answer += `${last}\n`;
        } else {
          answer += `-1\n`;
        }
        break;
    }
  }

  console.log(answer);
}

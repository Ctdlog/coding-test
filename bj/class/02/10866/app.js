const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...orders] = input;

solution(N, orders);

function solution(N, orders) {
  // Write your code
  const stack = [];
  let answer = '';
  for (let order of orders) {
    order = order.split(' ');
    switch (order[0]) {
      case 'push_front':
        stack.unshift(order[1]);
        break;
      case 'push_back':
        stack.push(order[1]);
        break;
      case 'pop_front':
        const shifted = stack.shift();
        if (!shifted) answer += '-1\n';
        else answer += `${shifted}\n`;
        break;
      case 'pop_back':
        const poped = stack.pop();
        if (!poped) answer += '-1\n';
        else answer += `${poped}\n`;
        break;
      case 'size':
        answer += `${stack.length}\n`;
        break;
      case 'empty':
        if (stack.length === 0) answer += `1\n`;
        else answer += `0\n`;
        break;
      case 'front':
        if (stack[0]) answer += `${stack[0]}\n`;
        else answer += `-1\n`;
        break;
      case 'back':
        if (stack.at(-1)) answer += `${stack.at(-1)}\n`;
        else answer += '-1\n';
        break;
    }
  }
  console.log(answer);
}

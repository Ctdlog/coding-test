const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const output = [];
let result = '';

function DFS(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    output.push(i + 1);
    DFS(i, output.length);
    output.pop();
  }
}

DFS(0, 0);
console.log(result);

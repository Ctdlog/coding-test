const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const nums = input.shift().split(' ').map(Number);

let answer = 0;

dfs(0);

function dfs(currentNum) {
  if (currentNum > N) {
    return;
  }

  if (answer < currentNum) {
    answer = currentNum;
  }

  for (let i = K - 1; i > -1; i--) {
    dfs(currentNum * 10 + nums[i]);
  }
}

console.log(answer);

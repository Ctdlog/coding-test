const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift().split('');

const solution = (N) => {
  if (!N.includes('0')) {
    return -1;
  }

  const sum = N.reduce((acc, cur) => acc + Number(cur), 0);
  if (sum % 3 !== 0) {
    return -1;
  }

  return N.sort((a, b) => b - a).join('');
};

console.log(solution(N));

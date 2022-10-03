const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const [A, B] = input.map((item) => item.split(' ').map((item) => +item));

const newA = A.sort((a, b) => a - b);
const newB = B.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += newA[i] * newB[i];
}

console.log(sum);

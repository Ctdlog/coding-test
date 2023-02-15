const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...ropes] = input;

const w = ropes.map(Number).sort((a, b) => a - b);

let min = w[0] * N;

for (let i = 1; i < N; i++) {
  const weight = w[i] * (N - i);
  if (min < weight) {
    min = weight;
  }
}

console.log(min);

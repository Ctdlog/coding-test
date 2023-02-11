const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arrs = input.map((item) => item.split(' ').map((item) => +item));

const [N, M] = arrs[0];

let minWholePrice = Number.MAX_SAFE_INTEGER;
let minSinglePrice = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= M; i++) {
  const [whole, single] = arrs[i];
  minWholePrice = Math.min(minWholePrice, whole);
  minSinglePrice = Math.min(minSinglePrice, single);
}

const result = Math.min(
  minWholePrice * Math.ceil(N / 6),
  minWholePrice * Math.floor(N / 6) + minSinglePrice * (N % 6),
  minSinglePrice * N
);

console.log(result);

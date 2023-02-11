const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const cases = input.map((item) => item.split(' ').map((item) => +item));

for (let i = 0; i < cases.length; i++) {
  const [k, ...S] = cases[i];
  if (k === 0) break;
  console.log(k, S);
}

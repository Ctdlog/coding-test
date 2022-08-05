const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((item) => +item);

solution(n, m);

function solution(n, m) {
  // Write your code
  let a = n,
    b = m;

  while (a % b !== 0) {
    let rem = a % b;
    if (rem !== 0) {
      a = b;
      b = rem;
    }
  }

  console.log(b);
  console.log((n * m) / b);
}

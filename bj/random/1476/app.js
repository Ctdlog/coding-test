const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [E, S, M] = input[0].split(' ').map(Number);

function solution(E, S, M) {
  let count = 1;
  while (true) {
    if (count % 15 === E && count % 28 === S && count % 19 === M) {
      break;
    }
    count++;
  }
  return count;
}

console.log(solution(E, S, M));

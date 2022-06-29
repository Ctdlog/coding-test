const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

solution(input);

function solution(num) {
  // Write your code
  if (num === 1) {
    return;
  }

  let tmp = num;

  while (tmp !== 1) {
    for (let i = 2; i <= tmp; i++) {
      if (tmp % i === 0) {
        console.log(i);
        tmp /= i;
        break;
      }
    }
  }
}

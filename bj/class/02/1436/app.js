const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

solution(input);

function solution(n) {
  // Write your code
  let cnt = 1;
  let start = 666;
  while (true) {
    if (cnt === n) {
      console.log(start);
      return true;
    }

    start = start + 1;
    if (start.toString().indexOf(666) !== -1) {
      cnt++;
    }
  }
}

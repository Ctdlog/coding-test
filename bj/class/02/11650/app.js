const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

N = input[0];
arrs = input.slice(1);

solution(N, arrs);

function solution(N, arrs) {
  // Write your code
  const newArrs = arrs
    .map((arr) => arr.split(' '))
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });

  let answer = '';
  newArrs.forEach((element) => {
    answer += `${element.join(' ')}\n`;
  });

  console.log(answer);
}

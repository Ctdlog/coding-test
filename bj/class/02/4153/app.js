const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(arrs) {
  // Write your code
  for (let arr of arrs) {
    arr = arr
      .split(' ')
      .map((item) => +item)
      .sort((a, b) => a - b);

    if (arr[0] === 0) return;
    if (arr[0] ** 2 + arr[1] ** 2 == arr[2] ** 2) {
      console.log('right');
    } else {
      console.log('wrong');
    }
  }
}

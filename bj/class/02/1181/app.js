const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.slice(1);

solution(input);

function solution(arr) {
  // Write your code
  Array.from(new Set(arr))
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .sort((a, b) => a.length - b.length)
    .forEach((i) => console.log(i));
}

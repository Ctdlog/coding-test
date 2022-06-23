const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

solution(input);

function solution(num) {
  // Write your code
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(num));
}

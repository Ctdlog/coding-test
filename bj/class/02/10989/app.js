const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

n = input[0];
numbers = input.slice(1).map((item) => +item);

solution(n, numbers);

function solution(n, numbers) {
  // Write your code
  const max = Math.max(...numbers);
  const array = new Array(max + 1);
  array.fill(0);

  for (let i = 0; i < n; i++) {
    array[numbers[i]]++;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      for (let j = 0; j < array[i]; j++) {
        console.log(i);
      }
    }
  }
}

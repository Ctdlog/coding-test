const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map((item) => +item);
let cards = input[1].split(' ').map((item) => +item);

solution(n, m, cards);

function solution(n, m, cards) {
  // Write your code
  let answer = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum <= m && sum > answer) {
          answer = cards[i] + cards[j] + cards[k];
        }
      }
    }
  }

  console.log(answer);
}

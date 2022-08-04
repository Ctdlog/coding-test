const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const people = input.slice(1);

solution(N, people);

function solution(n, people) {
  // Write your code
  let answer = [];
  for (let i = 0; i < n; i++) {
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      const [x, y] = people[i].split(' ').map((item) => +item);
      const [p, q] = people[j].split(' ').map((item) => +item);
      if (i !== j && x < p && y < q) cnt++;
    }
    answer.push(cnt);
  }
  console.log(answer.join(' '));
}

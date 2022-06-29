const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

caseNum = input[0];
input = input.slice(1).map((item) => +item);

solution(input);

function solution(nums) {
  // Write your code
  const n = 2;
  const m = 10000;

  let prime = [];
  for (let i = n; i <= m; i++) {
    prime[i] = i;
  }
  for (let i = 2; i * i <= m; i++) {
    if (prime[i] === 0) continue;
    for (let j = i * i; j <= m; j += i) {
      prime[j] = 0;
    }
  }
  prime = prime.filter((n) => n !== 0);

  for (let num of nums) {
    let answer = [];
    for (let i = 0; prime[i] < num / 2 + 1; i++) {
      const isPrimeIdx = prime.indexOf(num - prime[i]);
      if (isPrimeIdx !== -1) {
        answer.push([prime[i], prime[isPrimeIdx]]);
      }
    }

    const result = answer.pop();
    console.log(result[0], result[1]);
  }
}

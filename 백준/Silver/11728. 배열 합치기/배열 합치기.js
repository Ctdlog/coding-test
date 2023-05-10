const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input
  .shift()
  .split(' ')
  .map((n) => +n);
const [A, B] = input.map((v) => v.split(' ').map((n) => +n));

const solution = () => {
  const answer = [];
  let a = 0;
  let b = 0;

  while (a + b < N + M) {
    if (a === N) {
      answer.push(...B.slice(b).sort((a, b) => a - b));
      break;
    }

    if (b === M) {
      answer.push(...A.slice(a).sort((a, b) => a - b));
      break;
    }

    if (A[a] < B[b]) {
      answer.push(A[a++]);
    } else {
      answer.push(B[b++]);
    }
  }

  return answer.join(' ');
};

console.log(solution());

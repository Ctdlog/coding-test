const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ');
input = input.slice(1).map((item) => +item);

solution(a, b, input);

function solution(k, n, nums) {
  // Write your code
  let start = 0;
  let end = Math.max(...nums);
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (getCount(mid) < n) {
      end = mid - 1;
    } else {
      answer = mid;
      start = mid + 1;
    }
  }

  console.log(answer);

  function getCount(mid) {
    let result = 0;
    for (const num of nums) {
      result += Math.floor(num / mid);
    }
    return result;
  }
}

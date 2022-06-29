const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((item) => +item);

solution(input);

function solution(nums) {
  // Write your code
  for (let n of nums) {
    if (n === 0) {
      return;
    }
    let tmp = n * 2;
    let arr = Array(tmp + 1)
      .fill(true)
      .fill(false, 0, 2);
    for (let i = 2; i * i <= tmp; i++) {
      if (arr[i]) {
        for (let j = i * i; j <= tmp; j += i) {
          arr[j] = false;
        }
      }
    }
    console.log(arr.slice(n + 1).filter((e) => e).length);
  }
}

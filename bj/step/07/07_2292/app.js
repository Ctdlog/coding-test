const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[0];

solution(input);

function solution(num) {
  // Write your code
  let cnt = 1;
  let tmp = 1;

  while (true) {
    if (num <= tmp) {
      break;
    }
    tmp += 6 * cnt;
    cnt++;
  }
  console.log(cnt);
}

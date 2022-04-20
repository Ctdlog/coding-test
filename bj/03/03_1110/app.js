const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];

solution(input);

function solution(num) {
  // Write your code
  let sum;
  let cnt = 0;

  while (true) {
    cnt++;

    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);

    if (num == input) {
      console.log(cnt);
      return true;
    }
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];

solution(input);

function solution(num) {
  // Write your code
  if (num % 4 == 0 && (num % 100 !== 0 || num % 400 == 0)) {
    console.log("1");
  } else {
    console.log("0");
  }
}

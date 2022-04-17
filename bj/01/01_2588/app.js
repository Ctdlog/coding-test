const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num1 = +input[0],
  num2 = input[1];

solution(num1, num2);

function solution(a, b) {
  // Write your code
  console.log(a * +b[2]);
  console.log(a * +b[1]);
  console.log(a * +b[0]);
  console.log(a * +b);
}

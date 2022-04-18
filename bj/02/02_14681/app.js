const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num1 = +input[0],
  num2 = +input[1];

solution(num1, num2);

function solution(a, b) {
  // Write your code
  if (a > 0) {
    if (b > 0) console.log("1");
    else console.log("4");
  } else {
    if (b > 0) console.log("2");
    else console.log("3");
  }
}

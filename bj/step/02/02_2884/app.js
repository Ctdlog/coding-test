const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

let num1 = +input[0],
  num2 = +input[1];

solution(num1, num2);

function solution(a, b) {
  // Write your code
  if (b >= 45) {
    console.log(`${a} ${b - 45}`);
  } else {
    if (a == 0) a = 24;
    console.log(`${a - 1} ${b + 15}`);
  }
}

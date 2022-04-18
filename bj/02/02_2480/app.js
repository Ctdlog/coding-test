const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

input.sort((a, b) => a - b);

let a = input[0],
  b = input[1],
  c = input[2];

solution(a, b, c);

function solution(a, b, c) {
  // Write your code
  if (a == b && b == c) {
    console.log(10000 + a * 1000);
  } else if (a == b || b == c) {
    console.log(1000 + b * 100);
  } else {
    console.log(c * 100);
  }
}

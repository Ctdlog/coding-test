const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

inputData = input[0].split(" ").map((item) => +item);

let a = inputData[0],
  b = inputData[1];

solution(a, b);

function solution(a, b) {
  // Write your code
  console.log(a - b);
}

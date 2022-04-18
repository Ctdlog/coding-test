const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numInput = input[0].split(" ").map((item) => +item);

let num1 = numInput[0],
  num2 = numInput[1];

solution(num1, num2);

function solution(a, b) {
  // Write your code
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else if (a == b) {
    console.log("==");
  }
}

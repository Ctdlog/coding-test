const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = +input[0];

solution(input);

function solution(num) {
  // Write your code
  if (num >= 90) {
    console.log("A");
  } else if (num >= 80) {
    console.log("B");
  } else if (num >= 70) {
    console.log("C");
  } else if (num >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

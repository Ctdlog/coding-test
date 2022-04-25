const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

function solution(A) {
  // Write your code
}

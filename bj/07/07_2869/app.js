const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input);

function solution(arr) {
  // Write your code
  let [a, r, v] = arr;
  let dayMove = a - r;

  if (v - a / dayMove >= 0) {
    console.log(v - a / dayMove);
  }
}

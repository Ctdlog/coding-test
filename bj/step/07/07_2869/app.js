const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input);

function solution(arr) {
  // Write your code
  let [a, b, v] = arr;
  let dayMove = a - b;

  console.log(Math.ceil((v - a) / dayMove) + 1);
}

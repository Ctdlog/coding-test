const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];

solution(input);

function solution(str) {
  // Write your code
  result = [];
  str = str.split(" ");
  for (let i of str) {
    i = i.split("").reverse().join("");
    result.push(i);
  }
  console.log(Math.max(...result));
}

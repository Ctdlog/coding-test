const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split(" ");
let n = +num[0],
  m = +num[1];

console.log(n, m);

function solution(A) {
  // Write your code
}

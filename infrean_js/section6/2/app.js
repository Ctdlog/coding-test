const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];

solution(input);

function solution(x) {
  // Write your code
  let answer;
  let stack = [];
  for (let i of x) {
    if (i === ")") {
      while (stack.pop() !== "(");
    } else stack.push(i);
  }
  answer = stack.join("");
  console.log(answer);
}

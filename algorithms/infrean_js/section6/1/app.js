const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];

solution(input);

function solution(x) {
  // Write your code
  let answer = [];
  for (let i of x) {
    if (i == "(") {
      answer.push(i);
    } else {
      answer.pop();
    }
  }
  if (answer.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

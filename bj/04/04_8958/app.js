const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

caseInput = input[0];
inputData = input.splice(1);

solution(inputData);

function solution(input) {
  // Write your code
  for (let x of input) {
    let score = 0;
    let tmp = 0;
    for (let i of x) {
      if (i == "O") {
        tmp++;
        score += tmp;
      } else {
        tmp = 0;
      }
    }
    console.log(score);
  }
}

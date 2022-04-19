const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(inputData) {
  let answer = "";
  // Write your code
  for (let i = 1; i <= inputData[0]; i++) {
    let numbers = inputData[i].split(" ");
    answer += +numbers[0] + +numbers[1] + "\n";
  }
  console.log(answer);
}

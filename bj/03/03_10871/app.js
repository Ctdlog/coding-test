const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

caseInput = input[0].split(" ");
numInput = input[1].split(" ").map((item) => +item);

solution(numInput);

function solution(arr) {
  // Write your code
  let answer = "";
  let x = caseInput[1];
  for (let num of arr) {
    if (num < x) {
      answer += num + " ";
    }
  }
  console.log(answer);
}

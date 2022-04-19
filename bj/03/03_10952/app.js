const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(inputData) {
  // Write your code
  let answer = "";
  let len = inputData.length;
  for (let i = 0; i < len; i++) {
    let numbers = inputData[i].split(" ").map((item) => +item);
    if (numbers[0] == 0 && numbers[1] == 0) {
      break;
    }
    answer += numbers[0] + numbers[1] + "\n";
  }
  console.log(answer);
}

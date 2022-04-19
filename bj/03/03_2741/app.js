const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];

solution(input);

function solution(num) {
  // Write your code
  let answer = "";
  for (let i = 1; i <= num; i++) {
    // console.log(i); 시간 초과 발생
    answer += i + "\n";
  }
  console.log(answer);
}

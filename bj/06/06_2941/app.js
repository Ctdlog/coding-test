const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];

solution(input);

function solution(str) {
  // Write your code
  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let result = str.length;
  for (let i = 0; i < str.length; i++) {
    if (croatia.includes(str[i] + str[i + 1])) {
      result -= 1;
    }
    if (str[i] + str[i + 1] + str[i + 2] == "dz=") {
      result -= 1;
    }
  }
  console.log(result);
}

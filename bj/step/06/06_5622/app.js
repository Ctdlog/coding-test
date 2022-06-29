const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];

solution(input);

function solution(str) {
  // Write your code
  let result = 0;
  let phone = {
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
  };
  for (let i = 0; i < str.length; i++) {
    for (let j = 2; j <= 9; j++) {
      if (phone[j].includes(str[i])) {
        result += j + 1;
        break;
      }
    }
  }
  console.log(result);
}

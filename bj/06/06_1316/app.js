const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

caseNum = input[0];
strInput = input.splice(1);

solution(strInput);

function solution(strings) {
  // Write your code
  let check = [];
  let result = strings.length;
  for (let str of strings) {
    if (str.length == 1) {
      continue;
    }
    for (let i = 0; i < str.length; i++) {
      if (!check.includes(str[i])) check.push(str[i]);
      else {
        if (str[i] !== str[i - 1]) {
          result--;
          break;
        }
      }
    }
    check = [];
  }
  console.log(result);
}

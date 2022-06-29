const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

caseNum = input[0];
arrInput = input.splice(1);

solution(arrInput);

function solution(arr) {
  // Write your code
  for (let i of arr) {
    let result = "";
    i = i.split(" ");
    let nums = +i[0];
    let str = i[1];
    for (let j of str) {
      result += j.repeat(nums);
    }
    console.log(result);
  }
}

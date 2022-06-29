const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

C = input[0];
caseInput = input.splice(1);

solution(caseInput);

function solution(arrs) {
  // Write your code
  for (let arr of arrs) {
    let newArr = arr
      .split(" ")
      .map((item) => +item)
      .splice(1);
    let avr = newArr.reduce((a, b) => a + b) / newArr.length;
    let filter = newArr.filter((x) => x > avr);
    let per = (filter.length / newArr.length) * 100;
    console.log(per.toFixed(3) + "%");
  }
}

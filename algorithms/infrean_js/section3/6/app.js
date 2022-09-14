const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

numInput = input[0];
arrInput = input[1].split(" ");

solution(arrInput);

function solution(arr) {
  // Write your code

  // for (let x of arr) {
  //   let sum = x.split("").reduce((a, b) => a + Number(b), 0);
  //   console.log(sum);
  // }

  let result = 0;
  let newSum = 0;
  let sum = 0;

  for (i of arr) {
    for (j of i) {
      newSum += +j;
    }
    if (newSum >= sum && +i > result) {
      sum = newSum;
      result = +i;
    }
    newSum = 0;
  }
  console.log(result);
}

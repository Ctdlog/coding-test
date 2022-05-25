const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[0];

solution(input);

function solution(num) {
  // Write your code
  let counter = 0;
  let asc = [];
  let desc = [];

  while (num > 0) {
    counter++;
    num -= counter;
  }

  for (let i = 0; i < counter; i++) {
    asc.push(i + 1);
    desc.push(counter - i);
  }

  if (counter % 2 == 0) {
    console.log(`${asc[counter - 1 + num]}/${desc[counter - 1 + num]}`);
  } else {
    console.log(`${desc[counter - 1 + num]}/${asc[counter - 1 + num]}`);
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numInput = input[0].split(" ").map((item) => +item);

let n = numInput[0],
  m = numInput[1];

let time = +input[1];

solution(n, m, time);

function solution(n, m, time) {
  // Write your code
  if (m + time >= 60) {
    let plusHour = parseInt((m + time) / 60);
    let hour = n + plusHour;
    let minute = (m + time) % 60;
    if (hour >= 24) {
      hour -= 24;
    }
    console.log(`${hour} ${minute}`);
  } else {
    console.log(`${n} ${m + time}`);
  }
}

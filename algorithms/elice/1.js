const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a = 16;
let b = 6;
let answer = 0;
let count = 0;

rl.on("line", (e) => {
  count += 1;
  if (count == 1) {
    a += parseInt(e);
  } else if (count == 2) {
    b += parseInt(e);
    answer = (b / a).toString();
    for (let i = 2; i <= 4; i++) {
      if (answer[i] == 0) {
        return;
      }
      if (i == 2) {
        console.log(answer[i] + "할");
      } else if (i == 3) {
        console.log(answer[i] + "푼");
      } else {
        console.log(answer[i] + "리");
      }
    }
  }
}).on("close", () => {});

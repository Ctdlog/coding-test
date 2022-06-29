const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.splice(1);

solution(input);

function solution(arrs) {
  // Write your code
  for (let arr of arrs) {
    let [H, W, N] = arr.split(" ").map((item) => +item);

    const floor = N % H === 0 ? H : N % H;
    const roomNum = Math.ceil(N / H);

    if (roomNum > 9) {
      console.log(`${floor}${roomNum}`);
    } else {
      console.log(`${floor}0${roomNum}`);
    }
  }
}

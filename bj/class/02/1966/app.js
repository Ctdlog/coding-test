const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

N = input.shift();

solution(input);

function solution(input) {
  // Write your code
  for (let i = 0; i < input.length; i += 2) {
    let cnt = 1;
    let [N, M] = input[i].split(" ").map(Number);
    const orders = input[i + 1].split(" ").map(Number);

    while (true) {
      const shiftItem = orders.shift();
      const max = Math.max(...orders);
      if (max <= shiftItem && M === 0) {
        console.log(cnt);
        break;
      } else if (max > shiftItem && M === 0) {
        orders.push(shiftItem);
        M = orders.length - 1;
      } else if (max > shiftItem) {
        orders.push(shiftItem);
        M -= 1;
      } else if (max <= shiftItem) {
        cnt += 1;
        M -= 1;
      }
    }
  }
}

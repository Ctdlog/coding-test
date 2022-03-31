const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = input[0];
let strInput = input[1];

solution(n, strInput);

function solution(n, str) {
  // Write your code
  let answer;
  let sH = new Map();
  for (let x of str) {
    if (sH.has(x)) {
      sH.set(x, sH.get(x) + 1);
    } else {
      sH.set(x, 1);
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
    }
  }
  console.log(max);

  // function Counter(i) {
  //   let regExp = new RegExp(i, "gi");
  //   return str.match(regExp).filter((item) => item !== "").length;
  // }
  // let aCount = Counter("A");
  // let bCount = Counter("B");
  // let cCount = Counter("C");
  // let dCount = Counter("D");
  // let eCount = Counter("E");
  // let result = Math.max(aCount, bCount, cCount, dCount, eCount);
  // console.log(result);
}

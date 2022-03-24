const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

numInput = input[0];
arrInput = input[1].split(" ").map((item) => +item);

solution(arrInput);

function solution(arr) {
  // Write your code
  function isPrime(n) {
    if (n == 1) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  let result = "";

  for (let i of arr) {
    tmp = i.toString().split("").reverse().join("");
    if (isPrime(+tmp)) {
      result += +tmp + " ";
    }
  }

  console.log(result);
}

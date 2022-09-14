const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

strInput = input[0];

solution(strInput);

function solution(str) {
  // Write your code
  let answer = 0;
  let stack = [];
  for (let x of str) {
    if (!isNaN(x)) stack.push(+x);
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  console.log(answer);
}

const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(str) {
  str = str.toLowerCase();
  let result = 1;
  let len = str.length;

  //   // reverse 활용
  //   if (s.split("").reverse().join("") !== s) {
  //     if (result) {
  //       console.log("YES");
  //     } else {
  //       console.log("NO");
  //     }
  //   }

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      console.log(str[i], str[len - 1 - i]);
      result = 0;
    }
  }

  if (result) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

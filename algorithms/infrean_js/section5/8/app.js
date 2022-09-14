const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

str1 = input[0];
str2 = input[1];

solution(str1, str2);

function solution(s, t) {
  // Write your code
  function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
  }

  let answer = 0;
  let tH = new Map(),
    sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  console.log(answer);
  // let answer = 0,
  //   k = t.length;

  // let sH = new Map();

  // for (let x of t) {
  //   if (sH.has(x)) sH.set(x, sH.get(x) + 1);
  //   else sH.set(x, 1);
  // }

  // for (let i = 0; i <= str.length - k; i++) {
  //   newStr = str.slice(i, i + k);
  //   let cnt = 0;
  //   for (let x of newStr) {
  //     if (!sH.has(x) || sH.get(x) === 0) {
  //       continue;
  //     } else {
  //       cnt++;
  //     }
  //     if (cnt == 3) {
  //       answer++;
  //     }
  //   }
  // }
  // console.log(answer);
}

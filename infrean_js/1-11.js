let s = "COMPUTERPROGRAMMING";

function solution(s) {
  let count = 0;
  pos = s.indexOf("R");
  while (pos !== -1) {
    count++;
    pos = s.indexOf("R", pos + 1);
  }
  return count;
}

console.log(solution(s));

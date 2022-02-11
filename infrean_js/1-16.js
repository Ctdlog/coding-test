function solution(s) {
  let answer = "";
  for (x of s) {
    if (answer.indexOf(x) === -1) {
      answer += x;
    }
  }
  return answer;
}

console.log(solution("ksekkset"));

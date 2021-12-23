function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer += str[i].toLowerCase();
    } else {
      answer += str[i].toUpperCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));

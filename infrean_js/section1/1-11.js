function solution(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("KoreaTimeGood"));

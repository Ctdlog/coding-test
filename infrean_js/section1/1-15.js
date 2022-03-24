function solution(str) {
  let answer = "";
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 == 1) {
    answer = str.substring(mid, mid + 1);
  } else {
    answer = str.substring(mid - 1, mid + 1);
  }
  return answer;
}

console.log(solution("study"));
console.log(solution("good"));

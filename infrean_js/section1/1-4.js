function solution(n) {
  let answer = 0;
  for (var i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));

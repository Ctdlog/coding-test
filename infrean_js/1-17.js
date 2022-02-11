function solution(n) {
  let answer = [];
  for (x of n) {
    if (answer.includes(x) === false) {
      answer.push(x);
    }
  }
  return answer;
}

let a = ["good", "time", "good", "time", "student"];
console.log(solution(a));

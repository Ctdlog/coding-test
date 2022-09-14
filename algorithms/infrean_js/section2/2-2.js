arr = [130, 135, 148, 140, 145, 150, 150, 153];

function solution(arr) {
  let answer = 1;
  let tall = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (tall < arr[i]) {
      answer++;
      tall = arr[i];
    }
  }
  return answer;
}

console.log(solution(arr));

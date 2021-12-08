let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  let answer = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let a = sum - 100;
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i).find((v) => v == a - arr[i]) != undefined) {
      console.log(arr.find((v) => v == a - arr[i]));
    }
  }
  return answer;
}

console.log(solution(arr));

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let cnt = 0;
let input = [];
let result = 0;

rl.on("line", (x) => {
  cnt += 1;
  input.push(x.split(" ").map((item) => +item));
  N = +input[0];
  if (cnt === N + 1) {
    rl.close();
  }
}).on("close", () => {
  let arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(input[i]);
  }

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        console.log(arr[i][j]);
        result++;
      }
    }
  }
  console.log(result);
  process.exit();
});

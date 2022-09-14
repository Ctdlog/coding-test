const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";

rl.on("line", (el) => {
  for (i of el) {
    if (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) {
      console.log(i, i.charCodeAt(0));
      result += i;
    }
  }
  rl.close();
}).on("close", () => {
  console.log(result);
});

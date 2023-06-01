const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const extensionObj = {};

for (let file of input) {
  const extension = file.split('.')[1];
  if (extensionObj[extension]) {
    extensionObj[extension]++;
  } else {
    extensionObj[extension] = 1;
  }
}

const extensionArray = Object.keys(extensionObj).sort();

extensionArray.forEach((extensionKey) => {
  console.log(extensionKey, extensionObj[extensionKey]);
});

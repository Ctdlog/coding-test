/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []; 

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      let decodedStr = '';

      while (stack.length > 0 && stack[stack.length - 1] !== '[') {
        decodedStr = stack.pop() + decodedStr;
      }

      stack.pop();

      let repeatCount = '';

      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        repeatCount = stack.pop() + repeatCount;
      }

      repeatCount = parseInt(repeatCount, 10);

      for (let j = 0; j < repeatCount; j++) {
        stack.push(decodedStr);
      }
    } else {
      stack.push(s[i]);
    }
  }  

  return stack.join('');
};
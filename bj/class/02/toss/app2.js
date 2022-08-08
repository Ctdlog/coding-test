function createQueryString(object) {
  const arrays = Object.entries(object);
  let result = '';
  for (let array of arrays) {
    if (array[1] === null || array[1] === undefined) continue;
    if (typeof array[1] === 'object') {
      array[1].forEach((v) => {
        const tmp = encodeURIComponent(v);
        result += `${array[0]}=${tmp}&`;
      });
    } else {
      const tmp = encodeURIComponent(array[1]);
      result += `${array[0]}=${tmp}&`;
    }
  }
  if (!result) return '';
  const answer = '?' + result.slice(0, result.length - 1);

  return answer;
}

function solution(input) {
  //   var object = JSON.parse(input);
  var answer = createQueryString({
    foo: 1,
    bar: null,
    baz: [1, 2, 3],
    quux: 'foo',
    bax: undefined,
    browser: false,
    abc: 'this is test',
  });
  return answer;
}

console.log(solution());

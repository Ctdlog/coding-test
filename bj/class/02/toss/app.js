function safelyGet(object, path) {
  const splited = path.split('.');
  try {
    if (splited.length === 1) {
      return object[splited[0]];
    } else if (splited.length === 2) {
      return object[splited[0]][splited[1]].extension;
    } else if (splited.length === 3) {
      return object[splited[0]][splited[1]][splited[2]];
    }
  } catch (err) {
    console.log(undefined);
  }
}

function solution(input, path) {
  const result = safelyGet(JSON.parse(input), path);
  console.log(result);

  if (result === undefined) {
    return 'undefined';
  }

  console.log(JSON.stringify(result));
  return JSON.stringify(result);
}

const object1 = {
  repository: undefined,
};

const object2 = {
  repository: {
    readme: undefined,
  },
};

const object3 = {
  repository: {
    readme: {
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    },
  },
};

safelyGet(object2, 'repository.readme.extension'); // -> undefined
safelyGet(object2, 'repository'); // -> undefined
safelyGet(object3, 'repository.readme'); // -> undefined

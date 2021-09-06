// https://lodash.com/docs/4.17.15#assign

function assign(source, ...rest) {
  return rest.reduce((acc, curr) => ({ ...curr, ...acc }), source);
}

console.log(assign({ a: 0 }, { a: 1, c: 3 }, { d: 4, c: 10 }));

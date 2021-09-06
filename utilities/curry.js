/**
 * For understanding - https://medium.com/@kj_huang/implementation-of-lodash-curry-function-8b1024d71e3b
 * Original reference - https://lodash.com/docs/4.17.15#curry
 */
function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  const maxNumOfArgs = fn.length;
  return function func() {
    // console.log(arguments);
    if (arguments.length < maxNumOfArgs) return func.bind(null, ...arguments);
    else return fn.apply(null, arguments);
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2, 3));

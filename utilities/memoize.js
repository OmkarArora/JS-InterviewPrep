/**
 * Memoization introduction -
 * https://www.section.io/engineering-education/an-introduction-to-memoization-in-javascript/#:~:text=Memoization%20is%20a%20top%2Ddown,of%20the%20previously%20executed%20computation.
 *
 * Implementation Ref - https://lodash.com/docs/4.17.15#memoize
 */

function memoize(fn, resolver) {
  const cache = {};
  return function () {
    const key = resolver ? resolver(...arguments) : arguments[0];
    if (!cache[key]) {
      console.log("function called to compute");
      cache[key] = fn(...arguments);
    }
    console.log("cache", cache);
    return cache[key];
  };
}

function sum(a, b = 0) {
  return a + b;
}
function sumResolver(a, b) {
  return `${a}+${b}`;
}
const memoizedSum = memoize(sum, sumResolver);
console.log(memoizedSum(2, 3));
console.log(memoizedSum(3, 10));
console.log(memoizedSum(2, 3));

function sumWithoutResolver(a, b = 0) {
  return a + b;
}
const memoizedSum2 = memoize(sumWithoutResolver);
console.log(memoizedSum2(2, 3));
console.log(memoizedSum2(3, 10));
console.log(memoizedSum2(2, 4)); // gives incorrect result without resolver here

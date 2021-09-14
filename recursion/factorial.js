function factorialWrapper() {
  let facts = {};
  facts[0] = 1;
  facts[1] = 1;
  return [
    facts,
    function factorial(number) {
      if (facts[number]) {
        console.log("Used cache for", number);
        return facts[number];
      }
      // if (number === 0 || number === 1) return 1;
      let result = factorial(number - 1) * number;
      facts[number] = result;
      return result;
    },
  ];
}

let [cache, getFactorial] = factorialWrapper();
console.log(getFactorial(10));
console.log(getFactorial(12));
console.log({ cache });

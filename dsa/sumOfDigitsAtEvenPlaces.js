function sumOfDigitsAtEvenPlaces(number) {
  if (typeof number !== "number") return "error";
  let arr = `${number}`.split("");
  let sum = arr.reduce((acc, curr, index) => {
    if (index % 2 === 0) return acc + Number(curr);
    return acc;
  }, 0);
  return sum;
}

console.log(sumOfDigitsAtEvenPlaces(123456789));

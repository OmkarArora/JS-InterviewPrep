function getMostFrequentCharacter(str) {
  if (!str) return 0;
  let { max, ...counts } = str.split("").reduce(
    (acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      acc.max = acc.max < acc[curr] ? acc[curr] : acc.max;
      return acc;
    },
    { max: 0 }
  );
  return Object.entries(counts).filter(([key, value]) => value === max);
}

console.log(
  getMostFrequentCharacter("3553853335").join(" | ").replace(/,/g, ":")
);
console.log(
  getMostFrequentCharacter("--aaaa1111--").join(" | ").replace(/,/g, ":")
);

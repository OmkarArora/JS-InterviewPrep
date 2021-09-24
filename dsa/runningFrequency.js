function runningFrequency(str) {
  if (!str) return 0;
  let result = "";
  let prev = "";
  let count = 1;
  for (let index in str) {
    index = Number(index);
    if (index === 0) {
      prev = str[index];
      continue;
    }
    if (prev === str[index]) {
      count++;
      if (index === str.length - 1) result += `${str[index]}${count}`;
    } else {
      result += `${str[index - 1]}${count}`;
      count = 1;
      prev = str[index];
      if (index === str.length - 1) result += `${str[index]}${count}`;
    }
  }
  return result;
}

console.log(runningFrequency("3553853335"));
console.log(runningFrequency("355385333555"));

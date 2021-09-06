// https://lodash.com/docs/4.17.15#cloneDeep

function cloneDeep(value) {
  if (typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map((elem) => cloneDeep(elem));
  let result = {};
  for (key in value) {
    result = { ...result, [key]: cloneDeep(value[key]) };
  }
  return result;
}

let num = 10;
console.log(cloneDeep(num));

let obj = { app: "Camera", ver: 2 };
let clonedObj = cloneDeep(obj);
console.log(obj === clonedObj, clonedObj);

let arr = [{ a: 1 }, { b: 2 }];
let clonedArr = cloneDeep(arr);
console.log(arr[0] === clonedArr[0], clonedArr);

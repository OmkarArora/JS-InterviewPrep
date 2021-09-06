function zipArrays(arr1, arr2) {
  let minLength = Math.min(arr1.length, arr2.length);
  return arr1.slice(0, minLength).map((elem, index) => [elem, arr2[index]]);
}

let inp1 = [1, 2, 3, 4];
let inp2 = ["apple", "orange", "banana"];
console.log(zipArrays(inp1, inp2));

inp2 = ["apple", "orange", "banana", "kiwi"];
console.log(zipArrays(inp1, inp2));

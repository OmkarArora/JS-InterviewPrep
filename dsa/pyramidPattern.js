function pyramidPattern(height) {
  let string = "";
  for (let i = 1; i <= height; i++) {
    // printing spaces
    for (let j = 1; j <= height - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pyramidPattern(8);

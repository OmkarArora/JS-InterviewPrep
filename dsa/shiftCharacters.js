function shiftCharacters(string, number) {
  let rightLimit = number % string.length;
  let leftString = string.slice(-rightLimit);
  return leftString + string.slice(0, string.length - rightLimit);
}

console.log(shiftCharacters("Omkar", 3));

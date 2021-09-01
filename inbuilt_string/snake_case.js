// remove all symbols. only numbers and letters are allowed
// input: --FOO-BAR--, fooBar, Foo Bar -> foo_bar

function toLowerCase(str) {
	if (!str) return str;
	let result = "";
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= 65 && code <= 90) {
			code += 32;
		}
		result += String.fromCharCode(code);
	}

	return result;
}

function isChar(code) {
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function isNumber(code) {
	return code >= 48 && code <= 57;
}

function toSnakeCase(str) {
	if (!str) return str;
	let result = "";

	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (isChar(code) || isNumber(code)) result += str[i];
		else if (str[i] === " ") result += "_";
		else result += " ";
	}
	return toLowerCase(result.trim().replace(/\s/g, "_"));

}

console.log(toSnakeCase("--FOO-BAR--"));
console.log(toSnakeCase("fooBar"));
console.log(toSnakeCase("Foo Bar"));

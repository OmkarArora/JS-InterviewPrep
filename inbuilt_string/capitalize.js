// capilatize first letter of string and rest all should be in lower case
// input: 'zANe'
// output: 'Zane'

function toUpperCase(str) {
	if (!str) return str;
	let result = "";
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (code >= 97 && code <= 122) {
			code -= 32;
		}
		result += String.fromCharCode(code);
	}

	return result;
}

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

function capilatize(str) {
	if (!str) return str;
	return toUpperCase(str[0]) + toLowerCase(str.substr(1));
}
console.log(capilatize("zANe"))
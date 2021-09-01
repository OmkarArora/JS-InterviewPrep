//  input : '--foo-bar--', 'fooBar', '__FOO_BAR__'
//  output: 'Foo Bar'

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

function isChar(code) {
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function isNumber(code) {
	return code >= 48 && code <= 57;
}

function isUpperCase(code) {
	return (code >= 65 && code <= 90);
}

function isLowerCase(code) {
	return (code >= 97 && code <= 122);
}

function toStartCase(str) {
	if (!str) return str;
	let result = "";

	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		if (isChar(code) || isNumber(code)) {
			if (isUpperCase(code)) {
				if ((i - 1 > 0) && isLowerCase(str.charCodeAt(i - 1))) {
					result = result + " " + str[i];
				}
				else result += str[i];
			}
			else result += str[i]
		}
		else result += " ";
	}
	result = result.trim();//remove extra spaces added
	let arr = result.split(" ");
	result = "";
	for (let i = 0; i < arr.length; i++) {
		result += toUpperCase(arr[i][0]) + toLowerCase(arr[i].substr(1)) + " "
	}
	result = result.trim(); //remove last extra space
	return result;
}

console.log(toStartCase("--foo-bar--"));
console.log(toStartCase("fooBar"));
console.log(toStartCase("__FOO_BAR__"));
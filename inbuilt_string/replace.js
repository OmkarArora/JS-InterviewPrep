const input = "ababacad";
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

function customReplace(str, subStr, newSubStr) {
	let result = "";
	let subStrLength = subStr.length;
	if (!subStr) return str;

	for (let i = 0; i < str.length; i++) {
		if (str.substr(i, subStrLength) === subStr) {
			result += newSubStr;
			i = i + subStrLength - 1;
		} else {
			result += str[i];
		}

	}

	return result;
}

console.log(customReplace(input, "ab", "cd"));
console.log(input.replace("ab", "cd"));

console.log(customReplace(input, "abab", "cd"));
console.log(input.replace("abab", "cd"));

console.log(customReplace(p, "dog", "monkey"));
console.log(p.replace("dog", "monkey"));

//Adding polyfils for sunstring and replace
String.prototype.mySubStr = function (start, size) {
	let str = this.toString();
	let result = "";
	for (let i = start; i < str.length; i++) {
		if (size && result.length === size) {
			return result;
		}
		else result += str[i];
	}
	return result;
}

String.prototype.myReplace = function (subStr, newSubStr) {
	let str = this.toString();
	let result = "";
	let subStrLength = subStr.length;
	if (!subStr) return str;

	for (let i = 0; i < str.length; i++) {
		if (str.mySubStr(i, subStrLength) === subStr) {
			result += newSubStr;
			i = i + subStrLength - 1;
		} else {
			result += str[i];
		}

	}

	return result;
}

console.log("apple".myReplace("pp", "mm"));
console.log("apple".mySubStr(1, 2))
console.log("apple".mySubStr(1))
console.log("apple".mySubStr(1, 5))
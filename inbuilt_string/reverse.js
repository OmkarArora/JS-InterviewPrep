const input = "a string";
const output = "gnirts a";

let test = "test";
test[0] = "m";//dosen't work - strings are immutable

function reverseString(inp) {
	let result = "";
	for (let i = inp.length - 1; i >= 0; i--) {
		result += inp[i];
	}
	return result;
}
console.log("1", reverseString(input));

function reverseString2(inp) {
	/**
	 * "hello".split("") = [h,e,l,l,o]
	 * [h,e,l,l,o].reverse() = [o,l,l,e,h]
	 * [o,l,l,e,h].join("") = "olleh"
	 */
	return inp.split("").reverse().join("");

	//The above doesnt support unicode (utf-16), [...inp] is unicode aware
	// return [...inp].reverse().join("");

}
console.log("2", reverseString2(input));

//Recursion
function reverseString3(inp) {
	if (inp === "")
		return "";
	else
		return reverseString(inp.substr(1)) + inp.charAt(0);
}
console.log("3", reverseString3(input));
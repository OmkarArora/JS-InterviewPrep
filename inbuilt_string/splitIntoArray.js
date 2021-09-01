const input = "apple";

String.prototype.mySplit = function () {
	let str = this.toString();
	// let arr = [];
	// for (let i = 0; i < str.length; i++) {
	// 	arr.push(str[i]);
	// }
	// return arr;
	return [...str];
}

console.log(input.mySplit());
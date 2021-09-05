const input = [2,3,4,5];

Array.prototype.myFilter = function(cb){
	const array = this;
	let result = [];
	for(let i=0;i<array.length;i++){
		if(cb(array[i], i, array)){
			result.push(array[i]);
		}
	}
	return result;
}

console.log(input.filter(elem => elem > 3));
console.log(input.myFilter(elem => elem > 3));
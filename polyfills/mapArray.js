const input = [1,2,3,4,5];

Array.prototype.myMap = function(cb){
	let array = this;
	let result = [];
	for(let i=0;i<array.length;i++){
		result.push(cb(array[i], i, array));
	}
	return result;
}

// input.map((item, index, arr)=> console.log(item, index, arr));
// input.myMap((item, index, arr)=> console.log(item, index, arr));
console.log(input.myMap(item => item*2));
console.log(input.myMap((item,idx) => idx));
const input = [1,2,3,4,5];

Array.prototype.myFind = function(cb){
	const array = this;
	for(let i=0;i<array.length;i++){
		if(cb(array[i], i, array)){
			return array[i];
		}
	}
	return undefined;
}

console.log(input.find(elem => elem===3));
console.log(input.myFind(elem => elem===3));

console.log(input.find(elem => elem===9));
console.log(input.myFind(elem => elem===9));
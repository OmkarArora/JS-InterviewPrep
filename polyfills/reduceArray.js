const input = [1,2,3,4,5];

Array.prototype.myReduce = function(cb, initialValue){
	const array = this;
	let i = 0;
	let acc, curr;
	if(initialValue || initialValue===0) acc = initialValue;
	else{
		acc = array[i];
		i++;
	}
	for(i;i<array.length;i++){
		acc = cb(acc, array[i]);
	}
	return acc;
}

input.reduce((acc, curr) => {
	console.log(acc, curr);
	return acc+curr;
})
input.reduce((acc, curr) => {
	console.log(acc, curr);
	return acc+curr;
}, 0)

console.log("-----------------------")

input.myReduce((acc, curr) => {
	console.log(acc, curr);
	return acc+curr;
})
input.myReduce((acc, curr) => {
	console.log(acc, curr);
	return acc+curr;
}, 0)
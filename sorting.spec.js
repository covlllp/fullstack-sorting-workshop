describe('Bubble Sort', function() {
	it('handles an empty array', function() {
		expect(bubbleSort([])).toEqual([]);
	});

	it('handles one object in array', function() {
		expect(bubbleSort([5])).toEqual([5]);
	});

	it('handles lots of objects in array', function() {
		var arr = makeRandArray(10);
		expect( bubbleSort(arr)).toEqual(arr.sort(sortNumber));
	});
	it('handles lots of objects in array', function() {
		var arr = makeRandArray(50);
		console.log("in");
		console.log(arr);
		console.log(arr.sort());
		console.log(bubbleSort(arr));
		console.log(arr);
		console.log(arr.sort());
		expect( bubbleSort(arr)).toEqual(arr.sort(sortNumber));
	});
	it('handles lots of objects in array', function() {
		var arr = makeRandArray(100);
		expect( bubbleSort(arr)).toEqual(arr.sort(sortNumber));
	});
});

describe('Merge Sort', function() {
	it('is able to split an array into two halves', function() {

	});

	it('handles an empty array', function() {
		expect( mergeSort([])).toEqual([]);
	});

	it('handles one object in array', function() {
		expect( mergeSort([5])).toEqual([5]);
	});

	it('handles lots of objects in array', function() {
		var arr = makeRandArray(10);
		expect( mergeSort(arr)).toEqual(arr.sort(sortNumber));
	});
	it('handles lots of objects in array', function() {
		var abc = makeRandArray(51);
		// console.log("in");
		// console.log(abc);
		// console.log(abc.sort());
		// console.log(mergeSort(abc));
		// console.log(abc);
		// console.log(abc.sort());
		expect( mergeSort(abc)).toEqual(abc.sort(sortNumber));
	});
	it('handles lots of objects in array', function() {
		var arr = makeRandArray(100);
		expect( mergeSort(arr)).toEqual(arr.sort(sortNumber));
	});
});

function sortNumber(a,b) {
    return a - b;
}

function makeRandArray(n) {
	// return a random array of n
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * n));
	}
	return arr;
}
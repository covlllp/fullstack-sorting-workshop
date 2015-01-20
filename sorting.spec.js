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
		
		expect( bubbleSort(arr)).toEqual(arr.sort(sortNumber));
	});
	it('handles lots of objects in array', function() {
		var arr = makeRandArray(100);
		expect( bubbleSort(arr)).toEqual(arr.sort(sortNumber));
	});

	it('handles an array of strings', function() {
		var arr = ["hello", "world", "i", "am", "an", "array"];
		expect( bubbleSort(arr)).toEqual(arr.sort());
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
		
		expect( mergeSort(abc)).toEqual(abc.sort(sortNumber));
	});
	
	it('handles lots of objects in array', function() {
		var arr = makeRandArray(100);
		expect( mergeSort(arr)).toEqual(arr.sort(sortNumber));
	});

	it('handles an array of strings', function() {
		var arr = ["hello", "world", "i", "am", "an", "array"];
		expect( mergeSort(arr)).toEqual(arr.sort());
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

for(var i=10; i < 20; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = []
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + "native");
    native_test_array.sort(sortNumber);
    console.timeEnd(num_items + "native");

    console.time(num_items + "bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + "bubble");

    console.time(num_items + "merge");
    mergeSort(m_test_array);
    console.timeEnd(num_items + "merge");  
}
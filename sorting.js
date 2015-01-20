function bubbleSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	for (var i = 0, len = arr.length; i < len; i++) {
		for (var j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	var index = Math.floor(arr.length/2);

	var half2 = arr.slice(index);	
	var half1 = arr.slice(0, index);

	half2 = mergeSort(half2);
	half1 = mergeSort(half1);

	function merge (half1, half2) {
		var merged = [];

		var count1 = 0;
		var count2 = 0;

		while (count1 < half1.length && count2 < half2.length) {
			if (half1[count1] < half2[count2]) {
				merged.push(half1[count1]);
				count1++;
			}
			else {
				merged.push(half2[count2]);
				count2++;	
			}
		}

		function pushRest(merged, arr, index) {
			while (index < arr.length) {
				merged.push(arr[index]);
				index++;
			}
		}

		pushRest(merged, half1, count1);
		pushRest(merged, half2, count2);

		return merged;
	}

	return merge(half1, half2);
}
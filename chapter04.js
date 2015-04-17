// sum of a range

function range(start, end) {
	var arr = [];
	var incr = 1;
	if (arguments.length > 2) {
		incr = arguments[2];
		if (incr == 0) {
			incr = 1;
		}
	}

	function inRange(i, end) {
		if (incr < 0) {
			return i >= end;
		} else {
			return i <= end;
		}
	}

	for (var i = start; inRange(i, end); i = i + incr) {
		arr.push(i);
	}
	return arr;
}

function sum(arr) {
	var sum = 0;
	for (var num in arr) {
		sum += arr[num];
	}
	return sum;
}

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));

// reversing an array

function reverseArray(arr) {
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		res.unshift(arr[i]);
	}
	return res;
}

function reverseArrayInPlace(arr) {
	for (var i = arr.length - 2; i >= 0; i--) {
		arr.push(arr.splice(i, 1).pop());
	}
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// A list

function prepend(element, list) {
	res = { value: element, rest: list };
	return res;
}

function nth(list, n) {
	if (n == 0) {
		return list.value;
	} else if (list.rest == null) {
		return undefined;
	} else {
		return nth(list.rest, n - 1);
	}
}

function arrayToList(arr) {
	var list = null;
	for (var i = arr.length - 1; i >= 0; i--) {
		list = prepend(arr[i], list);
	}
	return list;
}

function listToArray(list) {
	var arr = [];
	while (list != null) {
		arr.push(list.value);
		list = list.rest;
	}
	return arr;
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

// Deep Comparison

function deepEqual(obj1, obj2) {
  if (obj1 != null && typeof obj1 == 'object') {
    if (obj2 == null || typeof obj2 != 'object') {
      return false;
    } else {
      for (var prop in obj1) {
        val1 = obj1[prop];
        val2 = obj2[prop];
        if (val2 == null) {
          return false;
        } else {
          return deepEqual(val1, val2);
        }
      }
    }
  } else {
    return obj1 == obj2;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

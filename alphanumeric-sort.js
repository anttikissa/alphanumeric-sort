function normalCompare(a, b) {
	return (a < b) ? -1 
		: (a > b) ? 1
		: 0;
}

module.exports.compare = function(a, b) {
	if (typeof a == "string" && typeof b == "string")
		return alphanumCompare(a, b);
	return normalCompare(a, b);
};

// prepend every sequence of digits with as many 0's as needed to
// get the digit count to 20.
function preprocess(str) {
	return str.replace(/\d+/g, function(digits) {
		while (digits.length < 20) {
			digits = '0' + digits;
		}
		return digits;
	});
}

module.exports.preprocess = preprocess;

function alphanumCompare(a, b) {
//	console.log("alphanumCompare", a, b);
	var pre1 = preprocess(a);
	var pre2 = preprocess(b);
//	console.log("pre1", pre1, "pre2", pre2);
	var result = normalCompare(pre1, pre2);
//	console.log("result", result);
	return result;
}

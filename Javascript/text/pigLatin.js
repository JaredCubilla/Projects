/*
Pig Latin - Javascript
*/

function igpayAtinlay(str) {
	if (str.charAt(0) === 'a' || str.charAt(0) === 'e' || str.charAt(0) === 'i' || str.charAt(0) === 'o' || str.charAt(0) === 'u') {
		return str += 'way';
	}

	return str.substr(1, str.length+1) + str.charAt(0).toLowerCase() + 'ay';
}

console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
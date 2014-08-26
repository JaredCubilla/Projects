/*
Check if Palindrome - Javascript
*/

function palindrominator(str) {
	if (str === "") {
		return "Empty String";
	}
	return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
}

console.log(palindrominator("pizza")); // false
console.log(palindrominator("racecar")); // true
/*
Check if Palindrome - Javascript
*/

function palindrominator(str) {
	return (str === str.split('').reverse().join(''));
}

console.log(palindrominator("pizza")); // false
console.log(palindrominator("racecar")); // true
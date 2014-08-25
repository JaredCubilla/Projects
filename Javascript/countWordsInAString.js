/*
Count Words in a String - Javascript
*/

function wordCounter(str) {
	return str.split(' ').length;
}

console.log(wordCounter('Call me Ishmael.')); // 3
console.log(wordCounter('A day without sunshine is like, you know, night.')); // 9
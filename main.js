document.getElementById('palindrome-input').addEventListener("keyup", function() {
	document.getElementById('palindrome-result').innerHTML = palindrominator(this.value);
}, false);

document.getElementById('wordCount-input').addEventListener("keyup", function() {
	document.getElementById('wordCount-result').innerHTML = wordCounter(this.value);
}, false);

document.getElementById('reverseString-input').addEventListener("keyup", function() {
	document.getElementById('reverseString-result').innerHTML = reverso(this.value);
}, false);

document.getElementById('pigLatin-input').addEventListener("keyup", function() {
	document.getElementById('pigLatin-result').innerHTML = igpayAtinlay(this.value);
}, false);
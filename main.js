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

document.getElementById('coinFlip-input').addEventListener("keyup", function() {
	var flipped = coinFlip(this.value),
		result = "Record: ";
	for (var i = 0; i < flipped.record.length; i++) {
		result += flipped.record[i];
		if (i !== flipped.record.length - 1) {
			result += ", ";
		}
	}
	result += "<br>Heads Count: " + flipped.headsCount;
	result += "<br>Tails Count: " + flipped.tailsCount;
	document.getElementById('coinFlip-result').innerHTML = result;
}, false);

document.getElementById('factorial-input').addEventListener("keyup", function() {
	document.getElementById('factorial-result').innerHTML = factorialFinderRecursion(this.value);
}, false);
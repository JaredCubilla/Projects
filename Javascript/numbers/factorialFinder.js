/* 
Factorial Finder - Javascript
*/

function factorialFinderRecursion(num) {
	if (num === 0) {
		return 1;
	}
	return (num * factorialFinderRecursion(num - 1));
}

function factorialFinderLoop(num) {
	if (num === 0) {
		return 1;
	}
	var num2 = num;
	while (num-- > 2) {
		num2 *= num;
	}
	return num2;
}
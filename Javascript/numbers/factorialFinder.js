/* 
Factorial Finder - Javascript
*/

function factorialFinderRecursion(num) {
	if (isNaN(num)) {
		return "Not a number";
	}
	if (num === 0) {
		return 1;
	}
	return (num * factorialFinderRecursion(num - 1));
}

function factorialFinderLoop(num) {
	if (isNaN(num)) {
		return "Not a number";
	}
	
	if (num === 0) {
		return 1;
	}
	var num2 = num;
	while (num-- > 2) {
		num2 *= num;
	}
	return num2;
}

console.log(factorialFinderRecursion(5)); // 120
console.log(factorialFinderRecursion(1)); // 1
console.log(factorialFinderRecursion(3)); // 6
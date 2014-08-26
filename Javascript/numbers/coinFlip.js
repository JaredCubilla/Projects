/* 
Coin Flip Simulation - Javascript
*/

function coinFlip(count) {
	var obj = {record: [], headsCount: 0, tailsCount: 0};
	for (var i = 0; i < count; i++) {
		if ((Math.floor((Math.random() * 2) + 1)) === 1) {
			obj.record.push('Heads');
			obj.headsCount++;
		} else {
			obj.record.push('Tails');
			obj.tailsCount++;
		}
	}
	return obj;
}

console.log(coinFlip(2)); // returns an object properties headCount, tailsCount and a record that is 2 items long
console.log(coinFlip(5)); // returns an object properties headCount, tailsCount and a record that is 5 items long
console.log(coinFlip(1)); // returns an object properties headCount, tailsCount and a record that is 1 item long